<script lang="ts" setup>
import { useStorage } from '@vueuse/core'
import { UseClipboard } from '@vueuse/components'
import { LS_APP_BUILD_VERSION_KEY } from '~/lib/constants'

const props = withDefaults(defineProps<{
  navigationData?: NavigationBar
}>(), {})
const socialLinks = computed(() => props.navigationData?.socialLinks || [])

const build = useBuildInfos()
const currentVersion = build.git?.abbreviatedSha

const appState = useAppStateStore()
const storedVersion = useStorage<string | null>(LS_APP_BUILD_VERSION_KEY, null)
if (currentVersion !== storedVersion.value) {
  if (storedVersion.value) {
    appState.value.hasNewVersionAvailable = true
  }
  storedVersion.value = currentVersion
}

const reloadPage = async () => {
  appState.value.hasNewVersionAvailable = false
  window.location.reload()
}

const ignoreVersion = async () => {
  appState.value.hasNewVersionAvailable = false
}
</script>

<template>
  <div class="space-y-5 p-4 text-center font-footer sm:p-8 md:max-w-8xl">
    <!-- Separator line -->
    <div
      role="separator"
      aria-orientation="horizontal"
      class="mx-auto flex max-w-2xl items-center xl:max-w-4xl"
    >
      <div class="h-px flex-1 bg-base-content-600"></div>
      <div class="mx-4 flex items-center rounded-full p-1 shadow-sm dark:bg-bg-light/80 dark:text-content-dark-on-light light:bg-bg-dark/80 light:text-content-light-on-dark">
        <Icon
          name="hnze:hnze-logo"
          class="text-3xl "
        />
      </div>
      <div class="h-px flex-1 bg-base-content-600"></div>
    </div>

    <!-- Copyright notice -->
    <i18n-t
      scope="global"
      keypath="app.footer.copyright"
      tag="p"
      class="text-sm"
    >
      <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <template #copyrightDate>
        &copy;{{ (new Date()).getFullYear() }}
      </template>
      <template #cloneIt>
        <NuxtLink
          href="https://github.com/nash403/hnze.dev"
          target="_blank"
          class="h-link-glow h-link"
        >{{ $t('app.footer.clone_website_link') }}</NuxtLink>
      </template>
    </i18n-t>

    <!-- Social links -->
    <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
      <template
        v-for="(social, i) of socialLinks"
        :key="i"
      >
        <UseClipboard
          v-if="social.isCopyLinkAction"
          v-slot="{ copy, copied }"
          :source="social.href"
        >
          <button
            type="button"
            class="h-link-glow link transition-transform duration-200 hover:scale-110"
            :class="{ 'animate-rubber-band cursor-default': copied, 'cursor-copy': !copied }"
            :aria-label="social.label"
            :title="social.label"
            @click="copy()"
          >
            <Icon
              :name="social.icon"
              class="text-base sm:text-xl"
            />
          </button>
        </UseClipboard>
        <NuxtLink
          v-else
          :to="social.href"
          :aria-label="social.label"
          :title="social.label"
          target="_blank"
          class="h-link-glow link transition-transform duration-200 hover:scale-110"
        >
          <Icon
            :name="social.icon"
            class="text-base sm:text-xl"
          />
        </NuxtLink>
      </template>
    </div>
    <div class="flex flex-col items-center gap-2">
      <p class="text-xs text-base-content-700">
        {{ $t('app.footer.version_uid', { version: currentVersion }) }}
      </p>
      <ClientOnly>
        <div
          v-if="appState.hasNewVersionAvailable"
          class="card w-80 bg-neutral text-neutral-content card-xs card-border"
        >
          <div class="card-body items-center text-center">
            <div class="card-actions w-full justify-end">
              <button
                type="button"
                class="btn btn-square btn-xs btn-secondary"
                :title="$t('app.footer.btn_ignore_new_version_title')"
                @click="ignoreVersion"
              >
                <Icon name="mingcute:close-line" />
                <span class="sr-only">{{ $t('app.footer.btn_ignore_new_version_title') }}</span>
              </button>
            </div>

            <p>{{ $t('app.footer.new_version_available') }}</p>
            <button
              type="button"
              class="btn btn-sm btn-accent"
              @click="reloadPage"
            >
              {{ $t('app.footer.btn_reload_page') }}
            </button>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>
