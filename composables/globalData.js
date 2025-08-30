import { ref } from 'vue';

// Site-specific configuration
export const SITE_CONFIG = {
    siteName: 'Vegasparadise',
    gtmId: 'GTM-WDZ6MFPG',
};

export const lang = ref('');
export const tracker = ref('');
export const jurisdictionCode = ref('');
export const footerIcons = ref([]);
export const footerText = ref([]);
export const globalContent = ref({
  'About Us': 'aboutus',
  'Terms and conditions': 'terms',
  'Privacy Policy': 'privacy',
  'Bonus Policy': 'bonus',
  'Responsible Gaming': 'responsible',
  'Licence': 'license',
  'Payouts': 'payouts',
  'Depositing': 'deposits',
  'Cashing Out': 'withdrawals',
  'FAQ': 'faq',
  'Contact Us': 'contact',
});


// ProgressPlay data:
export const WHITELABEL_ID = 26;
export const PP_API_URL = 'https://content.progressplay.net/api23/api/';
const PP_PROMOTIONS_API = `${PP_API_URL}PromotionsInfo?whitelabelId=${WHITELABEL_ID}&country=`;
export const PP_LOBBY_LINK = 'https://vegasparadise.casino-pp.net/';

// SILVER BULLET VPN FIX: Use LOCAL CloudFlare Functions for VPN compatibility
const KV_GAMES_PRIMARY = '/api/pp/games';           // LOCAL function (same-origin)
const KV_GAMES_FALLBACK = '/api/worker/games';      // LOCAL fallback
const KV_GAMES_EXTERNAL = 'https://access-ppgames.tech1960.workers.dev/'; // External fallback
const KV_GAMES = KV_GAMES_PRIMARY;


// WP-REST-API:
const WP_API = 'https://headless.vegasparadise.com/wp-json/wp/v2/';

//CloudFlare Workers KV data:
//export const KV_GAMES = 'https://access-ppgames.tech1960.workers.dev/';
export const FILTERED_BY_NAME_KV = 'https://access-filterbyname.tech1960.workers.dev/';
const CF_GEO_WORKER = 'https://cf-geo-lookup.tech1960.workers.dev/';
const KV_SUPPORTED_COUNTRIES = "https://access-supportedcountries.tech1960.workers.dev/";
//const REST_COUNTRY_KV = "https://access-restcountries.tech1960.workers.dev/";
const IGP_SUPPORTED_COUNTRIES = "https://igp-supported-countries.tech1960.workers.dev/";
const KV_TRANSLATIONS ="https://access-translations.tech1960.workers.dev/";

const games = ref([]);
const newGames = ref([]);
const filterByName = ref([]);
const popularGames = ref([]);
const casinoGames = ref([]);
const jackpotGames = ref([]);
const slotGames = ref([]);
const liveGames = ref([]);
const scratchGames = ref([]);
const blackjackGames = ref([]);
const rouletteGames = ref([]);
const regLink = ref([null]);
const loginLink = ref([null]);
const playLink = ref([null]);
const msgTranslate = ref({});
const pp_promotions = ref([]);
const promotionsPosts = ref([]);
const countryCode = ref('');
const countryName = ref('');
const countries = ref('');
const country = ref('');
const countryNotSupported = ref(false);
const countriesData = ref([]);

// Cache optimization variables to prevent CPU time limit errors
let gamesCache = null;
let gamesCacheTime = 0;
let gamesRequestInFlight = null; // Prevent simultaneous requests
let contentCache = new Map(); // Cache for compliance content
const footerContentCache = new Map();

// Optimized cache durations
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes for promotions
const GAMES_CACHE_DURATION = 2 * 60 * 60 * 1000; // 2 hours for games (rarely change)
const CONTENT_CACHE_DURATION = 4 * 60 * 60 * 1000; // 4 hours for compliance content (very rarely changes)

// EU Countries array for proper fallback logic
const EU_COUNTRIES = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 
  'SI', 'ES', 'SE', 'GB'  // Include UK as well
];

