<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  certificationName: string
  institutionName: string
  institutionUrl?: RouteLocationRaw
  dates: string | [string, string]
}

defineProps<Props>()
</script>

<template>
  <div>
    <!-- Certification name -->
    <h3 class="text-xl font-bold text-accent">
      {{ certificationName }}
    </h3>

    <!-- Start and end date of the formation -->
    <div
      class="text-sm text-gray-500"
    >
      {{ dates }}
    </div>

    <!-- Institution name and link -->
    <div class="text-base font-medium">
      <NuxtLink
        v-if="institutionUrl"
        :to="institutionUrl"
        target="_blank"
        rel="noopener noreferrer"
        external
      >{{ institutionName }}</NuxtLink>
      <span v-else>{{ institutionName }}</span>
    </div>

    <!-- Summary Details of the certification -->
    <div class="mt-2">
      <slot name="summary"></slot>
    </div>
  </div>
</template>
