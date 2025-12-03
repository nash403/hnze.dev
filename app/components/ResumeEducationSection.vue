<script lang="ts" setup>
import type { ResumeEducationItem } from '#build/components'

type EducationItemProps = InstanceType<typeof ResumeEducationItem>['$props']

withDefaults(defineProps<{
  items?: EducationItemProps[]
}>(), {
  items: () => [],
})
</script>

<template>
  <ResumeSection>
    <ResumeEducationItem
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
    </ResumeEducationItem>
  </ResumeSection>
</template>

<style scoped></style>
