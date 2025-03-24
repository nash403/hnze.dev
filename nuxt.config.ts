// https://nuxt.com/docs/api/configuration/nuxt-config

const caName = ['localhost', '0.0.0.0'].includes(process.env.HOST as string)
  ? 'rootCA'
  : process.env.HOST

const https = process.env.WEBAPP_LOCAL_USE_SSL
  ? {
    key: process.env.CAROOT + `/${`${caName}-key`}.pem`,
    cert: process.env.CAROOT + `/${`${caName}`}.pem`,
  }
  : undefined

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2025-10-03',

  // Env variables
  runtimeConfig: {
    public: {
      TOTO: '',
    },
    FOO: process.env.FOO || '',
  },

  // Installed modules
  modules: [
    '@nuxt/content',
  ],

  // Other configurations
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  devServer: {
    port: +(process.env.PORT ?? 3000),
    https,
  },

  vite: {
    server: {
      https,
      hmr: {
        protocol: process.env.WEBAPP_LOCAL_USE_SSL ? 'wss' : 'ws'
      }
    }
  }
})
