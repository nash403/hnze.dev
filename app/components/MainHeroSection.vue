<script lang="ts" setup>
import type { LogoCloudItem } from '~/components/LogoCloud.vue'

interface Props {
  prefixText?: string
  emphasizedText?: string
  suffixText?: string
  profilePicture: string
  profilePictureAlt: string
  primaryActionLabel: string
  primaryActionHoverLabel: string
  secondaryActionLabel: string
  technologies?: Array<LogoCloudItem>
}

withDefaults(defineProps<Props>(), {
  technologies: () => [],
})
</script>

<template>
  <section class="flex flex-col items-center justify-center space-y-12 overflow-clip">
    <div class="flex flex-col items-center justify-center gap-4 sm:gap-7 md:flex-row md:gap-12">
      <!-- NOTE: Credits to https://github.com/zyyv/zyyv.dev/ for the homepage style. I shamelessly copied from it. -->
      <div
        class="mx-auto aspect-square h-25 w-25 shrink-0 animate-blob-shape overflow-hidden rounded-[62%_47%_82%_35%/45%_45%_80%_66%] will-change-[border-radius,transform,opacity,left,top] xs:h-40 xs:w-40 sm:mx-0"
      >
        <NuxtImg
          :src="profilePicture"
          :alt="profilePictureAlt"
          width="120"
          height="120"
          class="aspect-square size-full object-cover"
          quality="90"
          preload
        />
      </div>

      <div class="flex-1 space-y-10">
        <div
          class="space-y-4 text-center md:text-left"
        >
          <I18nInterpolated
            class="font-headline text-3xl font-semibold md:text-4xl"
            keypath="i18n.main_hero_section.headline"
            :interpolations="[prefixText, emphasizedText, suffixText]"
            :interpolations-class-name="[false, 'h-text-gradiant font-headline-name', false]"
          />

          <div class="prose text-sm leading-relaxed xs:text-base lg:text-lg">
            <slot></slot>
          </div>

          <div class="mt-4 flex flex-wrap items-center justify-center gap-5 text-lg lg:text-xl">
            <NuxtLinkLocale
              class="group btn relative overflow-hidden btn-accent"
              to="contact-me"
              prefetch-on="interaction"
            >
              <div class="flex items-center gap-2">
                <div
                  class="size-2 scale-100 animate-pulse rounded-lg bg-secondary transition-all duration-300 group-hover:scale-[100.8] group-hover:animate-none group-focus:scale-[100.8] group-focus:animate-none"
                ></div>
                <span
                  class="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 group-focus:translate-x-12 group-focus:opacity-0"
                >
                  {{ primaryActionLabel }}
                </span>
              </div>

              <div
                class="absolute top-0 z-10 flex size-full translate-x-18 items-center justify-center gap-2 text-base-content opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100"
              >
                <span class="whitespace-nowrap">{{ primaryActionHoverLabel || primaryActionLabel }}</span>
                <Icon
                  name="mingcute:wechat-line"
                  class="text-2xl"
                />
              </div>
            </NuxtLinkLocale>

            <NuxtLinkLocale
              class="group flex link items-center gap-1 link-hover transition-all"
              to="resume"
              prefetch-on="interaction"
            >
              <span class="h-text-gradiant transition-all group-hover:opacity-70 group-focus:opacity-70">{{ secondaryActionLabel }}</span>
              <Icon
                name="mingcute:share-forward-line"
                class="text-accent transition-transform group-hover:translate-x-1 group-focus:translate-x-1"
              />
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
    </div>
    <ul
      class="mx-auto grid w-full auto-fit-cols gap-x-3 gap-y-8 [--col-size:100px] sm:auto-fit-cols-15 sm:gap-x-6 md:max-w-2xl"
    >
      <li
        v-for="item of technologies"
        :key="item.name"
        class="flex items-center justify-center"
      >
        <LogoCloud
          v-bind="item"
          class="flex place-items-center text-4xl sm:text-5xl"
        />
      </li>
    </ul>
  </section>
</template>
