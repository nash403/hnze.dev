<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

// TODO: check slot passthrough from reka-ui to pass arbitrary slots here

const props = withDefaults(
  defineProps<{
    keypath: string
    tag?: keyof HTMLElementTagNameMap
    interpolations?: Array<string | undefined | null>
    interpolationsClassName?: HTMLAttributes['class'] | Array<HTMLAttributes['class'] | undefined | null>
  }>(), {
    tag: 'h1',
    interpolations: () => [],
  },
)

function getTextInterpolationClassName(index: number) {
  return Array.isArray(props.interpolationsClassName) ? props.interpolationsClassName[index] ?? props.interpolationsClassName : props.interpolationsClassName
}
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
      <slot
        :text-interpolation-class-name="getTextInterpolationClassName(interpolationIndex)"
        :text-interpolation="textInterpolation"
        :text-interpolation-index="interpolationIndex"
      >
        <span
          :class="getTextInterpolationClassName(interpolationIndex)"
        >
          {{ textInterpolation }}
        </span>
      </slot>
    </template>
  </i18n-t>
</template>

<style scoped></style>
