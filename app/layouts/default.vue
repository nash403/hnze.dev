<template>
  <div class="flex min-h-dvh flex-col">
    <NavigationBar class="shrink-0" />
    <main class="min-h-[calc(100dvh-var(--header-h,72px))] w-full flex-1 px-4 pt-4 sm:px-8 sm:pt-8 md:max-w-8xl">
      <slot></slot>
    </main>
  </div>
</template>
