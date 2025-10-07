import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {

    // CV
    cv_fr: defineCollection({
      type: 'page',
      source: {
        include: 'cv/resume_fr.md',
      },
    }),

    cv_en: defineCollection({
      type: 'page',
      source: {
        include: 'cv/resume_en.md',
      },
    }),

    // Blog pages
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
