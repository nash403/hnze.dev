<script lang="ts">
import type { FunctionalComponent, PropType } from 'vue'
import type { NuxtLinkProps } from '#app'

interface LogoItem {
  name: string
  title: string
  link: string
  logo: FunctionalComponent
  target: NuxtLinkProps['target']
}

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<LogoItem[]>,
      required: false,
      default: () => [],
    },
  },
})
</script>

<template>
  <ul class="flex flex-wrap gap-4">
    <li v-for="(item, i) of items" :key="`tech-${i}`" class="flex flex-1 items-stretch">
      <ZLink v-if="item.link" :to="item.link" :target="item.target" :title="item.title" class="unstyled">
        <component :is="item.logo" class="block h-full opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none" />
      </ZLink>
      <span v-else :title="item.title" class="block h-full opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none"></span>
    </li>
  </ul>
</template>

<style scoped></style>
