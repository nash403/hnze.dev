<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} ${config.public.siteNameSeparator} ${config.public.siteName}` : `${config.public.siteName}`
  },
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <HPlayground />
    <NuxtPage class="page-enter-active" />
  </NuxtLayout>
</template>
