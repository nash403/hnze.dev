<script lang="ts" setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex items-center justify-between divide-x-2">
    <ZLink
      v-for="locale in locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      class="cursor-not-allowed px-2"
      disabled
      :label="locale.name"
    />
  </div>
</template>

<style scoped></style>
