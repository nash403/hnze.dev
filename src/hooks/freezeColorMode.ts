import type { NuxtPage } from 'nuxt/schema'
import type { DEFAULT_THEME } from '~~/config/contants'

export function freezeColorModeOnEveryPages (pages: NuxtPage[], mode: typeof DEFAULT_THEME = 'light') {
  for (const page of pages) {
    page.meta ||= {}
    // This will override any colorMode set in `definePageMeta` in the page
    page.meta.colorMode = mode
    if (page.children) {
      freezeColorModeOnEveryPages(page.children)
    }
  }
}
