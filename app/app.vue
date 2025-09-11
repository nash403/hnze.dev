<template>
  <div>
    <NuxtRouteAnnouncer />
    <HPlayground />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} ${config.public.siteNameSeparator} ${config.public.siteName}` : `${config.public.siteName}`;
  },
})
</script>
