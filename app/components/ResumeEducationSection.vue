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
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-3">
      <ResumeEducationItem
        v-for="(item, index) in items"
        v-bind="item"
        :key="index"
      >
        <template #dates>
          <slot
            :name="`item-${index}-dates`"
            mdc-unwrap="p"
          ></slot>
        </template>
        <template #default>
          <slot :name="`item-${index}`"></slot>
        </template>
      </ResumeEducationItem>
    </div>
  </ResumeSection>
</template>

<style scoped></style>
