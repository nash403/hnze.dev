import type { NuxtConfig } from 'nuxt/schema'

export const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  public: {
    i18n: {
      defaultLocale: 'fr',
      detectBrowserLanguage: {
        fallbackLocale: 'fr',
      },
    },
  },
}
