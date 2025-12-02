<script setup lang="ts">
const $config = useRuntimeConfig()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk || `${$config.public.siteName}`
    // titleChunk ? `${titleChunk} ${$config.public.siteNameTemplateSeparator} ${$config.public.siteName}` : `${$config.public.siteName}`
  },
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
