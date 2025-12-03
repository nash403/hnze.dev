<script lang="ts" setup>
import type { ResumeWorkItem } from '#build/components'

type WorkItemProps = InstanceType<typeof ResumeWorkItem>['$props']

withDefaults(defineProps<{
  items?: WorkItemProps[]
}>(), {
  items: () => [],
})
</script>

<template>
  <ResumeSection>
    <ResumeWorkItem
      v-for="(item, index) in items"
      v-bind="item"
      :key="index"
    >
      <template #dates>
        <slot :name="`item-${index}-dates`"></slot>
      </template>
      <template #default>
        <slot :name="`item-${index}`"></slot>
      </template>
    </ResumeWorkItem>
  </ResumeSection>
</template>

<style scoped></style>
