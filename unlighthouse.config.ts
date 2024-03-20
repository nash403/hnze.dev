import { defineConfig } from 'unlighthouse'

export default defineConfig({
  debug: true,
  site: `http://${process.env.HOST ?? '0.0.0.0'}:${+(process.env.PORT ?? 3000)}`,
  scanner: {
    device: 'desktop',
  },
})
