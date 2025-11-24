<script setup lang="ts">
const config = useRuntimeConfig()

// const route = useRoute()
// const head = useLocaleHead()
// const { t } = useI18n()
// const title = computed(() => t(route.meta.title as string, route.meta.title as string))

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} ${config.public.siteNameSeparator} ${config.public.siteName}` : `${config.public.siteName}`
  },
})
</script>

<template>
  <div>
    <!-- <Html
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
    >
      <Head>
        <Title>{{ title }}</Title>
        <template
          v-for="link in head.link"
          :key="link.key"
        >
          <Link
            :id="link.key"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template
          v-for="meta in head.meta"
          :key="meta.key"
        >
          <Meta
            :id="meta.key"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body> -->
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- </Body>
    </Html> -->
  </div>
</template>
