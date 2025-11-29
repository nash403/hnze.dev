import { defineContentConfig, defineCollection } from '@nuxt/content'
// Using relative paths as nuxt aliases and auto-import paths are not available in this file's context
import { navigationBarSchema } from './shared/types'

export default defineContentConfig({
  collections: {

    // Navigation data
    navigation_fr: defineCollection({
      type: 'data',
      source: {
        include: 'data/navigation/navigation.fr.yml',
      },
      schema: navigationBarSchema, // FIXME: fix TS error on Zod type
    }),

    navigation_en: defineCollection({
      type: 'data',
      source: {
        include: 'data/navigation/navigation.en.yml',
      },
      schema: navigationBarSchema, // FIXME: fix TS error on Zod type
    }),

    // Pages fed with md content
    pages: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**/*.md',
        prefix: '',
      },
    }),

    // Blog pages fed with md content
    blog: defineCollection({
      type: 'page',
      source: {
        include: 'blog/**/*.md',
        prefix: '',
      },
    }),
  },
})
