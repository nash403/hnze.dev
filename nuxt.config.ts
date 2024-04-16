import { FileSystemIconLoader } from 'unplugin-icons/dist/loaders.js'
import { consola } from 'consola'
import { freezeColorModeOnEveryPages } from './src/hooks/freezeColorMode'
import { DEFAULT_THEME } from './config/contants'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devServer: {
    host: import.meta.env.HOST ?? '0.0.0.0',
    port: +(import.meta.env.PORT ?? 3000),
    https: import.meta.env.WEBAPP_LOCAL_CERTS_PATH
      ? {
          key: import.meta.env.WEBAPP_LOCAL_CERTS_PATH + '/rootCA-key.pem',
          cert: import.meta.env.WEBAPP_LOCAL_CERTS_PATH + '/rootCA.pem',
        }
      : false,
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    serveStatic: true,
  },

  components: [
    { path: '~/components/ui', prefix: '', pathPrefix: false },
    { path: '~/components/layout', prefix: 'H', pathPrefix: false },
    { path: '~/components', prefix: 'H', pathPrefix: false },
  ],

  app: {
    rootId: '__hnze-app-nuxt',
    head: {
      titleTemplate: '%s %separator %siteName',
    },
  },

  runtimeConfig: {
    public: {
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
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n.config.ts', // relative to /<rootDir>

        types: 'composition',

        lazy: true,
        langDir: './locales', // relative to /<srcDir>
        strategy: 'prefix_except_default',
        // strategy: 'prefix_and_default',
        locales: [
          { code: 'fr', iso: 'fr-FR', file: 'fr-FR.json', name: 'FR' },
          { code: 'en', iso: 'en-US', file: 'en-US.json', name: 'EN', isCatchallLocale: true, disabled: false },
        ],
      },
    ],

    '@nuxtjs/seo',

    [
      '@nuxtjs/tailwindcss',
      {
        configPath: '~~/tailwind.config', // uses nuxt alias to /<rootDir>
      },
    ],

    [
      '@nuxtjs/color-mode',
      {
        fallback: DEFAULT_THEME,
        classSuffix: '',
      },
    ],

    [
      'unplugin-icons/nuxt',
      {
        autoInstall: true,
        customCollections: {
          hnze: FileSystemIconLoader('./src/assets/icons'), // relative to /<rootDir>
          'hnze-companies': FileSystemIconLoader('./src/assets/icons/companies'),
        },
      },
    ],

    [
      '@nuxt/image',
      {
        domains: [],
      },
    ],

    '@vueuse/nuxt',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  hooks: {
    'pages:extend' (pages) {
      // TODO: remove this hook when dark mode is supported
      consola.warn(`[nuxt.config][hook(pages:extend)] Forcing all pages to use ${DEFAULT_THEME} color mode`)
      freezeColorModeOnEveryPages(pages, DEFAULT_THEME)
    },
  },
})
