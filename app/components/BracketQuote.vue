<script lang="ts" setup>
defineProps<{
  block?: boolean
}>()
</script>

<template>
  <p class="flex items-center gap-1.5 font-semibold italic dark:text-white light:text-black">
    <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
    <span class="shrink-0">「</span>
    <span
      class="text-center data-block:flex-1"
      :class="{ 'flex-1': block }"
    >
      <slot mdc-unwrap="p"></slot>
    </span>
    <span class="shrink-0">」</span>
  </p>
</template>

<style scoped></style>
