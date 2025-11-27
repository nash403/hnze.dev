<script lang="ts" setup>
withDefaults(defineProps<{
  title?: string
  tags?: { text: string, class: ClassValue }[]
}>(), {
  tags: () => [],
})
</script>

<template>
  <div class="minh-32 bg-accent text-accent-content sm:min-h-44 md:min-h-52">
    <ul
      v-if="tags.length > 0"
      class="m-0 flex items-center gap-2 p-0"
    >
      <li
        v-for="(tag, i) of tags"
        :key="i"
        :class="tag.class"
        class="badge badge-soft"
      >
        {{ tag.text }}
      </li>
    </ul>
    <slot>{{ title }}</slot>
  </div>
</template>

<style scoped></style>
