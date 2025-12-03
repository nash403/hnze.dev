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
        typeKey: 'i18n.error_page.type.404',
        icon: 'mingcute:ghost-line',
        bgColor: ['bg-warning-300/30', 'bg-warning-300/60', 'bg-warning-300'] as [string, string, string],
        color: 'text-warning-900 dark:text-warning-900',
      }
    case 503:
      return {
        typeKey: 'i18n.error_page.type.503',
        icon: 'mingcute:sleep-line',
        bgColor: ['bg-info-300/30', 'bg-info-300/60', 'bg-info-300'] as [string, string, string],
        color: 'text-info-900 dark:text-info-900',
      }
    case 500:
    default:
      return {
        typeKey: 'i18n.error_page.type.500',
        icon: 'mingcute:unhappy-dizzy-line',
        bgColor: ['bg-error-300/30', 'bg-error-300/60', 'bg-error-300'] as [string, string, string],
        color: 'text-error-900 dark:text-error-900',
      }
  }
}

const entry = computed(() => getEntry(code.value))
const title = computed(() =>
  t('i18n.error_page.title', { code: code.value, type: t(entry.value.typeKey) }),
)
const message = computed(
  () => t(({
    404: 'i18n.error_page.message.404',
    500: 'i18n.error_page.message.500',
    503: 'i18n.error_page.message.503',
  })[code.value] || 'i18n.error_page.message.500'),
)

const localePath = useLocalePath()
const handleHome = () => clearError({ redirect: localePath('index') })
const handleRefresh = () => window.location.reload()
const handleContactMe = () => clearError({ redirect: localePath('lets-meet') })
</script>

<template>
  <NuxtLayout name="default">
    <ErrorPanel
      class="min-h-[45vh] px-6"
      :title
      :description="message"
      :icon="entry.icon"
      :icon-classes="entry.color"
      :bg-classes="entry.bgColor"
      :btn-primary-label="t('i18n.error_page.button.home')"
      :btn-secondary-label="t('i18n.error_page.button.refresh')"
      :btn-other-label="t('i18n.error_page.button.contact')"
      @click-primary="handleHome"
      @click-secondary="handleRefresh"
      @click-other="handleContactMe"
    />
  </NuxtLayout>
</template>
