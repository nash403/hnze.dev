<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()
// const head = useLocaleHead()
// const { t } = useI18n()
// const title = computed(() => t(route.meta.title as string, route.meta.title as string))
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <NavigationBar class="shrink-0" />
    <main
      class="w-full flex-1 p-4 sm:p-8 md:max-w-8xl"
      :class="{ 'min-h-[calc(100dvh-var(--header-h,72px))]': route.path === localePath('index') }"
    >
      <slot></slot>
    </main>
    <FooterBar class="shrink-0" />

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
      <Body>
        <NavigationBar class="shrink-0" />
        <main
          class="w-full flex-1 p-4 sm:p-8 md:max-w-8xl"
          :class="{ 'min-h-[calc(100dvh-var(--header-h,72px))]': route.path === localePath('index') }"
        >
          <slot></slot>
        </main>
        <FooterBar class="shrink-0" />
      </Body>
    </Html> -->
  </div>
</template>
