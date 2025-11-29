<script lang="ts" setup>
import type { MyServiceCard } from '#components'

type MyServiceCardProps = InstanceType<typeof MyServiceCard>['$props']

defineProps<{
  mailto: string
  services: (MyServiceCardProps & { ctaToSubject: string })[]
}>()
</script>

<template>
  <ul class="list-none px-4 sm:px-8">
    <li
      v-for="(service, i) in services"
      :key="i"
    >
      <MyServiceCard
        v-bind="service"
        :cta-to="`mailto:${mailto}?subject=${encodeURIComponent(service.ctaToSubject)}`"
      >
        <template #title>
          <slot :name="`title-${i}`"></slot>
        </template>
        <template #description>
          <slot :name="`description-${i}`"></slot>
        </template>
      </MyServiceCard>
    </li>
  </ul>
</template>

<style scoped></style>
