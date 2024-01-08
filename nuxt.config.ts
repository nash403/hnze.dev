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

  modules: ['@nuxtjs/eslint-module', '@nuxtseo/module', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/tailwindcss'],

  site: {
    name: 'Honoré Nintunze\'s homepage',
  },

  tailwindcss: {
    configPath: '~~/tailwind.config',
  },
})
