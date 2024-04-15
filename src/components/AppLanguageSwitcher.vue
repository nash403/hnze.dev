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
      <div v-if="i" class="self-stretch border-r-2 border-foreground-200"></div>
      <ZLink

        :to="switchLocalePath(_locale.code)"
        :class="['mx-2 px-0.5 pb-0.5', {
          '-unglow cursor-not-allowed': _locale.disabled,
          'font-bold': _locale.code == locale
        }]"
        :disabled="_locale.disabled"
        :label="_locale.name"
      />
    </template>
  </div>
</template>
