export default defineNuxtConfig({
  // Keep SSR true for Cloudflare Pages
  ssr: true,

  nitro: {
    preset: 'cloudflare-pages',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      fallback: true,
      crawlLinks: true,     // Add this to prerender linked pages
      routes: ['/']         // Add this to ensure root is prerendered
    }
  },

  // Use ISR (Incremental Static Regeneration) for all routes
  routeRules: {
    '/**': { isr: true }
  },

  // Add this experimental feature for better Cloudflare Pages compatibility
  experimental: {
    payloadExtraction: false
  },

  css: ['~/assets/main.css'],

  plugins: [
    '~/plugins/language.js',
    '~/plugins/hreflang.js',
    '~/plugins/vue-gtm.client.js',
  ],

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      title: 'VegasParadise - Your Casino!',
      meta: [
        { name: 'description', content: "Enjoy seamless mobile gaming with VegasParadise's mobile slots." }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
    }
  },

  compatibilityDate: '2025-04-03',
});