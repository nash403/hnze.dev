<script setup lang="ts">

definePageMeta({
  title: '',
})

const localePath = useLocalePath()
</script>

<template>
  <div>
    <p>This is the content of homepage</p>
    <HMyStackShowcase />
    <NuxtImg
      src="/profile_picture.jpg"
      class="rounded-full"
      width="200"
      height="200"
      quality="90"
      format="webp,auto"
      :modifiers="{ extract: '770_15_900_900' }"
    />
    <NuxtLink :to="localePath('about')">
      Go to About page
    </NuxtLink>

    <p class="py-96">
      biiiiiiig content
    </p>
  </div>
</template>
