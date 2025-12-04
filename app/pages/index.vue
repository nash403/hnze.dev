<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'
import type { MainHeroSection } from '#build/components'

type HeroSectionProps = InstanceType<typeof MainHeroSection>['$props']

const { data: page } = await useAsyncPageContentData('')

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
  <MainHeroSection
    v-if="page"
    v-bind="((page as PagesCollectionItem).meta as unknown as HeroSectionProps)"
    class="mx-auto max-w-5xl p-4 sm:p-8"
  >
    <ContentRenderer
      :value="page"
    />
  </MainHeroSection>
</template>
