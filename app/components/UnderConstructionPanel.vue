<script lang="ts" setup></script>

<template>
  <ErrorPanel
    :title="$t('shared.element_under_construction_panel.title')"
    icon="mingcute:puzzled-line"
    icon-classes="text-info-900 dark:text-info-900"
    :bg-classes="['bg-info-300/30', 'bg-info-300/60', 'bg-info-300']"
  >
    <template #description>
      <p>{{ $t('shared.element_under_construction_panel.description') }}</p>
    </template>
  </ErrorPanel>
</template>

<style scoped></style>
