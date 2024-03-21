import type { NuxtConfig } from 'nuxt/config'

export const baseNuxtConfig: NuxtConfig = {
  srcDir: 'src/',

  devServer: {
    host: process.env.HOST ?? '0.0.0.0',
    port: +(process.env.PORT ?? 3000),
  },

  css: ['~/assets/main.css'],

  nitro: {
    static: true,
  },
}
