import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  devServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: +(process.env.PORT ?? 3000),
  },

  nitro: {
    static: true,
  },

  css: ['~/assets/main.css'],

  modules: [
    '@nuxtseo/module',
    '@nuxtjs/color-mode',
    ['unplugin-icons/nuxt', {
      autoInstall: true,
      customCollections: {
        hnze: FileSystemIconLoader('./src/assets/icons'),
      },
    }],
    '@nuxtjs/tailwindcss',
  ],

  site: {
    name: 'Honoré Nintunze - Fullstack Web Developer',
  },

  tailwindcss: {
    configPath: '~~/tailwind.config',
  },

  colorMode: {
    classSuffix: '',
  },
})
