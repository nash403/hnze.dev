<script setup lang="ts">
import type { PagesEnCollectionItem, PagesFrCollectionItem } from '@nuxt/content'

const { data: page } = await useAsyncPageContentData('/your-needs')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead({
  title: computed(() => (page.value as PagesFrCollectionItem | PagesEnCollectionItem).title),
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
