import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {

    // CV
    // cv_intro_fr: defineCollection({
    //   type: 'data',
    //   source: 'cv/fr/intro.md',
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),

    // cv_meta_fr: defineCollection({
    //   type: 'data',
    //   source: 'cv/fr/meta.yaml',
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),

    // cv_work_fr: defineCollection({
    //   type: 'data',
    //   source: 'cv/fr/work_items/**/*.md',
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),
    // cv_education_fr: defineCollection({
    //   type: 'data',
    //   source: 'cv/fr/education_items/**/*.md',
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),
    // cv_skills_fr: defineCollection({
    //   type: 'data',
    //   source: 'cv/fr/skills.yaml',
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),
    // cv_hobbies_fr: defineCollection({
    //   type: 'data',
    //   source: 'cv/fr/hobbies.md',
    //   schema: z.object({
    //     date: z.string(),
    //   }),
    // }),

    // cv_en: defineCollection({
    //   type: 'page',
    //   source: 'blog/*.md',
    //   schema: z.object({
    //     date: z.string()
    //   })
    // }),

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
