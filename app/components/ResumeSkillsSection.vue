<script lang="ts" setup>
type SkillItem = string

interface SkillCategory {
  title: string
  items: SkillItem[]
}

interface Props {
  skills?: SkillCategory[]
}

withDefaults(defineProps<Props>(), {
  skills: () => [],
})
</script>

<template>
  <ResumeSection>
    <div
      v-for="(category, cIndex) in skills"
      :key="cIndex"
      class="break-inside-avoid"
    >
      <h3>
        {{ category.title }}
      </h3>
      <div
        class="flex flex-wrap gap-2 p-4"
      >
        <span
          v-for="(skill, sIndex) in category.items"
          :key="sIndex"
          class="badge badge-md badge-secondary"
        >{{ skill }}</span>
      </div>
    </div>
  </ResumeSection>
</template>

<style scoped></style>
