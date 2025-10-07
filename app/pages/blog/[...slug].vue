<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { withLeadingSlash } from 'ufo'

const $config = useRuntimeConfig()
const route = useRoute()
const { locale } = useI18n()
const slug = computed(() => withLeadingSlash(String(route.params.slug)))

const { data: page } = await useAsyncData('blog-page-' + slug.value, async () => {
  // Build collection name based on current locale
  const collection = ('blog_' + locale.value) as keyof Collections
  const content = await queryCollection(collection).path(slug.value).first()

  // Fallback to default locale if content is missing
  if (!content && locale.value !== $config.public.i18n.defaultLocale) {
    return await queryCollection(`blog_${$config.public.i18n.defaultLocale}`).path(slug.value).first()
  }

  return content
}, {
  watch: [locale], // Refetch when locale changes
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: computed(() => page.value?.title),
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
