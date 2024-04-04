<script lang="ts" setup></script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <HAppHeaderBar />
    <div class="mx-auto w-full max-w-full px-4 pb-10 sm:px-8 sm:pb-16 md:max-w-8xl md:pb-20 md:pt-7">
      <slot />
    </div>
    <HAppFooter />
  </div>
</template>

<style scoped></style>
