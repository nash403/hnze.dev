<script setup lang="ts">
import type { NuxtError } from '#app'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ error?: NuxtError }>()
const { t } = useI18n()

const code = computed(() => props.error?.statusCode ?? 500)

function getEntry(status: number) {
  switch (status) {
    case 404:
      return { typeKey: 'app.error.type.404', icon: 'mdi:ghost' }
    case 503:
      return { typeKey: 'app.error.type.503', icon: 'mdi:wrench' }
    case 500:
    default:
      return { typeKey: 'app.error.type.500', icon: 'mdi:server' }
  }
}

const entry = computed(() => getEntry(code.value))
const title = computed(() => t('app.error.title', { code: code.value, type: t(entry.value.typeKey) }))
const message = computed(() => t(`app.error.message.${code.value}`) || t('app.error.message.500'))

const handleHome = () => clearError({ redirect: '/' })
const handleRefresh = () => window.location.reload()
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <NuxtLayout name="default">
    <div class="flex min-h-[60vh] items-center justify-center px-6">
      <div class="max-w-2xl text-center">
        <div class="mb-6 flex items-center justify-center">
          <Icon
            :name="entry.icon"
            class="text-slate-400 dark:text-slate-300"
            width="160"
            height="160"
          />
        </div>

        <h2 class="mb-3 text-4xl font-extrabold">
          {{ title }}
        </h2>

        <p class="mb-6 text-lg whitespace-pre-line text-slate-600 dark:text-slate-300">
          {{ message }}
        </p>

        <div class="flex items-center justify-center gap-3">
          <button
            type="button"
            class="btn btn-primary"
            @click="handleHome"
          >
            {{ t('app.error.button.home') }}
          </button>

          <button
            type="button"
            class="btn btn-outline"
            @click="handleRefresh"
          >
            {{ t('app.error.button.refresh') }}
          </button>

          <NuxtLink
            to="/lets-meet"
            class="btn btn-ghost"
          >
            {{ t('app.error.button.contact') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
