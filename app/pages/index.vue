<script setup lang="ts">
const { data: page } = await useAsyncPageContentData('/')

// if (!page.value) {
//   throw createError({ statusCode: 404, statusMessage: 'Page not found' })
// }

useHead({
  title: computed(() => page.value?.title),
})
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
