<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()

const { data: navigationData } = await useAsyncNavigationContentData()
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <PageSeoWrapper>
      <NavigationBar
        :navigation-data="navigationData!"
        class="shrink-0"
      />
      <main
        id="main-content"
        class="flex flex-1 *:flex-1"
        :class="{ 'min-h-[calc(100dvh-calc(var(--header-h,72px)*2))]': route.path === localePath('index') }"
      >
        <slot></slot>
      </main>
      <FooterBar
        :navigation-data="navigationData!"
        class="shrink-0"
      />
    </PageSeoWrapper>
  </div>
</template>
