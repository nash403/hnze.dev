<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const $config = useRuntimeConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} ${$config.public.siteNameSeparator} ${$config.public.siteName}` : `${$config.public.siteName}`
  },
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </div>
</template>
