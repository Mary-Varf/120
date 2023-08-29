// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
  ],
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  runtimeConfig: {
    mongodbUri: process.env.MANGO_URI,
  },
  imports: {
    dirs: ['stores'],
  },
})
