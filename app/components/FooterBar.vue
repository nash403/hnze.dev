<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'

const { data: navigationData } = useAsyncNavigationContentData()

const socialLinks = computed(() => navigationData.value?.socialLinks || [])
</script>

<template>
  <div class="space-y-5 p-4 text-center sm:p-8 md:max-w-8xl">
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
      keypath="app.footer.copyright"
      tag="p"
    >
      <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
      <template #copyrightDate>
        &copy;{{ (new Date()).getFullYear() }}
      </template>
      <template #cloneIt>
        <NuxtLink
          href="https://github.com/nash403/hnze.dev"
          target="_blank"
          class="h-link-glow"
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
  </div>
</template>
