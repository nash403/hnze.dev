<script lang="ts" setup>
defineProps({
  rounded: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    default: '200',
  },
})
</script>

<template>
  <NuxtImg
    src="/img/profile_picture.jpg"
    alt="Photo de profil de Honoré Nintunze"
    :class="{ 'rounded-[50%]': rounded }"
    :width="size"
    :height="size"
    quality="90"
    format="webp,auto"
    :modifiers="{ extract: '770_15_900_900' }"
  />
</template>

<style scoped></style>
