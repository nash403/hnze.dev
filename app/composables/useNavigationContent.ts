import type { Collections, NavigationEnCollectionItem, NavigationFrCollectionItem } from '@nuxt/content'
import type { NavigationBar } from '#shared/types'

export const NAVIGATION_DATA_KEY_PREFIX = 'navigation_'

export const useAsyncNavigationContentData = (options = {}) => {
  const $config = useRuntimeConfig()
  const { locale } = useI18n()

  return useAsyncData(
    `${NAVIGATION_DATA_KEY_PREFIX}${locale.value}`,
    async () => {
    // Build collection name based on current locale
      const content = await queryCollection((`${NAVIGATION_DATA_KEY_PREFIX}${locale.value}`) as keyof Collections).first()

      // Fallback to default locale if content is missing
      if (!content && locale.value !== $config.public.i18n.defaultLocale) {
        return await queryCollection((`${NAVIGATION_DATA_KEY_PREFIX}${$config.public.i18n.defaultLocale}`) as keyof Collections).first()
      }

      // FIXME: merge FR & EN collection and query content with appropriate locale-based id
      return content as NavigationFrCollectionItem | NavigationEnCollectionItem
    },
    {
      default() {
        return {
          items: [],
          showLetsMeetLink: true,
          currentCountryFlag: 'flagpack:fr',
          currentCity: 'Paris',
          socialLinks: [],
        }
      },
      watch: [locale],
      transform: input => input ? input?.meta?.body as NavigationBar : null,
      ...options,
    },
  )
}
