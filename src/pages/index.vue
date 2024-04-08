<script setup lang="ts">

definePageMeta({
  title: '',
})

const myName = 'Honoré'
const p = 'Dicta et sed. Sunt fuga voluptatem. Consequatur consequatur adipisci facilis et occaecati doloribus facilis aspernatur. Molestiae ipsam nostrum distinctio dolores ullam rem officiis impedit. Quo corrupti quos officiis dolorum non facilis repellat. Rerum consequatur ea maiores consequatur sed nobis sed.'
</script>

<template>
  <main>
    <section class="mx-auto flex w-full flex-col gap-10 px-5 sm:px-10 md:px-12 lg:max-w-fullxl lg:flex-row lg:gap-12 lg:px-5">
      <div
        class="flex max-w-3xl flex-col items-start text-left
        lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8"
      >
        <i18n-t
          tag="h2"
          keypath="app.homepage.hello_title"
          class="text-3xl/tight font-bold sm:text-4xl/tight
        md:text-5xl/tight xl:text-6xl/tight"
        >
          <template #firstname>
            <span
              class="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
            >{{ myName }}</span>
          </template>
        </i18n-t>
        <p>{{ $t('app.homepage.hello_paragraph') }}</p>
        <div>{{ myName }}</div>
        <HLogoCloudMyStack class="text-4xl" />
      </div>
      <div class="mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:w-1/2 lg:max-w-none">
        <NuxtImg
          src="/profile_picture.jpg"
          class="rounded-full"
          width="200"
          height="200"
          quality="90"
          format="webp,auto"
          :modifiers="{ extract: '770_15_900_900' }"
        />
      </div>
    </section>

    <p class="py-96">
      {{ p }}
    </p>
  </main>
</template>
