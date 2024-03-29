<script setup lang="ts">
definePageMeta({
  title: '',
})

const localePath = useLocalePath()
</script>

<template>
  <div>
    <p>This is the content of homepage</p>
    <NuxtLink :to="localePath('about')">
      Go to About page
    </NuxtLink>
  </div>
</template>
