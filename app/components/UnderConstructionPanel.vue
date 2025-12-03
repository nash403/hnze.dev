<script lang="ts" setup></script>

<template>
  <ErrorPanel
    :title="$t('i18n.under_construction_panel.title_text')"
    icon="mingcute:puzzled-line"
    icon-classes="text-info-900 dark:text-info-900"
    :bg-classes="['bg-info-300/30', 'bg-info-300/60', 'bg-info-300']"
  >
    <template #description>
      <p>{{ $t('i18n.under_construction_panel.description') }}</p>
    </template>
  </ErrorPanel>
</template>

<style scoped></style>
