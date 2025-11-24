import tailwindcss from '@tailwindcss/vite'
import { defineRuntimeOptions } from './config'

const { enableDebugMode, https, defaultColorMode } = defineRuntimeOptions()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],

  imports: {
    presets: [
      // Example
      // {
      //   from: '@vueuse/components',
      //   imports: ['UseClipboard'],
      // },
    ],
  },

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
    preference: 'light', // default value of $colorMode.preference
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

  content: {
    preview: {
      // force module initialization on dev env
      dev: true,
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'hnze.dev',
        owner: 'nash403',
        url: 'https://github.com/nash403/hnze.dev',
      },
    },
  },

  runtimeConfig: {
    public: {
      siteName: 'Honoré Nintunze (Fullstack Web Developer)',
      siteNameSeparator: '-',

      frPhoneNumber: '+33633221100',
      caPhoneNumber: '+15145551234',
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

  debug: enableDebugMode,

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    defaultLocale: process.env.DEFAULT_LOCALE || 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    strategy: 'prefix_and_default',
    // customRoutes: 'meta',
    locales: [
      {
        code: 'en', language: 'en', file: 'en-US.json', name: 'EN',
        disabled: false,
      },
      {
        code: 'fr', language: 'fr', file: 'fr-FR.json', name: 'FR',
        disabled: false /* disable in the language switcher UI */,
      },
    ],
    // baseUrl: 'https://hnze.dev', // Use NUXT_PUBLIC_I18N_BASE_URL to configure
  },

  icon: {
    cssLayer: 'base',
    customCollections: [
      {
        prefix: 'hnze',
        dir: './app/assets/icons',
      },
    ],
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [],
      scan: true,
      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
    serverBundle: {
      // list of icon collections to include in the server bundle
      // collections: [],
    },
  },
})
