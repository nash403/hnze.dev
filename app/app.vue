<script setup lang="ts">
import type { TransitionProps } from 'vue'

const $config = useRuntimeConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk || `${$config.public.siteName}`
    // titleChunk ? `${titleChunk} ${$config.public.siteNameTemplateSeparator} ${$config.public.siteName}` : `${$config.public.siteName}`
  },
})

const { isPageTransitionDisabled } = usePageTransition()
const pageTransition = computed<boolean | TransitionProps | undefined>(() => {
  if (isPageTransitionDisabled.value) return undefined
  return {
    name: 'page',
    mode: 'out-in',
  }
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage
        :transition="pageTransition"
      />
    </NuxtLayout>
  </div>
</template>
