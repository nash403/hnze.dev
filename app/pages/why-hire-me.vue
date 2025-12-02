<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

const { data: page } = await useAsyncPageContentData('why-hire-me')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead({
  title: computed(() => (page.value as PagesCollectionItem).title),
  meta: [
    {
      name: 'description',
      content: computed(() => (page.value as PagesCollectionItem).description),
    },
  ],
})
</script>

<template>
  <div v-if="page">
    <UnderConstructionPanel class="h-full min-h-[45vh] px-6">
      <!-- <ContentRenderer
      v-if="page"
      :value="page"
      /> -->
    </UnderConstructionPanel>
  </div>
</template>
