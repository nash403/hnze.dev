import { FileSystemIconLoader } from 'unplugin-icons/dist/loaders.js'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: +(process.env.PORT ?? 3000),
    https: process.env.WEBAPP_LOCAL_CERTS_PATH
      ? {
          key: process.env.WEBAPP_LOCAL_CERTS_PATH + '/rootCA-key.pem',
          cert: process.env.WEBAPP_LOCAL_CERTS_PATH + '/rootCA.pem',
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
    static: true,
  },

  components: [
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
        // defaultLocale: 'fr',

        detectBrowserLanguage: {
          // redirectOn: 'no_prefix',
          useCookie: false,
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
        locales: [
          { code: 'fr', iso: 'fr-FR', file: 'fr.json5', name: 'Français' },
          { code: 'en', iso: 'en-US', file: 'en.json5', name: 'English' },
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
        classSuffix: '',
      },
    ],

    [
      'unplugin-icons/nuxt',
      {
        autoInstall: true,
        customCollections: {
          hnze: FileSystemIconLoader('./src/assets/icons'), // relative to /<rootDir>
        },
      },
    ],
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
