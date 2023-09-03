// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      // '@nuxtjs/axios',
      // '@nuxtjs/auth',
      '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  imports: {
    dirs: ['stores'],
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  build: {
    publicPath: process.env.PUBLIC_PATH,
  },
  runtimeConfig: {
    public: {
      mongodbUri: process.env.MANGO_URI,
      AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
      AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
      AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL,
    }
  },
  auth: {
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/'
      }
    }
  },
  router: {
    base: '/'
  },
})
