<script lang="ts" setup>
import type { LogoCloudItem } from '~/components/LogoCloud.vue'

interface Props {
  profilePicture: string
  profilePictureAlt: string
  primaryActionLabel: string
  secondaryActionLabel: string
  technologies?: Array<LogoCloudItem>
}

withDefaults(defineProps<Props>(), {
  technologies: () => [],
})

const localePath = useLocalePath()
</script>

<template>
  <section class="flex w-full flex-col items-center justify-center gap-4 sm:gap-7 md:flex-row md:gap-12 lg:max-w-wide ">
    <!-- NOTE: Credits to https://github.com/zyyv/zyyv.dev/ for the homepage style. I shamelessly copied from it. -->
    <div
      class="mx-auto aspect-square h-25 w-25 animate-blob-shape overflow-hidden rounded-[62%_47%_82%_35%/45%_45%_80%_66%] will-change-[border-radius,transform,opacity,left,top] xs:h-40 xs:w-40 sm:mx-0"
    >
      <NuxtImg
        :src="profilePicture"
        :alt="profilePictureAlt"
        width="160"
        height="160"
        class="size-full object-cover"
        quality="90"
        format="webp,auto"
      />
    </div>

    <div class="space-y-7">
      <div
        class="space-y-4 text-center md:text-left"
      >
        <h1 class="font-headline text-3xl font-semibold md:text-4xl">
          <slot
            name="headline"
            mdc-unwrap="p"
          ></slot>
        </h1>

        <p class="max-w-lg text-sm leading-relaxed text-base-content/75 xs:text-base md:text-lg">
          <slot
            name="intro"
            mdc-unwrap="p"
          ></slot>
        </p>
        <div class="mt-4 flex flex-wrap items-center gap-5">
          <NuxtLink
            class="btn btn-accent"
            :to="localePath('why-hire-me')"
          >
            {{ primaryActionLabel }}
          </NuxtLink>

          <NuxtLink
            class="group flex link items-center gap-1 font-semibold link-hover transition-all hover:gap-2"
            :to="localePath('why-hire-me')"
          >
            <span class="bg-linear-to-br from-primary to-accent bg-clip-text text-transparent transition-all group-hover:opacity-70">{{ secondaryActionLabel }}</span>  <Icon name="gravity-ui:arrow-shape-turn-up-right" />
          </NuxtLink>
        </div>
      </div>
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
