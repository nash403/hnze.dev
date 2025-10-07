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
    <div class="mx-auto max-w-lg">
      <div class="my-4 flex max-w-fit items-center gap-4">
        <HLangSwitcher />
        <HThemeSwitcher />
      </div>
    </div>
    <NuxtPage class="page-enter-active mx-auto max-w-lg pt-5" />
  </NuxtLayout>
</template>