export async function checkCountry() {
  try {
    const workerResponse = await fetch(CF_GEO_WORKER);
    const workerData = await workerResponse.json();
    const countryCodeValue = workerData.countryCode;

    if (!countryCode.value.includes(countryCodeValue)) {
      countryName.value = workerData.countryName;
      countryNotSupported.value = true;
    }
  } catch (error) {
    console.error('Error checking country:', error);
  }
}

// EU Country Fallback Fix - Get fallback country based on continent
function getFallbackCountry(geoData) {
  if (!geoData) {
    console.log('🌍 FALLBACK: No geo data, defaulting to CA');
    return 'CA';
  }

  const { countryCode, continent } = geoData;
  console.log('🌍 FALLBACK: Processing fallback for', countryCode, 'continent:', continent);

  // Primary check: Use continent data from CloudFlare
  if (continent === 'EU') {
    console.log('🌍 FALLBACK: EU continent detected, using IE');
    return 'IE';
  }

  // Backup check: If continent data is missing, check against EU countries array
  if (!continent || continent === 'Unknown') {
    console.log('🌍 FALLBACK: No continent data, checking EU countries array');
    if (EU_COUNTRIES.includes(countryCode)) {
      console.log('🌍 FALLBACK: Found', countryCode, 'in EU countries array, using IE');
      return 'IE';
    }
  }

  // Default fallback for non-EU countries
  console.log('🌍 FALLBACK: Non-EU country, using CA');
  return 'CA';
}

export async function loadLang() {
  if (typeof window !== 'undefined') {
    let langValue;

    // 1. Check CF_GEO_WORKER for originalLang
    try {
      const workerResponse = await fetch(CF_GEO_WORKER);
      const workerData = await workerResponse.json();
      const originalLang = workerData.countryCode;
      
      console.log('🌍 LANG: Detected country:', originalLang);
      console.log('🌍 LANG: Continent:', workerData.continent);

      // 2:1 Verify value with KV_SUPPORTED_COUNTRIES
      const apiResponse = await fetch(KV_SUPPORTED_COUNTRIES);
      const apiData = await apiResponse.json();
      const foundLangKV = apiData.find(c => c.countryIntlCode === originalLang);

      // Verify value with IGP_SUPPORTED_COUNTRIES
      const igpResponse = await fetch(IGP_SUPPORTED_COUNTRIES);
      const igpData = await igpResponse.json();
      const foundLangIGP = Object.values(igpData).flat().includes(originalLang);

      // Check if the originalLang exists in both KV's
      if (foundLangKV && foundLangIGP) {
        console.log('🌍 LANG: Country', originalLang, 'is supported, using it');
        langValue = originalLang;
        
        // Store globally for Playtech filtering - this is a REAL/SUPPORTED country
        if (typeof window !== 'undefined') {
          window.__isRealCountry = true;
          window.__originalDetectedCountry = originalLang;
          console.log('🇨🇦 PLAYTECH: Real CA detected - Playtech games will be filtered');
        }
      } else {
        // Use proper EU fallback logic instead of hardcoded CA
        const fallbackCountry = getFallbackCountry(workerData);
        console.log('🌍 LANG: Country', originalLang, 'not supported, falling back to', fallbackCountry);
        langValue = fallbackCountry;
        
        // Store globally for Playtech filtering - this is a FALLBACK country
        if (typeof window !== 'undefined') {
          window.__isRealCountry = false;
          window.__originalDetectedCountry = originalLang;
          console.log('🇨🇦 PLAYTECH: Fallback CA detected - Playtech games will be included');
        }
      }
    } catch (error) {
      console.error('🌍 LANG: Error getting country code:', error);
      langValue = 'CA'; // Ultimate fallback
    }

    // 2:2 Check if lang cookie exists
    const cookieLang = getCookie('lang');

    if (cookieLang) {
      // 2:3 Compare values, if same use cookie value
      if (langValue && langValue.toUpperCase() === cookieLang.toUpperCase()) {
        lang.value = cookieLang.toUpperCase();
      } else {
        // 2:4 If NOT same value (or empty lang cookie), set new lang cookie value from CF_GEO_WORKER value
        lang.value = langValue || 'CA';
        // Set the 'lang' cookie to the selected language for one month
        setCookie('lang', lang.value, 30, 'None', true);
      }
    } else {
      // 3. Fallback to "CA" if all the above fails
      lang.value = langValue || 'CA';
      // Set the 'lang' cookie to the selected language for one month
      setCookie('lang', lang.value, 30, 'None', true);
    }

    // Fetch the country data based on the selected language
    await fetchCountry();
    
    console.log('🌍 LANG: Final language set to:', lang.value);
  }
}

