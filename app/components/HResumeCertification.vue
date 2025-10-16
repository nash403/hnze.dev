<script lang="ts" setup>
interface Props {
  institution: string
  url?: string
  area?: string
  studyType?: string
  startDate?: string
  endDate?: string
  score?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <h3 class="text-xl font-bold text-accent">
      <a
        v-if="props.url"
        :href="props.url"
        target="_blank"
        rel="noopener noreferrer"
      >{{ props.institution }}</a>
      <span v-else>{{ props.institution }}</span>
    </h3>
    <div class="mt-1 text-base font-medium">
      <span v-if="props.studyType">{{ props.studyType }}</span>
      <span
        v-if="props.startDate || props.endDate"
        class="ml-2 text-sm text-gray-500"
      >
        <span v-if="props.startDate">{{ props.startDate }}</span>
        <span v-if="props.endDate"> - {{ props.endDate }}</span>
      </span>
    </div>
    <div
      v-if="props.area"
      class="mt-2 text-base"
    >
      {{ props.area }}
    </div>
    <div
      v-if="props.score"
      class="mt-2 text-base"
    >
      <span class="font-semibold">Score:</span> {{ props.score }}
    </div>
    <div class="mt-2">
      <slot name="summary"></slot>
    </div>
  </div>
</template>

<style scoped></style>
