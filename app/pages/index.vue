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
})
</script>

<template>
  <MainHeroSection
    v-if="page"
    v-bind="((page as PagesCollectionItem).meta as unknown as HeroSectionProps)"
    class="flex flex-1 items-center justify-center"
  >
    <ContentRenderer
      :value="page"
      class="prose"
    />
  </MainHeroSection>
</template>
