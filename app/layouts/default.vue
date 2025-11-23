<template>
  <div class="flex min-h-dvh flex-col">
    <NavigationBar />
    <main class="w-full px-4 pt-7 pb-10 sm:px-8 sm:pb-16 md:max-w-8xl md:pb-20">
      <slot></slot>
    </main>
  </div>
</template>
