<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: Object as () => NuxtError,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <button
      type="button"
      class="btn btn-primary"
      @click="handleError"
    >
      Go back to the homepage
    </button>
  </div>
</template>