async function fetchCountry() {
  try {
    const response = await fetch(KV_SUPPORTED_COUNTRIES);
    if (!response.ok) {
      throw new Error(`Failed to fetch country data (status ${response.status})`);
    }
    const data = await response.json();
    //console.log('Selected language:', lang.value);
    const country = data.find(c => c.countryIntlCode === lang.value);
    //console.log('Found country:', country);
    if (country) {
      jurisdictionCode.value = country.jurisdictionCode;
      //console.log('jurisdictionCode:', jurisdictionCode.value);
    }
  } catch (error) {
    console.error('Error fetching country data:', error);
  }
  await loadTranslations();
}

export async function loadTranslations() {
  try {
    const response = await fetch(IGP_SUPPORTED_COUNTRIES);
    const IGP_SUPPORTED_COUNTRIES_KV = await response.json();
    let langCode = lang.value;
    const countryCode = langCode;
    if (!Object.values(IGP_SUPPORTED_COUNTRIES_KV).flat().includes(countryCode)) {
      langCode = 'EN';
    } else {
      for (const [key, value] of Object.entries(IGP_SUPPORTED_COUNTRIES_KV)) {
        if (value.includes(countryCode)) {
          langCode = key.toLowerCase();
          break;
        }
      }
    }

    // Fetch translations from the worker
    const translationsResponse = await fetch(`${KV_TRANSLATIONS}?lang=${langCode}`);
    const allTranslations = await translationsResponse.json();

    msgTranslate.value = allTranslations;
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

// UNIFIED PROMOTIONS API with local function for VPN compatibility
async function fetchApiPromotions() {
  try {
    console.log('🎁 PROMOTIONS: Starting fetchApiPromotions()');
    console.log('🔍 PROMOTIONS: lang.value =', lang.value);
    console.log('🔍 PROMOTIONS: WHITELABEL_ID =', WHITELABEL_ID);
    console.log('🔍 PROMOTIONS: process.client =', process.client);
    
    // Use local CloudFlare Function for client-side calls (VPN compatibility), direct API for server-side
    const apiUrl = process.client
      ? `/api/pp/promotions?whitelabelId=${WHITELABEL_ID}&country=${lang.value}`
      : `${PP_API_URL}PromotionsInfo?whitelabelId=${WHITELABEL_ID}&country=${lang.value}`;
    
    console.log('📡 PROMOTIONS: Fetching promotions from URL:', apiUrl);
    
    const response = await fetch(apiUrl);
    console.log('📊 PROMOTIONS: Response status:', response.status);
    console.log('📊 PROMOTIONS: Response ok:', response.ok);
    
    if (!response.ok) {
      console.error('❌ PROMOTIONS: HTTP error:', response.status, response.statusText);
      pp_promotions.value = []; // Graceful fallback
      return;
    }
    
    const responseData = await response.json();
    
    // Handle response format (local function returns data directly)
    const data = responseData;
    
    console.log('✅ PROMOTIONS: Data received:', Array.isArray(data) ? `Array with ${data.length} items` : typeof data);
    console.log('📄 PROMOTIONS: Data sample:', data ? JSON.stringify(data).substring(0, 200) : 'No data');
    
    pp_promotions.value = data || [];
    console.log('✅ PROMOTIONS: pp_promotions.value set successfully');
  } catch (error) {
    console.error('❌ PROMOTIONS: Error fetching promotions:', error);
    console.error('❌ PROMOTIONS: Error stack:', error.stack);
    pp_promotions.value = []; // Ensure it's always an array on error
  }
}

export async function fetchPromotions() {
  try {
    console.log('🎁 WP PROMOTIONS: Fetching WordPress promotions via local function...');
    
    // Use local CloudFlare Function to avoid CORS issues (SILVER BULLET VPN FIX)
    const apiUrl = process.client
      ? '/api/wp/promotions' // LOCAL function (same-origin, no CORS)
      : `${WP_API}promotions/?_fields=content,yoast_head_json.description,yoast_head_json.og_title,acf&acf_format=standard`; // Server-side direct
    
    console.log('🎁 WP PROMOTIONS: Using endpoint:', apiUrl);
    const response = await fetch(apiUrl);
    console.log('🎁 WP PROMOTIONS: Response received:', response.status, response.statusText);
    
    const data = await response.json();
    console.log('JSON data:', data);
    
    const filteredData = data.filter((item) => {
      const geoTarget = item.acf.geo_target_country_sel;
      return geoTarget && geoTarget.includes(lang.value);
    });
    console.log('Filtered data:', filteredData);
    
    // If no posts are found for the selected country, include the CA post
    if (filteredData.length === 0) {
      const caPosts = data.filter((item) => {
        const geoTarget = item.acf.geo_target_country_sel;
        return geoTarget && geoTarget.includes('IE');
      });
      //console.log('CA Posts:', caPosts);
      filteredData.push(...caPosts);
    }
    
    promotionsPosts.value = filteredData;
    console.log('promotionsPosts.value:', promotionsPosts.value);
    
  } catch (error) {
    console.error('❌ WP PROMOTIONS: Error fetching WordPress promotions:', error);
    console.error('❌ WP PROMOTIONS: Error details:', error.message);
    promotionsPosts.value = []; // Ensure it's always an array on error
  }
}

export async function fetchFilterByName() {
  try {
    const response = await fetch(FILTERED_BY_NAME_KV);
    const data = await response.json();
    filterByName.value = data;
  } catch (error) {
    console.error('Error fetching filterByName:', error);
  }
}

// SILVER BULLET VPN FIX: Optimized fetchGames with caching and triple-fallback
async function fetchGames() {
  try {
    // 1. Check cache FIRST (before Worker call)
    const now = Date.now();
    if (gamesCache && (now - gamesCacheTime) < GAMES_CACHE_DURATION) {
      console.log('🎮 GAMES: Using cached games data');
      // Set all game categories from cache
      games.value = gamesCache.games;
      newGames.value = gamesCache.newGames;
      popularGames.value = gamesCache.popularGames;
      casinoGames.value = gamesCache.casinoGames;
      slotGames.value = gamesCache.slotGames;
      jackpotGames.value = gamesCache.jackpotGames;
      liveGames.value = gamesCache.liveGames;
      scratchGames.value = gamesCache.scratchGames;
      blackjackGames.value = gamesCache.blackjackGames;
      rouletteGames.value = gamesCache.rouletteGames;
      await updateLinks();
      return; // No Worker call needed!
    }
    
    // 2. Check if request already in flight (prevent duplicate calls)
    if (gamesRequestInFlight) {
      console.log('🎮 GAMES: Request already in progress, waiting...');
      await gamesRequestInFlight;
      // After waiting, use data from completed request
      if (gamesCache) {
        console.log('🎮 GAMES: Using data from completed request');
        games.value = gamesCache.games;
        newGames.value = gamesCache.newGames;
        popularGames.value = gamesCache.popularGames;
        casinoGames.value = gamesCache.casinoGames;
        slotGames.value = gamesCache.slotGames;
        jackpotGames.value = gamesCache.jackpotGames;
        liveGames.value = gamesCache.liveGames;
        scratchGames.value = gamesCache.scratchGames;
        blackjackGames.value = gamesCache.blackjackGames;
        rouletteGames.value = gamesCache.rouletteGames;
        await updateLinks();
      }
      return; // No duplicate Worker call!
    }
    
    // 3. Start new request (only one at a time)
    console.log('🎮 GAMES: Fetching fresh games data...');
    gamesRequestInFlight = actuallyFetchGames();
    await gamesRequestInFlight;
    gamesRequestInFlight = null;

  } catch (error) {
    console.error('❌ GAMES: Error fetching games:', error);
    gamesRequestInFlight = null; // Reset on error
    // Don't clear existing games on error, just log it
  }
}

// Triple-fallback strategy for maximum VPN compatibility
async function actuallyFetchGames() {
  try {
    await fetchFilterByName();
    
    // 1. Try local CloudFlare Function first (SILVER BULLET VPN FIX)
    console.log('🎮 GAMES: Trying local function:', KV_GAMES_PRIMARY);
    let response = await fetch(KV_GAMES_PRIMARY);
    let data;
    
    if (response.ok) {
      data = await response.json();
      console.log('✅ GAMES: Local games function succeeded');
    } else {
      // 2. Try local worker fallback
      console.log('🎮 GAMES: Trying local worker fallback:', KV_GAMES_FALLBACK);
      response = await fetch(KV_GAMES_FALLBACK);
      if (response.ok) {
        data = await response.json();
        console.log('✅ GAMES: Local worker fallback succeeded');
      } else {
        // 3. Final fallback to external worker
        console.log('🎮 GAMES: Trying external worker:', KV_GAMES_EXTERNAL);
        response = await fetch(KV_GAMES_EXTERNAL);
        if (response.ok) {
          data = await response.json();
          console.log('✅ GAMES: External worker succeeded');
        } else {
          throw new Error('All games API endpoints failed');
        }
      }
    }

    // Process the games data
    const filteredGames = data.filter(game => {
      const hasName = filterByName.value.some(name => game.gameName.toLowerCase().includes(name.toLowerCase()));
      const hasId = filterByName.value.some(id => game.gameId == id);

      // Check for jurisdictionCode and excluded countries
      const isExcludedJurisdiction = game.excludedJurisdictions?.includes(jurisdictionCode.value);
      const isExcludedCountry = game.excludedCountries?.includes(lang.value);

      // PLAYTECH FILTERING FOR REAL CA USERS
      let isPlaytechExcluded = false;
      if (lang.value === 'CA') {
        // Get real country detection info from window global (set during loadLang)
        const isRealCountry = (typeof window !== 'undefined') ? window.__isRealCountry : true;
        const originalDetectedCountry = (typeof window !== 'undefined') ? window.__originalDetectedCountry : lang.value;
        
        if (isRealCountry && originalDetectedCountry === 'CA') {
          // This is a REAL CA user (not fallback) - filter Playtech
          const isPlaytech = game.provider?.toLowerCase() === 'playtech' || 
                            game.subProvider?.toLowerCase() === 'playtech';
          if (isPlaytech) {
            console.log('🇨🇦 PLAYTECH: Filtering out Playtech game for real CA:', game.gameName);
            isPlaytechExcluded = true;
          }
        } else {
          // This is a FALLBACK CA user (non-EU country falling back to CA) - include Playtech
          console.log('🇨🇦 PLAYTECH: Fallback CA user - Playtech games included');
        }
      }

      return !(hasName || hasId || isExcludedJurisdiction || isExcludedCountry || isPlaytechExcluded);
    });

    games.value = filteredGames;
    newGames.value = filteredGames.filter(game => game.gameFilters?.includes('New'));
    popularGames.value = filteredGames.filter(game => game.gameFilters?.includes('Featured'));
    casinoGames.value = filteredGames.filter(game => game.gameType?.includes('Casino'));
    slotGames.value = filteredGames.filter(game => game.gameType?.includes('Slots'));
    jackpotGames.value = filteredGames.filter(game => game.gameType?.includes('Jackpots'));
    liveGames.value = filteredGames.filter(game => game.gameType?.includes('Live'));
    scratchGames.value = filteredGames.filter(game => game.gameName?.toLowerCase().includes('scratch'));
    blackjackGames.value = filteredGames.filter(game => game.gameFilters?.includes('Blackjack'));
    rouletteGames.value = filteredGames.filter(game => game.gameFilters?.includes('Roulette'));

    // Cache the processed games data to reduce Worker load
    gamesCache = {
      games: games.value,
      newGames: newGames.value,
      popularGames: popularGames.value,
      casinoGames: casinoGames.value,
      slotGames: slotGames.value,
      jackpotGames: jackpotGames.value,
      liveGames: liveGames.value,
      scratchGames: scratchGames.value,
      blackjackGames: blackjackGames.value,
      rouletteGames: rouletteGames.value
    };
    gamesCacheTime = Date.now();
    
    console.log('✅ GAMES: Games data cached successfully for', GAMES_CACHE_DURATION / 60000, 'minutes');

    await updateLinks();

  } catch (error) {
    console.error('❌ GAMES: All games API endpoints failed:', error);
    // Graceful degradation - don't clear existing games, just log error
    throw error;
  }
}

async function updateLinks() {
  const tracker = await handleParameter('tracker');
  const btag = await handleParameter('btag');
  const affid = await handleParameter('affid');
  const lang = getCookie('lang');

  const queryStringParams = [
    tracker ? `tracker=${tracker}` : '',
    btag ? `btag=${btag}` : '',
    affid ? `affid=${affid}` : '',
  ].filter(param => param !== '').join('&'); // Join only the non-empty parameters

  regLink.value = `${PP_LOBBY_LINK}${queryStringParams ? '?' + queryStringParams : ''}#registration`;
  loginLink.value = `${PP_LOBBY_LINK}${queryStringParams ? '?' + queryStringParams : ''}#login`;
  playLink.value = `${PP_LOBBY_LINK}${queryStringParams ? '?' + queryStringParams : ''}#play/`;
}

export async function handleParameter(parameterName) {
  const params = new URLSearchParams(window.location.search);
  const parameterFromURL = params.get(parameterName);
  const parameterFromCookie = getCookie(parameterName);

  if (parameterFromURL) {
    setCookie(parameterName, parameterFromURL, 30, 'None', true);
    return parameterFromURL;
  } else if (parameterFromCookie) {
    return parameterFromCookie;
  } else {
    return ''; // Return an empty string if the parameter is not found in the URL or cookies
  }
}

export async function fetchSupportedCountries() {
  const response = await fetch(IGP_SUPPORTED_COUNTRIES);
  return await response.json();
}



// CONTENT API: Use external workers for KV caching benefits
export async function fetchCachedContent(code, country = lang.value) {
  // Validate code parameter
  if (!code || code === 'undefined' || typeof code !== 'string') {
    console.error('❌ CONTENT: Invalid code parameter:', { code, type: typeof code });
    return '';
  }
  
  const resolvedCountry = country;
  const cacheKey = `content:${code}:${WHITELABEL_ID}:${resolvedCountry}`;
  const now = Date.now();
  
  // Check local cache first
  if (contentCache.has(cacheKey)) {
    const cached = contentCache.get(cacheKey);
    if ((now - cached.timestamp) < CONTENT_CACHE_DURATION) {
      console.log('📄 CONTENT: Using cached content for', code);
      return cached.data;
    }
  }
  
  try {
    console.log('📄 CONTENT: Fetching fresh content for', code);
    console.log('🔍 CONTENT DEBUG: country parameter =', resolvedCountry);
    console.log('🔍 CONTENT DEBUG: lang.value =', lang.value);
    console.log('🔍 CONTENT DEBUG: cache key =', cacheKey);
    console.log('🔍 CONTENT DEBUG: WHITELABEL_ID =', WHITELABEL_ID);
    
    // Use external Worker for KV caching benefits (not local function for content)
    const apiUrl = `https://access-content-pp.tech1960.workers.dev/?type=content&codes=${code}&whitelabelId=${WHITELABEL_ID}&country=${resolvedCountry}`;
    console.log('🔍 CONTENT DEBUG: Full API URL =', apiUrl);
    
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error('❌ CONTENT: HTTP error:', response.status, response.statusText);
      return '';
    }
    
    const responseData = await response.json();
    const data = responseData[code];
    const htmlContent = data && data[0] ? data[0].Html : '';
    
    // Cache the result locally
    contentCache.set(cacheKey, {
      data: htmlContent,
      timestamp: now
    });
    
    console.log('✅ CONTENT: Content cached for', code, 'for', CONTENT_CACHE_DURATION / 60000, 'minutes');
    return htmlContent;
    
  } catch (error) {
    console.error('❌ CONTENT: Error fetching content:', error);
    return '';
  }
}

// Server-side fallback functions for footer content
async function fetchFooterIconsServer(lang) {
  try {
    const response = await fetch(`${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&code=footericon`);
    const data = await response.json();
    footerIcons.value = data;
  } catch (error) {
    console.error('❌ FOOTER ICONS: Server fetch error:', error);
    footerIcons.value = [];
  }
}

async function fetchFooterTextServer(lang) {
  try {
    const response = await fetch(`${PP_API_URL}InfoContent?whitelabelId=${WHITELABEL_ID}&code=footertext`);
    const data = await response.json();
    footerText.value = data;
  } catch (error) {
    console.error('❌ FOOTER TEXT: Server fetch error:', error);
    footerText.value = [];
  }
}

// UNIFIED FOOTER CONTENT API: External workers for KV caching
export async function fetchFooterContent(lang) {
  const cacheKey = `footer_${lang}`;
  
  if (footerContentCache.has(cacheKey)) {
    const cached = footerContentCache.get(cacheKey);
    footerIcons.value = cached.footericon || [];
    footerText.value = cached.footertext || [];
    console.log('📄 FOOTER: Using cached footer content');
    return;
  }

  try {
    console.log('📄 FOOTER: Fetching from external worker for KV caching');
    
    // Use external worker for proper KV caching (unified call for both icons and text)
    const apiUrl = `https://access-content-pp.tech1960.workers.dev/?type=content&codes=footericon,footertext&whitelabelId=${WHITELABEL_ID}&country=${lang}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    
    footerIcons.value = data.footericon || [];
    footerText.value = data.footertext || [];
    
    // Cache the unified result
    footerContentCache.set(cacheKey, data);
    console.log('✅ FOOTER: External worker with KV caching succeeded');
  } catch (error) {
    console.error('❌ FOOTER: Error:', error);
    footerIcons.value = [];
    footerText.value = [];
  }
}

// Legacy functions for backward compatibility (now use unified function)
export async function fetchFooterIcons(lang) {
  await fetchFooterContent(lang);
}

export async function fetchFooterText(lang) {
  await fetchFooterContent(lang);
}



function setCookie(name, value, days, sameSite, secure) {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  const sameSiteAttribute = sameSite ? '; SameSite=' + sameSite : '';
  const secureAttribute = secure ? '; Secure' : '';
  document.cookie = name + '=' + (value || '') + expires + sameSiteAttribute + secureAttribute + '; path=/';
}

function getCookie(name) {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export async function fetchCountriesData() {
  try {
    const IGP_SUPPORTED_COUNTRIES_KV = await fetchSupportedCountries();
    const countries = [];

    for (const [language, countryCodes] of Object.entries(IGP_SUPPORTED_COUNTRIES_KV)) {
      for (const countryCode of countryCodes) {
        try {
          countries.push({
            name: countryCode,
            code: countryCode,
            language: language,
            // Since REST_COUNTRY_KV is commented out, we'll use simple flags
            flagUrl: `/flags/${countryCode.toLowerCase()}.svg`
          });
        } catch (error) {
          console.error(`Error processing country ${countryCode}:`, error);
          continue;
        }
      }
    }

    return countries.filter(country => country.language !== '');
  } catch (error) {
    console.error('Error in fetchCountriesData:', error);
    return [];
  }
}


export { 
    //fetchPromotions, 
    fetchApiPromotions, 
    games, 
    newGames, 
    popularGames, 
    jackpotGames, 
    casinoGames, 
    slotGames, 
    scratchGames, 
    liveGames,
    blackjackGames,
    rouletteGames,
    regLink,
    loginLink,
    playLink,
    msgTranslate,
    pp_promotions,
    promotionsPosts,
    countryCode,
    countryName,
    countries,
    country,
    countriesData,
    countryNotSupported,
    fetchGames,
    getCookie, 
    setCookie, 
};
