<script lang="ts" setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex items-center justify-between">
    <template
      v-for="(_locale, i) in locales"
      :key="_locale.code"
    >
      <div
        v-if="i"
        class="self-stretch border-r-2 border-base-content-600"
      ></div>
      <NuxtLink

        :to="switchLocalePath(_locale.code)"
        :class="['mx-2 link pb-[2px] no-underline not-[.router-link-active]:h-link-glow hover:[&.router-link-active]:text-primary', {
          'cursor-not-allowed': _locale.disabled,
          'font-bold underline decoration-base-content-600 decoration-2 hover:decoration-primary': _locale.code == locale,
        }]"
        :disabled="_locale.disabled"
        :label="_locale.name"
      >{{ _locale.name }}</NuxtLink>
    </template>
  </div>
</template>
