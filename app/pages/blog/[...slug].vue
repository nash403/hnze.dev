<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const $config = useRuntimeConfig()
const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('blog-page-' + slug.value, async () => {
  // Build collection name based on current locale
  const content = await queryCollection('blog').path(`/${locale.value}${slug.value}`).first()

  // Fallback to default locale if content is missing
  if (!content && locale.value !== $config.public.i18n.defaultLocale) {
    return await queryCollection('blog').path(`/${$config.public.i18n.defaultLocale}${slug.value}`).first()
  }

  return content
}, {
  watch: [locale], // Refetch when locale changes
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: computed(() => (page.value as BlogCollectionItem).title),
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
