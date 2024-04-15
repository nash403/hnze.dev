<script lang="ts" setup></script>

<template>
  <div class="md:grid md:grid-cols-3 print:grid print:break-inside-avoid print:grid-cols-3">
    <div class="md:col-span-2 md:col-start-2 print:col-span-2 print:col-start-2">
      <slot name="title"></slot>
      <slot name="dates"></slot>
      <slot name="school"></slot>
      <slot name="summary"></slot>
    </div>
  </div>
</template>
