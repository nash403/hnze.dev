<script lang="ts" setup>
import type { FunctionalComponent, PropType } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

defineProps({
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: Object as PropType<FunctionalComponent>,
    required: false,
    default: undefined,
  },
  link: {
    type: [String, Object] as PropType<RouteLocationRaw>,
    required: false,
    default: undefined,
  },
})

const wrapperClasses = 'inline-flex items-center px-2 py-1 font-medium'
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <ZLink v-if="link" :to="link" target="_blank" :class="wrapperClasses" v-bind="$attrs">
    <component :is="icon" class="mr-1" />
    <slot>{{ label }}</slot>
  </ZLink>
  <span v-else :class="wrapperClasses" v-bind="$attrs">
    <component :is="icon" class="mr-1" />
    <slot>{{ label }}</slot>
  </span>
</template>
