<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  certificationName: string
  institutionName: string
  institutionUrl?: RouteLocationRaw
  endYear?: number | string
  startYear?: number | string
}

defineProps<Props>()
</script>

<template>
  <article
    class="contents print:break-inside-avoid"
  >
    <div class="col-span-2 col-start-2 space-y-2">
      <h3>
        {{ certificationName }}
      </h3>
      <p class="flex items-center leading-8">
        <slot
          name="dates"
          mdc-unwrap="p"
        >
          <template v-if="startYear || endYear">
            {{ [startYear, endYear].filter(s => s).join(' / ') }}
          </template>
        </slot>
      </p>

      <div class="text-base font-medium italic">
        <NuxtLink
          v-if="institutionUrl"
          :to="institutionUrl"
          target="_blank"
          rel="noopener noreferrer"
          external
        >{{ institutionName }}</NuxtLink>
        <span v-else>{{ institutionName }}</span>
      </div>
      <div class="prose prose-sm">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
