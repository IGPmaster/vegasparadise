// Nuxt server route for local dev (Cloudflare Functions don't run locally)
// Proxies to ProgressPlay API with fallback to Cloudflare Worker

const PP_API_URL = 'https://content.progressplay.net/api23/api/game?whitelabelId=26';
const FALLBACK_URL = 'https://access-ppgames.tech1960.workers.dev/';

export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(PP_API_URL);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(`PP API returned ${response.status}`);
  } catch (error) {
    console.warn('PP API failed, trying fallback:', error.message);
    try {
      const fallbackResponse = await fetch(FALLBACK_URL);
      if (fallbackResponse.ok) {
        const data = await fallbackResponse.json();
        return data;
      }
      throw new Error(`Fallback returned ${fallbackResponse.status}`);
    } catch (fallbackError) {
      console.error('All games endpoints failed:', fallbackError.message);
      throw createError({ statusCode: 502, statusMessage: 'All games API endpoints failed' });
    }
  }
});
