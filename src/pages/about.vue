<script setup lang="ts">
definePageMeta({
  title: 'app.page_about.meta.title',
})

const localePath = useLocalePath()

</script>

<template>
  <div>
    <p>This is the content of about page</p>
    <div>
      <NuxtLink :to="localePath('index')">
        Back to homepage
      </NuxtLink>
    </div>
    <div>
      <NuxtLink :to="localePath('resume')">
        Go to resume
      </NuxtLink>
    </div>
  </div>
</template>
