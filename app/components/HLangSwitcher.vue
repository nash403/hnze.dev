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
        class="self-stretch border-r-2 border-base-content"
      ></div>
      <NuxtLink

        :to="switchLocalePath(_locale.code)"
        :class="['mx-2 link link-hover hover:text-primary', {
          'cursor-not-allowed': _locale.disabled,
          'font-bold underline': _locale.code == locale,
        }]"
        :disabled="_locale.disabled"
        :label="_locale.name"
      >{{ _locale.name }}</NuxtLink>
    </template>
  </div>
</template>
