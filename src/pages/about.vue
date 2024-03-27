<script setup lang="ts">
definePageMeta({
  title: 'About',
})
const localePath = useLocalePath()
</script>

<template>
  <div>
    <p>This is the content of about page</p>
    <NuxtLink :to="localePath('index')">
      Back to homepage
    </NuxtLink>
  </div>
</template>
