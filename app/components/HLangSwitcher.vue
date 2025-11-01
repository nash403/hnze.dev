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
        class="border-foreground-200 self-stretch border-r-2"
      ></div>
      <NuxtLink

        :to="switchLocalePath(_locale.code)"
        :class="['mx-2 px-0.5 pb-0.5', {
          '-no-glow cursor-not-allowed': _locale.disabled,
          'font-bold': _locale.code == locale,
        }]"
        :disabled="_locale.disabled"
        :label="_locale.name"
      >{{ _locale.name }}</NuxtLink>
    </template>
  </div>
</template>
