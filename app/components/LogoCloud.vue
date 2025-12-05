<script lang="ts" setup>
import type { IconifyIconName } from '#shared/types'
import type { RouteLocationRaw } from 'vue-router'
import { NuxtLink } from '#components'

export interface LogoCloudItem {
  name: string
  src?: string
  icon?: IconifyIconName
  to?: string | RouteLocationRaw
  target?: HTMLAnchorElement['target']
  imgWidth?: string
}

const props = withDefaults(defineProps<LogoCloudItem>(), { target: '_blank', imgWidth: '60' })

const wrapperAttrs = computed(() => {
  if (props.to) {
    return {
      'to': props.to,
      'target': props.target,
      'external': true,
      'class': 'inline-flex items-center justify-center transition-all duration-300',
      'title': props.name,
      'aria-label': props.name,
    }
  }

  return {
    class: 'inline-flex items-center justify-center transition-all duration-300',
    title: props.name,
  }
})
</script>

<template>
  <component
    :is="to ? NuxtLink : 'span'"
    v-bind="wrapperAttrs"
    class="group"
  >
    <NuxtImg
      v-if="src"
      :src="src"
      class="opacity-50 grayscale transition-all group-hover:opacity-100 group-hover:filter-none group-focus:opacity-100 group-focus:filter-none group-active:opacity-100 group-active:filter-none"
      :width="imgWidth"
      quality="90"
    />
    <Icon
      v-else-if="icon"
      :name="icon"
      mode="svg"
      class=" opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-hover:filter-none group-focus:opacity-100 group-focus:filter-none group-active:opacity-100 group-active:filter-none"
    />
  </component>
</template>
