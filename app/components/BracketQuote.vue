<script lang="ts" setup>
defineProps<{
  wide?: boolean
}>()
</script>

<template>
  <p class="flex items-center gap-1.5 font-semibold italic dark:text-white light:text-black">
    <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
    <span class="shrink-0">「</span>
    <span
      class="text-center"
      :class="{ 'flex-1': wide }"
    >
      <slot mdc-unwrap="p"></slot>
    </span>
    <span class="shrink-0">」</span>
  </p>
</template>

<style scoped></style>
