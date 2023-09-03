export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
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
