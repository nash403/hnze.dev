<script lang="ts" setup>
import type { IconifyIconName } from '#shared/types'
import type { RouteLocationRaw } from 'vue-router'

export interface LogoCloudItem {
  name: string
  src?: string
  icon?: IconifyIconName
  to?: string | RouteLocationRaw
  target?: HTMLAnchorElement['target']
  imgWidth?: string
}

withDefaults(defineProps<LogoCloudItem>(), { target: '_blank', imgWidth: '60' })
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :target="target"
    external
    class="inline-flex items-center justify-center transition-all duration-300"
    :title="name"
    :aria-label="`Visit ${name} website`"
  >
    <NuxtImg
      v-if="src"
      :src="src"
      class="opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none"
      :width="imgWidth"
      quality="90"
      format="webp,auto"
    />
    <Icon
      v-else-if="icon"
      :name="icon"
      class=" opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:drop-shadow-lg hover:grayscale-0 hover:filter-none "
    />
  </NuxtLink>
  <span
    v-else
    class="inline-flex items-center justify-center transition-all duration-300"
    :title="name"
  >
    <NuxtImg
      v-if="src"
      :src="src"
      class=" opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none"
      :width="imgWidth"
      quality="90"
      format="webp,auto"
    />
    <Icon
      v-else-if="icon"
      :name="icon"
      class="opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none "
    />
  </span>
</template>
