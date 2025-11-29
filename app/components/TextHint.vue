<script lang="ts" setup>
withDefaults(defineProps<{
  tag?: keyof HTMLElementTagNameMap
  tip?: string
  text?: string
}>(), {
  tag: 'span',
})

const shouldForceTooltipOpen = ref(false)
</script>

<template>
  <component
    :is="tag"
    :tabindex="tip ? 0 : undefined"
    role="tooltip"
    :data-tip="tip"
    class="underline decoration-dotted hover:text-primary focus:text-primary"
    :class="{
      'tooltip tooltip-top cursor-help': tip,
      'tooltip-open': tip && shouldForceTooltipOpen,
    }"
    @focus="shouldForceTooltipOpen=true"
    @blur="shouldForceTooltipOpen=false"
  >
    <slot>{{ text }}</slot>
    <span
      v-if="tip"
      class="sr-only"
    >{{ tip }}</span>
  </component>
</template>

<style scoped></style>
