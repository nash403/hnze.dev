<script lang="ts" setup>
import type { LogoCloudItem } from '~/components/LogoCloud.vue'

interface Props {
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

const localePath = useLocalePath()
</script>

<template>
  <section class="flex flex-col items-center justify-center gap-4 sm:gap-7 md:flex-row md:gap-12 lg:max-w-5xl ">
    <!-- NOTE: Credits to https://github.com/zyyv/zyyv.dev/ for the homepage style. I shamelessly copied from it. -->
    <div
      class="mx-auto aspect-square h-25 w-25 shrink-0 animate-blob-shape overflow-hidden rounded-[62%_47%_82%_35%/45%_45%_80%_66%] will-change-[border-radius,transform,opacity,left,top] xs:h-40 xs:w-40 sm:mx-0"
    >
      <!-- Profile picture with animated blob border shape -->
      <NuxtImg
        :src="profilePicture"
        :alt="profilePictureAlt"
        width="120"
        height="120"
        class="aspect-square size-full object-cover"
        quality="90"
        format="webp,auto"
      />
    </div>

    <div class="flex-1 space-y-10">
      <div
        class="space-y-4 text-center md:text-left"
      >
        <!-- Headline -->
        <h1 class="font-headline text-3xl font-semibold md:text-4xl">
          <slot
            name="headline"
            mdc-unwrap="p"
          ></slot>
        </h1>

        <!-- Intro paragraph -->
        <p class="max-w-lg text-sm leading-relaxed text-base-content/75 xs:text-base md:text-lg">
          <slot
            name="intro"
            mdc-unwrap="p"
          ></slot>
        </p>

        <!-- Main CTAs -->
        <div class="mt-4 flex flex-wrap items-center justify-center gap-5 text-lg">
          <NuxtLink
            class="group btn relative w-auto overflow-hidden p-2 px-6 text-center text-lg font-semibold btn-accent"
            :to="localePath('why-hire-me')"
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
                name="hugeicons:arrow-right-01"
                class="text-2xl"
              />
            </div>
          </NuxtLink>

          <NuxtLink
            class="group flex link items-center gap-1 font-semibold link-hover transition-all"
            :to="localePath('resume')"
          >
            <span class="bg-linear-to-br from-primary to-accent bg-clip-text text-transparent transition-all group-hover:opacity-70 group-focus:opacity-70">{{ secondaryActionLabel }}</span>
            <Icon
              name="gravity-ui:arrow-shape-turn-up-right"
              class="text-accent transition-transform group-hover:translate-x-1 group-focus:translate-x-1"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Logos cloud -->
      <ul class="flex max-w-lg flex-wrap gap-4">
        <li
          v-for="item of technologies.slice(0, 7)"
          :key="item.name"
          class="flex flex-1 items-stretch justify-center text-lg 2xs:text-2xl xs:text-3xl sm:text-4xl"
        >
          <LogoCloud
            v-bind="item"
            class="flex place-items-center"
          />
        </li>
      </ul>
    </div>
  </section>
</template>
