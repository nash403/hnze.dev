<script lang="ts">
import type { FunctionalComponent, PropType } from 'vue'
import type { NuxtLinkProps } from '#app'

interface LogoItem {
  name: string
  title: string
  link: string
  logo: `/${string}` | FunctionalComponent
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
      <ZLink v-if="item.link" :to="item.link" :target="item.target" :title="item.title" class="-unglow flex place-items-center">
        <!-- TODO: add width/height props to item object -->
        <NuxtImg
          v-if="typeof item.logo === 'string'"
          :src="item.logo"
          class="block opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none"
          width="200"
          quality="90"
          format="webp,auto"
        />
        <component :is="item.logo" v-else class="block h-full opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none" />
      </ZLink>
      <span v-else :title="item.title" class="block h-full opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none"></span>
    </li>
  </ul>
</template>
