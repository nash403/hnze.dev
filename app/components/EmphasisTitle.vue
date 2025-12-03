<script lang="ts" setup>
defineProps<{
  prefixText?: string
  emphasizedText?: string
  suffixText?: string
}>()
</script>

<template>
  <i18n-t
    scope="global"
    keypath="i18n.main_hero_section.headline"
    tag="h1"
    class="font-headline text-3xl font-semibold md:text-4xl"
  >
    <template #prefixText>
      {{ prefixText }}
    </template>
    <template #emphasizedText>
      <span
        v-if="emphasizedText"
        class="h-text-gradiant font-headline-name"
      >{{ emphasizedText }}</span>
    </template>
    <template #suffixText>
      {{ suffixText }}
    </template>
  </i18n-t>
</template>

<style scoped></style>
