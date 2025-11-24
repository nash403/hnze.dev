<script setup lang="ts">
// const route = useRoute()
// const head = useLocaleHead()
// const { t } = useI18n()
// const title = computed(() => t(route.meta.title as string, route.meta.title as string))
</script>

<template>
  <div>
    <slot></slot>
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
        <div>
          <slot></slot>
        </div>
      </Body>
    </Html> -->
  </div>
</template>
