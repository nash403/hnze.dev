<script lang="ts" setup>
defineEmits(['click-primary', 'click-secondary', 'click-other']) // FIXME: add props for action handler when btn clicked and no event listener registered

withDefaults(defineProps<{
  bgClasses?: string[]
  icon: string
  iconClasses?: string
  title?: string
  description?: string
  btnPrimaryLabel?: string
  btnSecondaryLabel?: string
  btnOtherLabel?: string
}>(), {
  btnPrimaryLabel: '',
  btnSecondaryLabel: '',
  btnOtherLabel: '',
})
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="max-w-2xl text-center">
      <!-- Error Icon -->
      <div class="mb-6 flex items-center justify-center">
        <!-- TODO: create component with a prop that says "render root node if true otherwise only slot content" -->
        <div
          class="flex h-40 w-40 items-center justify-center rounded-full"
          :class="bgClasses?.[0] ?? ''"
        >
          <div
            class="flex h-28 w-28 items-center justify-center rounded-full"
            :class="bgClasses?.[1] ?? ''"
          >
            <div
              class="flex h-20 w-20 items-center justify-center rounded-full"
              :class="bgClasses?.[2] ?? ''"
            >
              <Icon
                :name="icon"
                class="text-6xl hover:animate-rubber-band"
                :class="iconClasses ?? ''"
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
          @click="$emit('click-primary')"
        >
          {{ btnPrimaryLabel }}
        </button>

        <button
          v-if="btnSecondaryLabel"
          type="button"
          class="btn btn-accent"
          @click="$emit('click-secondary')"
        >
          {{ btnSecondaryLabel }}
        </button>

        <button
          v-if="btnOtherLabel"
          type="button"
          class="btn btn-ghost hover:bg-secondary"
          @click="$emit('click-other')"
        >
          {{ btnOtherLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
