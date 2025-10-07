<template>
  <div>
    <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
    <h1 class="text-3xl font-bold underline">
      Honoré Nintunze
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
        >{{ $t('app.footer.clone_website_link') }}</a>
      </template>
    </i18n-t>
  </div>
</template>
