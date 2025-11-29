<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

const { data: page } = await useAsyncPageContentData('contact-me')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead({
  title: computed(() => (page.value as PagesCollectionItem).title),
})
</script>

<template>
  <div v-if="page">
    <HeaderTitle
      :title="(page.meta.headerTitle as unknown as string)"
      :subtitle="(page.meta.headerSubTitle as unknown as string)"
      :tags="(page.meta.headerTags as unknown as any[])"
    />
    <ContentRenderer
      :value="page"
      class="mx-auto prose max-w-(--breakpoint-nav) px-4 pt-4 sm:px-8 sm:pt-8 min-[74rem]:px-0 prose-headings:prose-a:text-accent prose-headings:prose-a:no-underline"
    />
  </div>
</template>
