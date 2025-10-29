<script lang="ts" setup>
withDefaults(defineProps<{
  tag?: keyof HTMLElementTagNameMap
  unwrap?: string
}>(), {
  tag: 'div',
  unwrap: 'p',
})
</script>

<template>
  <component :is="tag">
    <slot :mdc-unwrap="unwrap"></slot>
  </component>
</template>
