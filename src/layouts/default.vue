<script lang="ts" setup></script>

<template>
  <ZPageLayoutSeo class="flex flex-col justify-between">
    <HAppNavigationBar />
    <div class="mx-auto w-full max-w-full px-4 pb-10 pt-7 sm:px-8 sm:pb-16 md:max-w-8xl md:pb-20">
      <slot></slot>
    </div>
    <HAppFooter />
  </ZPageLayoutSeo>
</template>


