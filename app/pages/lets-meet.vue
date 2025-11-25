<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

const { data: page } = await useAsyncPageContentData('lets-meet')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

useHead({
  title: computed(() => (page.value as PagesCollectionItem).title),
})
</script>

<template>
  <div
    v-if="page"
    class="mx-auto self-start"
  >
    <NuxtImg
      :src="(page.meta.pictureSrc as unknown as string)"
      width="420"
      height="236"
      :alt="page.meta.pictureAlt"
      class="aspect-video w-105 mask-[url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNDAgMjAwIj4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNIDQwIDEwIGggMjYwIGMgMjQuMzc1IDAgMzAgNS42MjUgMzAgMzAgdiAxMjAgYyAwIDI0LjM3NSAtNS42MjUgMzAgLTMwIDMwIGggLTI2MCBjIC0yNC4zNzUgMCAtMzAgLTUuNjI1IC0zMCAtMzAgdiAtMTIwIGMgMCAtMjQuMzc1IDUuNjI1IC0zMCAzMCAtMzAiLz4KIDwvc3ZnPg==)] mask-size-[100%_100%] mask-no-repeat object-cover"
      quality="90"
      format="webp,auto"
    />
    <ContentRenderer

      :value="page"
      class="prose max-w-5xl prose-headings:font-bold prose-headings:text-accent prose-h2:text-2xl"
    />
  </div>
</template>
