<script lang="ts" setup>
const { locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex items-center justify-between divide-x-2 divide-foreground-200">
    <ZLink
      v-for="locale in locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      :class="['px-2', { 'unstyled cursor-not-allowed': locale.disabled }]"
      :disabled="locale.disabled"
      :label="locale.name"
    />
  </div>
</template>

<style scoped></style>
