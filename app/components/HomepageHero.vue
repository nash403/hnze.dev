<script lang="ts" setup>
import type { LogoCloudItem } from '~/components/LogoCloud.vue'

interface Props {
  profilePicture: string
  technologies?: Array<LogoCloudItem>
}

withDefaults(defineProps<Props>(), { technologies: () => [] })
</script>

<template>
  <section class="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-wide lg:flex-row lg:gap-12 lg:px-5">
    <!-- FIXME: translate alt attr -->
    <NuxtImg
      :src="profilePicture"
      alt="Ma photo de profil"
      width="200"
      height="200"
      class="mx-auto flex-1"
      quality="90"
      format="webp,auto"
    />
    <div>
      <div
        class="flex max-w-3xl flex-col text-left
        lg:w-1/2 lg:max-w-none lg:flex-1 lg:py-7 xl:py-8"
      >
        <div class="flex grow flex-col items-center text-center md:items-start md:text-left">
          <h1 class="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
            <slot
              name="headline"
              mdc-unwrap="p"
            ></slot>
          </h1>

          <p class="mb-8 max-w-lg text-base leading-relaxed text-base-content/75 sm:text-lg md:mb-10">
            <slot
              name="intro"
              mdc-unwrap="p"
            ></slot>
          </p>
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
