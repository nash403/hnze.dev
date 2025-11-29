<script lang="ts" setup>
import type { HTMLAttributes } from 'vue'

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  tags?: { text: string, className: HTMLAttributes['class'] }[]
}>(), {
  tags: () => [],
})
</script>

<template>
  <div class="relative grid overflow-hidden bg-base-200/30">
    <div class="pointer-events-none z-10 mx-auto size-full max-w-(--breakpoint-nav) h-navbar-padding py-5 md:py-10">
      <div class="pointer-events-auto card w-fit max-w-md transition-colors duration-1000 max-md:mx-auto max-md:bg-neutral max-md:text-neutral-content">
        <div class="card-body">
          <ul
            v-if="tags.length > 0"
            class="m-0 flex flex-wrap items-center gap-2 p-0"
          >
            <li
              v-for="(tag, i) of tags"
              :key="i"
              :class="tag.className"
              class="badge badge-soft"
            >
              {{ tag.text }}
            </li>
          </ul>
          <h1
            class="card-title text-3xl font-medium tracking-tighter whitespace-pre-wrap"
          >
            <slot
              name="title"
              mdc-unwrap="p"
            >
              {{ title }}
            </slot>
          </h1>
          <p>
            <slot
              name="subtitle"
              mdc-unwrap="p"
            >
              {{ subtitle }}
            </slot>
          </p>
        </div>
      </div>
    </div>

    <InteractiveGridPattern
      :class="[
        'mask-[radial-gradient(350px_circle_at_center,var(--color-primary),transparent)]',
        'skew-y-12 transition-transform duration-1000 md:translate-x-[15%]',
      ]"
    />
  </div>
</template>
