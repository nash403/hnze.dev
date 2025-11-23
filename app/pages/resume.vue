<script setup lang="ts">
import type { PagesCollectionItem } from '@nuxt/content'

definePageMeta({
  layout: 'resume',
})

const $config = useRuntimeConfig()

const { data: page } = await useAsyncPageContentData('resume')

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: computed(() => (page.value as PagesCollectionItem).title),
})

const mdcVars = {
  // Add any global variables you want to pass to ContentRenderer here

  emailAddress: $config.public.cvEmailAdress,
  email: {
    href: `mailto:${$config.public.cvEmailAdress}`,
    label: $config.public.cvEmailAdress,
    icon: 'clarity:email-line',
  },

  phoneNumber: $config.public.cvPhoneNumber,
  phone: {
    href: `tel:${$config.public.cvPhoneNumber}`,
    label: $config.public.cvPhoneNumber, // TODO: Format phone number for display
    icon: 'clarity:mobile-line',
  },
}
</script>

<template>
  <ContentRenderer
    v-if="page"
    :value="page"
    :data="mdcVars"
  />
</template>
