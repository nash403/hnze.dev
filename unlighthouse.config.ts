import { defineConfig } from 'unlighthouse'

export default defineConfig({
  site: process.env.NUXT_PUBLIC_SITE_URL ?? 'http://0.0.0.0:3000',
  scanner: {
    device: 'desktop',
  },
})
