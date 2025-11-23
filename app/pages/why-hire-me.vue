<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

const { data: page } = await useAsyncPageContentData('why-hire-me')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead({
  title: computed(() => (page.value as PagesCollectionItem).title),
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
