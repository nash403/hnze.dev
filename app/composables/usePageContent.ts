import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

export const useAsyncPageContentData = (pageSlug: MaybeRef<string>, options = {}) => {
  const $config = useRuntimeConfig()
  const { locale } = useI18n()
  const slug = computed(() => withLeadingSlash(String(toValue(pageSlug))))

  return useAsyncData(`content-page-${slug.value}-${locale.value}`, async () => {
    // Build collection name based on current locale
    const collection = (`pages_${locale.value}`) as keyof Collections
    const content = await queryCollection(collection).path(slug.value).first()

    // Fallback to default locale if content is missing
    if (!content && locale.value !== $config.public.i18n.defaultLocale) {
      return await queryCollection(`pages_${$config.public.i18n.defaultLocale}`).path(slug.value).first()
    }

    return content
  }, {
    watch: [locale], // Refetch when locale changes
    ...options,
  })
}
