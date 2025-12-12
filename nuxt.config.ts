import tailwindcss from '@tailwindcss/vite'
import { defineRuntimeOptions } from './config'

const { enableDebugMode, https, defaultColorMode } = defineRuntimeOptions()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/scripts',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    'unplugin-info',
    '@posthog/nuxt',
  ],

  ssr: true,

  imports: {
    dirs: [
      './types',
    ],
    presets: [
      // Example
      // {
      //   from: '@vueuse/components',
      //   imports: ['UseClipboard'],
      // },
    ],
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  app: {
    rootId: '__hnze-app-nuxt',
    // pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/styles/main.css'],

  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: defaultColorMode, // fallback value if not system preference found
    dataValue: 'theme',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'cookie', // or 'sessionStorage' or 'cookie'
    storageKey: 'hnze-nuxt-color-mode',
  },

  content: {
    preview: {
      // force module initialization on dev env
      dev: true,
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'hnze.dev',
        owner: 'nash403',
        url: 'https://github.com/nash403/hnze.dev',
      },
    },
  },

  runtimeConfig: {
    public: {
      siteNameTemplateSeparator: '-',
      defaultSocialHandle: 'myHandle',
      contactEmail: 'hello@example.com',
      resumeContactEmail: 'hire-me@example.com',
      frPhoneNumber: '+33633221100',
      caPhoneNumber: '+15145551234',
    },
  },

  routeRules: {
    '/relay-ph-An1toEu/static/**': { proxy: 'https://eu-assets.i.posthog.com/static/**' },
    '/relay-ph-An1toEu/**': { proxy: 'https://eu.i.posthog.com/**' },
  },

  devServer: {
    port: +(process.env.PORT ?? 3000),
    https,
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-11-11',

  nitro: {
    preset: process.env.NITRO_PRESET || 'static',
    // prerender: {
    //   // routes: ['/sitemap.xml', '/robots.txt'],
    // },
  },

  vite: {
    server: {
      https,
      hmr: {
        protocol: process.env.WEBAPP_LOCAL_USE_SSL ? 'wss' : 'ws',
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },

  debug: enableDebugMode,

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [
      // Example declaration. Normally no need, just defining `font-family: MyFont;` in CSS should suffice.
      {
        name: 'Merienda', // for my first name on homepage
        provider: 'google',
        weights: [600],
        preload: true,
      },
      {
        name: 'DM Sans', // normal
        provider: 'google',
        weights: [400, 600, 700, 800],
        preload: true,
      },
      {
        name: 'Inter', // navbar, footer, resume page & default fallback
        provider: 'google',
        weights: [400, 600, 700, 800],
      },
    ],
  },

  i18n: {
    // debug: isEnabled(process.env.DEBUG_I18N),
    defaultLocale: process.env.DEFAULT_LOCALE || 'en',
    /**
     * Using 'prefix' strategy instead of 'prefix_and_default' for SSG compatibility.
     * This ensures all localized routes (/en/*, /fr/*) are properly pre-rendered.
     *
     * Browser language detection is handled by public/index.html for the root path ('/'),
     * which provides a reliable client-side redirect in SSG mode. The i18n module's
     * detectBrowserLanguage is kept for cookie-based locale persistence on subsequent visits.
     *
     * With 'prefix_and_default', SSG builds would result in 404 errors when redirecting
     * to /fr due to timing issues with client-side hydration and route generation.
     *
     * Related issues:
     * - https://github.com/nuxt-modules/i18n/issues/3608
     * - https://github.com/nuxt-modules/i18n/issues/3016
     * - https://github.com/nuxt-modules/i18n/issues/3262#issuecomment-2562396469
     * - https://github.com/nuxt-modules/i18n/issues/3828
    */
    detectBrowserLanguage: {
      fallbackLocale: process.env.DEFAULT_LOCALE || 'en',
      useCookie: true,
      cookieKey: 'i18n_redirected',
      // redirectOn: 'no prefix', // only redirect when accessing localized routes without prefix
      redirectOn: 'root',
    },
    strategy: 'prefix',
    customRoutes: 'meta',
    locales: [
      {
        code: 'en', language: 'en', file: 'en-GB.json', name: 'EN',
        icon: 'flagpack:gb-ukm',
        disabled: false,
      },
      {
        code: 'fr', language: 'fr', file: 'fr-FR.json', name: 'FR',
        icon: 'flagpack:fr',
        disabled: false /* disable in the language switcher UI */,
      },
    ],
    skipSettingLocaleOnNavigate: true,
    experimental: {
      typedOptionsAndMessages: 'default',
    },
  },

  icon: {
    cssLayer: 'base',
    customCollections: [
      {
        prefix: 'hnze',
        dir: './app/assets/icons',
      },
    ],
    clientBundle: {
      // list of icons to include in the client bundle
      icons: [],
      scan: true,
      // guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
    serverBundle: {
      // list of icon collections to include in the server bundle
      // collections: [],
    },
  },

  image: {
    provider: process.env.IMAGE_PROVIDER || 'ipx',
    quality: 80,
    format: ['webp', 'avif'],
  },

  posthogConfig: {
    publicKey: 'phc_Di7yAGY4Uo22AGvJiyamhlTnkDK3GGgxk71it9vFn1m', // Find it in project settings https://app.posthog.com/settings/project
    host: 'https://eu.i.posthog.com', // Optional: defaults to https://us.i.posthog.com. Use https://eu.i.posthog.com for EU region
    clientConfig: {
      // Optional: PostHog client configuration options
      api_host: `/relay-ph-An1toEu`,
    },
  },
})
