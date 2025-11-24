<script setup lang="ts">
import type { NuxtError } from '#app'
import { useI18n } from 'vue-i18n'

const props = defineProps<{ error?: NuxtError }>()
const { t } = useI18n()

const code = computed(() => props.error?.statusCode ?? 500)

function getEntry(status: number) {
  switch (status) {
    case 404:
      return {
        typeKey: 'app.error.type.404',
        icon: 'mdi:ghost',
        bgColor: ['bg-warning-300/30', 'bg-warning-300/60', 'bg-warning-300'],
        color: 'text-warning-900 dark:text-warning-900',
      }
    case 503:
      return {
        typeKey: 'app.error.type.503',
        icon: 'mdi:wrench',
        bgColor: ['bg-info-300/30', 'bg-info-300/60', 'bg-info-300'],
        color: 'text-info-900 dark:text-info-900',
      }
    case 500:
    default:
      return {
        typeKey: 'app.error.type.500',
        icon: 'mdi:server',
        bgColor: ['bg-error-300/30', 'bg-error-300/60', 'bg-error-300'],
        color: 'text-error-900 dark:text-error-900',
      }
  }
}

const entry = computed(() => getEntry(code.value))
const title = computed(() =>
  t('app.error.title', { code: code.value, type: t(entry.value.typeKey) }),
)
const message = computed(
  () => t(`app.error.message.${code.value}`) || t('app.error.message.500'),
)

const localePath = useLocalePath()
const handleHome = () => clearError({ redirect: localePath('index') })
const handleRefresh = () => window.location.reload()
const handleContactMe = () => clearError({ redirect: localePath('lets-meet') })
</script>

<template>
  <NuxtLayout name="default">
    <ErrorPanel
      class="min-h-[60vh] px-6"
      :title
      :description="message"
      :icon="entry.icon"
      :icon-classes="entry.color"
      :bg-classes="entry.bgColor"
      :btn-primary-label="t('app.error.button.home')"
      :btn-secondary-label="t('app.error.button.refresh')"
      :btn-other-label="t('app.error.button.contact')"
      @click-primary="handleHome"
      @click-secondary="handleRefresh"
      @click-other="handleContactMe"
    />
  </NuxtLayout>
</template>
