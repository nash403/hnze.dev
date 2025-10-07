<script setup lang="ts">
import type { Collections } from '@nuxt/content'
import { useRuntimeConfig } from 'nuxt/app'

definePageMeta({
  layout: 'resume',
})

const $config = useRuntimeConfig()
const { locale } = useI18n()

const { data: page } = await useAsyncData('resume-page-' + locale.value, async () => {
  // Build collection name based on current locale
  const resume = `resume_${locale.value}` as keyof Collections
  const content = await queryCollection(resume).path(`/cv/resume_${locale.value}`).first()

  // Fallback to default locale if content is missing
  if (!content && locale.value !== $config.public.i18n.defaultLocale) {
    const resume_fallback = `resume_${$config.public.i18n.defaultLocale}` as keyof Collections
    return await queryCollection(resume_fallback).path(`resume_${$config.public.i18n.defaultLocale}`).first()
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
