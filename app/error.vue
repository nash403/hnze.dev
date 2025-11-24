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
    <div class="flex min-h-[60vh] items-center justify-center px-6">
      <div class="max-w-2xl text-center">
        <!-- Error Icon -->
        <div class="mb-6 flex items-center justify-center">
          <div
            class="flex h-40 w-40 items-center justify-center rounded-full"
            :class="entry.bgColor[0]"
          >
            <div
              class="flex h-28 w-28 items-center justify-center rounded-full"
              :class="entry.bgColor[1]"
            >
              <div
                class="flex h-20 w-20 items-center justify-center rounded-full"
                :class="entry.bgColor[2]"
              >
                <Icon
                  :name="entry.icon"
                  class="text-6xl hover:animate-rubber-band"
                  :class="entry.color"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Error title and description -->
        <h2 class="mb-3 text-4xl font-extrabold">
          {{ title }}
        </h2>

        <p
          class="mb-6 text-lg whitespace-pre-line text-slate-600 dark:text-slate-300"
        >
          {{ message }}
        </p>

        <!-- Error actions -->
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            class="btn btn-primary"
            @click="handleHome"
          >
            {{ t("app.error.button.home") }}
          </button>

          <button
            type="button"
            class="btn btn-accent"
            @click="handleRefresh"
          >
            {{ t("app.error.button.refresh") }}
          </button>

          <button
            type="button"
            class="btn btn-ghost btn-secondary"
            @click="handleContactMe"
          >
            {{ t("app.error.button.contact") }}
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
