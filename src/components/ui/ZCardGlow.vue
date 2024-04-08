<script lang="ts" setup>
const card = ref<HTMLDivElement>()
const { elementX, elementY } = useMouseInElement(card)
</script>

<template>
  <div
    ref="card"
    :style="{
      '--x': `${elementX}px`,
      '--y': `${elementY}px`,
    }"
    class="border-gradient relative rounded-xl ring-2 ring-gray-300/40 before:absolute before:-inset-px before:size-[calc(100%+2px)] before:rounded-xl dark:ring-gray-700"
  >
    <div
      class="absolute inset-0 rounded-xl bg-background-50 transition-colors duration-300"
    ></div>

    <div class="relative overflow-hidden">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.border-gradient::before {
  background: radial-gradient(
    var(--radial-gradient-circle-size) circle at var(--x) var(--y),
    var(--hzc-primary) 0,
    var(--hzc-accent) 50%,
    transparent 100%
  );
}
</style>
