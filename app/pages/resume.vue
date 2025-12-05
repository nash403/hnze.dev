<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

definePageMeta({
  layout: 'resume',
  scrollToTop: true,
})

const $config = useRuntimeConfig()

const { data: page } = await useAsyncPageContentData('resume')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: computed(() => (page.value as PagesCollectionItem).title),
  meta: [
    {
      name: 'description',
      content: computed(() => (page.value as PagesCollectionItem).description),
    },
  ],
})

const mdcVars = {
  // Add any global variables you want to pass to ContentRenderer here
  email: {
    href: `mailto:${$config.public.contactEmail}`,
    label: $config.public.contactEmail,
    icon: 'mingcute:mail-line',
  },
  phones: [$config.public.frPhoneNumber, $config.public.caPhoneNumber],
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    class="mx-auto max-w-full space-y-12 p-4 font-resume-body prose-base-content sm:p-8 md:p-16 lg:max-w-5xl print:p-[1.5cm] prose-headings:font-bold prose-h2:text-4xl prose-h3:text-2xl prose-h3:text-accent"
    :value="page"
    :data="mdcVars"
  />
</template>
