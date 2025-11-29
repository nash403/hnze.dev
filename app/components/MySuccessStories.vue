<script lang="ts" setup>
import type { LogoCloudItem } from '~/components/LogoCloud.vue'

withDefaults(defineProps<{
  intro?: string
  companies?: Array<LogoCloudItem>
}>(), {
  companies: () => [],
})
</script>

<template>
  <div>
    <slot name="intro">
      {{ intro }}
    </slot>
    <ul class="flex list-none flex-wrap items-center justify-center gap-4 px-4 sm:px-8">
      <li
        v-for="item of companies"
        :key="item.name"
        class="p-0"
      >
        <LogoCloud
          v-bind="item"
          class="flex shrink-0 place-items-center"
          img-width="120"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
