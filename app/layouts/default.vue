<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()

const { data: navigationData } = await useAsyncNavigationContentData()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <PageSeoWrapper>
      <NavigationBar
        :navigation-data="navigationData"
        class="shrink-0"
      />
      <main
        class="w-full flex-1 p-4 sm:p-8 md:max-w-8xl"
        :class="{ 'min-h-[calc(100dvh-var(--header-h,72px))]': route.path === localePath('index') }"
      >
        <slot></slot>
      </main>
      <FooterBar
        :navigation-data="navigationData"
        class="shrink-0"
      />
    </PageSeoWrapper>
  </div>
</template>
