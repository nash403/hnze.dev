import { FileSystemIconLoader } from 'unplugin-icons/dist/loaders.js'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  srcDir: 'src/',

  devServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: +(process.env.PORT ?? 3000),
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    static: true,
  },

  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
    },
  },

  runtimeConfig: {
    public: {
      i18n: {
        defaultLocale: 'fr-FR',
        detectBrowserLanguage: {
          fallbackLocale: 'fr-FR',
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
        locales: [
          { code: 'fr-FR', iso: 'fr-FR', file: 'fr-FR.json5', name: 'Français' },
          { code: 'en-US', iso: 'en-US', file: 'en-US.json5', name: 'English' },
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
