import tailwindcss from '@tailwindcss/vite'
import { defineRuntimeOptions } from './config'

const { https, defaultColorMode } = defineRuntimeOptions()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
  ],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    rootId: '__hnze-app-nuxt',
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/styles/main.css'],

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: defaultColorMode, // fallback value if not system preference found
    dataValue: 'theme',
    hid: 'hnze-nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'cookie', // or 'sessionStorage' or 'cookie'
    storageKey: 'hnze-nuxt-color-mode',
  },

  runtimeConfig: {
    public: {
      siteName: 'Honoré Nintunze - Fullstack Web Developer',
      siteNameSeparator: '|',
      defaultColorMode,
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

  devServer: {
    port: +(process.env.PORT ?? 3000),
    https,
  },
  compatibilityDate: '2025-07-15',

  nitro: {
    serveStatic: true,
  },

  vite: {
    server: {
      https,
      hmr: {
        protocol: process.env.WEBAPP_LOCAL_USE_SSL ? 'wss' : 'ws',
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
