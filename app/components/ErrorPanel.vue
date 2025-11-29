<script lang="ts" setup>
defineEmits(['click-primary', 'click-secondary', 'click-other'])

withDefaults(defineProps<{
  bgClasses?: [string, string, string]
  sizeClasses?: [string, string, string, string]
  icon: string
  iconClasses?: string
  title?: string
  description?: string
  btnPrimaryLabel?: string
  btnSecondaryLabel?: string
  btnOtherLabel?: string
  btnClickedHandler?: (clickedBtnName: string) => void
}>(), {
  sizeClasses: () => ['h-40 w-40', 'h-28 w-28', 'h-20 w-20', 'text-6xl'],
  btnPrimaryLabel: '',
  btnSecondaryLabel: '',
  btnOtherLabel: '',
  btnClickedHandler: () => {},
})
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="max-w-2xl text-center">
      <!-- Error Icon -->
      <div class="mb-6 flex items-center justify-center">
        <!-- TODO: create component with a prop that says "render root node if true otherwise only slot content" -->
        <div
          class="flex items-center justify-center rounded-full"
          :class="[bgClasses?.[0] ?? '', sizeClasses[0]]"
        >
          <div
            class="flex items-center justify-center rounded-full"
            :class="[bgClasses?.[1] ?? '', sizeClasses[1]]"
          >
            <div
              class="flex items-center justify-center rounded-full"
              :class="[bgClasses?.[2] ?? '', sizeClasses[2]]"
            >
              <Icon
                :name="icon"
                class="hover:animate-rubber-band"
                :class="[iconClasses ?? '', sizeClasses[3]]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Error title and description -->
      <h2
        v-if="title"
        class="mb-3 text-4xl font-extrabold"
      >
        {{ title }}
      </h2>

      <div class="mb-6 text-lg whitespace-pre-line text-slate-600 dark:text-slate-300">
        <slot name="description">
          <p
            v-if="description"
          >
            {{ description }}
          </p>
        </slot>
      </div>

      <!-- Error actions -->
      <div
        v-if="[btnPrimaryLabel, btnSecondaryLabel, btnOtherLabel].some(Boolean)"
        class="flex flex-wrap items-center justify-center gap-3"
      >
        <button
          v-if="btnPrimaryLabel"
          type="button"
          class="btn btn-primary"
          @click="() => { $emit('click-primary'); btnClickedHandler?.('primary') }"
        >
          {{ btnPrimaryLabel }}
        </button>

        <button
          v-if="btnSecondaryLabel"
          type="button"
          class="btn btn-accent"
          @click="() => { $emit('click-secondary'); btnClickedHandler?.('secondary') }"
        >
          {{ btnSecondaryLabel }}
        </button>

        <button
          v-if="btnOtherLabel"
          type="button"
          class="btn btn-ghost hover:bg-secondary"
          @click="() => { $emit('click-other'); btnClickedHandler?.('other') }"
        >
          {{ btnOtherLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
