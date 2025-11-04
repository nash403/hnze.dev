<template>
  <div>
    <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
    <h1 class="text-3xl font-bold">
      <nuxt-link
        :to="$localeRoute({ name: 'resume' })"
        class="link-glow"
      >Honoré Nintunze</nuxt-link>
    </h1>
    <i18n-t
      keypath="app.footer.copyright"
      tag="p"
    >
      <template #copyrightDate>
        &copy; {{ (new Date()).getFullYear() }}
      </template>
      <template #cloneIt>
        <a
          href="https://github.com/nash403/hnze.dev"
          target="_blank"
          class="link-glow"
        >{{ $t('app.footer.clone_website_link') }}</a>
      </template>
    </i18n-t>
    <p class="text-primary-300">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-primary-700">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-primary-900">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-secondary-300">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-secondary-700">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-secondary-900">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-info-300">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-info-700">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <p class="text-info-900">
      Dolorem et dolore suscipit adipisci et omnis cupiditate quae optio. Aperiam et recusandae aut qui commodi quia quaerat. Omnis nulla dicta cum qui nihil tempore. Illo voluptatum saepe blanditiis autem quae.
    </p>
    <button
      type="button"
      class="btn btn-primary"
    >
      coucou
    </button>
  </div>
</template>
