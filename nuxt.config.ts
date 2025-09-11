import { defineRuntimeOptions } from './config'

const { https } = defineRuntimeOptions()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
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
  },

  app: {
    rootId: '__hnze-app-nuxt',
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      siteName: 'Honoré Nintunze - Fullstack Web Developer',
      siteNameSeparator: '|',
      i18n: {
        // should be set by DEFAULT_LOCALE env variable
        defaultLocale: 'en',

        detectBrowserLanguage: {
          // redirectOn: 'no_prefix',
          useCookie: true,
        },
      },
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts'
  ]
})
