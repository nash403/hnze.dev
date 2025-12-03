<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  certificationName: string
  institutionName: string
  institutionUrl?: RouteLocationRaw
  endYear?: string
  startYear?: string
}

defineProps<Props>()
</script>

<template>
  <article
    class="grid grid-cols-1 gap-4 md:grid-cols-3 print:break-inside-avoid print:grid-cols-3"
  >
    <!-- Col 1 vide -->
    <div></div>

    <!-- Contenu sur 2 colonnes -->
    <div class="space-y-2 md:col-span-2">
      <h3>
        {{ certificationName }}
      </h3>
      <p class="flex items-center leading-8">
        <slot name="dates">
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          <span v-if="startYear">{{ startYear }}</span>/<span v-if="endYear">{{ endYear }}</span>
        </slot>
      </p>
      <!-- Institution name and link -->
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
