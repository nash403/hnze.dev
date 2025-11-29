<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

definePageMeta({
  layout: 'resume',
})

const $config = useRuntimeConfig()

const { data: page } = await useAsyncPageContentData('resume')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: computed(() => (page.value as PagesCollectionItem).title),
})

const mdcVars = {
  // Add any global variables you want to pass to ContentRenderer here
  email: {
    href: `mailto:${$config.public.contactEmail}`,
    label: $config.public.contactEmail,
    icon: 'mingcute:mail-line',
  },
  phones: [$config.public.frPhoneNumber, $config.public.caPhoneNumber],
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :data="mdcVars"
  />
</template>
