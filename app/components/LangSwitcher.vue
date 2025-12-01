<script lang="ts" setup>
const { locale, locales } = useI18n()
</script>

<template>
  <div class="flex items-center justify-between">
    <template
      v-for="(registeredLocale, i) in locales"
      :key="registeredLocale.code"
    >
      <div
        v-if="i"
        class="self-stretch border-r-2 border-base-content-600"
      ></div>
      <SwitchLocalePathLink
        :locale="registeredLocale.code"
        :class="['mx-2 link pb-0.5 no-underline not-[.router-link-active]:h-link-glow hover:[&.router-link-active]:text-primary', {
          'cursor-not-allowed': registeredLocale.disabled,
          'font-bold underline decoration-base-content-600 decoration-2 hover:decoration-primary': registeredLocale.code == locale,
        }]"
        :disabled="registeredLocale.disabled"
        :label="registeredLocale.name"
      >
        {{ registeredLocale.name }}
      </SwitchLocalePathLink>
    </template>
  </div>
</template>
