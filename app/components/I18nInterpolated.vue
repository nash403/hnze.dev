<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

// TODO: check slot passthrough from reka-ui to pass arbitrary slots here

withDefaults(
  defineProps<{
    keypath: string
    tag?: keyof HTMLElementTagNameMap
    interpolations?: Array<string | undefined | null>
    interpolationsClassName?: HTMLAttributes['class'] | Array<HTMLAttributes['class'] | undefined | null>
  }>(), {
    tag: 'h1',
    interpolations: () => [],
  })
</script>

<template>
  <i18n-t
    scope="global"
    :keypath
    :tag
  >
    <template
      v-for="(textInterpolation, interpolationIndex) in interpolations"
      #[`emphasis${interpolationIndex}`]
      :key="interpolationIndex"
    >
      <span
        :class="Array.isArray(interpolationsClassName) ? interpolationsClassName[interpolationIndex] ?? interpolationsClassName : interpolationsClassName"
      >

        {{ textInterpolation }}
      </span>
    </template>
  </i18n-t>
</template>

<style scoped></style>
