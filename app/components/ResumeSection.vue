<script lang="ts" setup generic="T extends Record<string, unknown>">
withDefaults(defineProps<{
  title?: string
}>(), {})
</script>

<template>
  <section class="print:break-inside-avoid">
    <h2 class="mb-6 print:break-after-avoid print:pt-[1.5cm]">
      <slot
        name="title"
        mdc-unwrap="p"
      >
        {{ title }}
      </slot>
    </h2>
    <div class="space-y-6 divide-y divide-base-content-600 sm:divide-none print:divide-none">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped></style>
