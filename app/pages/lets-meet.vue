<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const $config = useRuntimeConfig()
const { locale } = useI18n()
const { data: page } = await useAsyncData('lets-meet-page-' + locale.value, async () => {
  // Build collection name based on current locale
  const collection = `resume_${locale.value}` as keyof Collections
  const content = await queryCollection(collection).path(` /cv/resume_${locale.value}`).first()

  // Fallback to default locale if content is missing
  if (!content && locale.value !== $config.public.i18n.defaultLocale) {
    const localeCollectionFallback = `resume_${$config.public.i18n.defaultLocale}` as keyof Collections
    return await queryCollection(localeCollectionFallback).path(`resume_${$config.public.i18n.defaultLocale}`).first()
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
