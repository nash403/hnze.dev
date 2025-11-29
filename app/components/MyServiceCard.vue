<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  title?: string
  description?: string
  ctaText: string
  ctaTo?: RouteLocationRaw
}>()
</script>

<template>
  <div class="card bg-neutral text-neutral-content shadow-sm">
    <div class="card-body">
      <div class="flex flex-col flex-wrap sm:flex-row">
        <div class="flex-1">
          <p
            v-if="title || $slots.default"
            class="card-title"
          >
            <slot
              mdc-unwrap="p"
              name="title"
            >
              {{ title }}
            </slot>
          </p>
          <slot
            name="description"
          >
            {{ description }}
          </slot>
        </div>
        <div class="not-prose card-actions shrink-0 items-center justify-end p-4 sm:justify-center">
          <NuxtLink
            :to="ctaTo"
            class="btn"
          >{{ ctaText }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
