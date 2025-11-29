import { z } from 'zod/v4'

// Navigation bar schema
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
  showLetsMeetLink: z.boolean().optional().default(true),
  currentCountryFlag: z.string().optional().default('flagpack:fr'),
  currentCity: z.string().optional().default('Paris'),
  socialLinks: z
    .array(
      z.object({
        id: z.string().optional(),
        icon: z.string(),
        label: z.string(),
        href: z.string(),
        isCopyLinkAction: z.boolean().optional().default(false),
      }),
    )
    .optional(),
})

// Navigation bar schema-infered type
export type NavigationBar = z.infer<typeof navigationBarSchema>
