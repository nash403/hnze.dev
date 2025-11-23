import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod/v4'

// Schéma réutilisable pour les données de navigation (fr/en)
export const navigationBarSchema = z.object({
  items: z
    .array(
      z.object({
        icon: z.string().optional(),
        slug: z.string(),
        label: z.string(),
        minBreakpoint: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl']).optional(),
        iconMinBreakpoint: z.enum(['xs', 'sm', 'md', 'lg', 'xl', '2xl']).optional(),
      }),
    )
    .optional(),
  showLetsMeetLink: z.boolean().optional(),
  currentCountryFlag: z.string().optional(),
  currentCity: z.string().optional(),
})

export default defineContentConfig({
  collections: {

    // Navigation data
    navigation_fr: defineCollection({
      type: 'data',
      source: {
        include: 'data/navigation.fr.yml',
      },
      schema: navigationBarSchema, // FIXME: fix TS error on Zod type
    }),

    navigation_en: defineCollection({
      type: 'data',
      source: {
        include: 'data/navigation.en.yml',
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
