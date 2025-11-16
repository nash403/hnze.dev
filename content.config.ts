import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {

    // Navigation data
    navigation_fr: defineCollection({
      type: 'data',
      source: {
        include: 'data/navigation.fr.yml',
      },
    }),

    navigation_en: defineCollection({
      type: 'data',
      source: {
        include: 'data/navigation.en.yml',
      },
    }),

    // Pages fed with md content
    pages_fr: defineCollection({
      type: 'page',
      source: {
        include: 'pages/fr/**/*.md',
        prefix: '',
      },
    }),

    pages_en: defineCollection({
      type: 'page',
      source: {
        include: 'pages/en/**/*.md',
        prefix: '',
      },
    }),

    // Single page CV
    resume_fr: defineCollection({
      type: 'page',
      source: {
        include: 'cv/resume_fr.md',
      },
    }),

    resume_en: defineCollection({
      type: 'page',
      source: {
        include: 'cv/resume_en.md',
      },
    }),

    // Blog pages fed with md content
    blog_fr: defineCollection({
      type: 'page',
      source: {
        include: 'blog/fr/**/*.md',
        prefix: '',
      },
    }),

    blog_en: defineCollection({
      type: 'page',
      source: {
        include: 'blog/en/**/*.md',
        prefix: '',
      },
    }),

  },
})
