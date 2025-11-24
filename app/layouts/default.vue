<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <NavigationBar class="shrink-0" />
    <main
      class="w-full flex-1 p-4 sm:p-8 md:max-w-8xl"
      :class="{ 'min-h-[calc(100dvh-var(--header-h,72px))]': $route.path === localePath('index') }"
    >
      <slot></slot>
    </main>
    <FooterBar class="shrink-0" />
  </div>
</template>
