<template>
  <div class="flex flex-col justify-between">
    <!-- <HPlayground /> -->
    <HNavigationBar />
    <div class="w-full max-w-full px-4 pt-7 pb-10 sm:px-8 sm:pb-16 md:max-w-8xl md:pb-20">
      <slot></slot>
    </div>
  </div>
</template>
