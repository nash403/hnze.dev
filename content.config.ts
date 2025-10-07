import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {

    // CV
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
