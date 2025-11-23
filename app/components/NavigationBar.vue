<script lang="ts" setup>
import type { Collections, NavigationEnCollectionItem, NavigationFrCollectionItem } from '@nuxt/content'

const $config = useRuntimeConfig()
const localePath = useLocalePath()
const { locale } = useI18n()

// Fetch navigation data based on current locale
const { data: navigationData } = await useAsyncData(
  `navigation-${locale.value}`,
  async () => {
    // Build collection name based on current locale
    const content = await queryCollection((`navigation_${locale.value}`) as keyof Collections).first()

    // Fallback to default locale if content is missing
    if (!content && locale.value !== $config.public.i18n.defaultLocale) {
      return await queryCollection((`navigation_${$config.public.i18n.defaultLocale}`) as keyof Collections).first()
    }

    return content as NavigationFrCollectionItem | NavigationEnCollectionItem
  },
  { watch: [locale] },
)

const navItems = computed(() => (navigationData.value?.meta as NavigationBar)?.items || [])
const showLetsMeetLink = computed(() => (navigationData.value?.meta as NavigationBar).showLetsMeetLink ?? true)
const toggleMenuMaxBreakpointVisible = ref<undefined | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>('md')

// Track whether the burger menu is open and close it when navigation occurs
const menuOpen = ref(false)
const route = useRoute()

watch([() => route.fullPath, navigationData], () => {
  menuOpen.value = false
})

// FIXME: no links should glow when toggle menu is opened
// FIXME: watch resize to automatically close menu when resizing above breakpoint
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full backdrop-blur-[1.25rem] duration-300 ease-linear select-none not-has-[:checked]:[mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-transparent after:blur-sm after:content-[''] not-has-[:checked]:after:via-primary has-[:checked]:bg-base-200 supports-[backdrop-filter]:backdrop-saturate-[180%]"
  >
    <div
      class="relative mx-auto flex max-w-6xl items-center justify-between pr-4 sm:py-0 sm:pr-8 md:px-8"
    >
      <!-- Burger menu icon as checkbox input -->
      <label
        class="peer group relative mr-2 cursor-pointer border-r-2 border-r-base-content-600 px-2 py-3 outline-none has-[:focus-visible]:ring-2"
        :class="{
          'hidden': !toggleMenuMaxBreakpointVisible,
          'xs:hidden': toggleMenuMaxBreakpointVisible === 'xs',
          'sm:hidden': toggleMenuMaxBreakpointVisible === 'sm',
          'md:hidden': toggleMenuMaxBreakpointVisible === 'md',
          'lg:hidden': toggleMenuMaxBreakpointVisible === 'lg',
          'xl:hidden': toggleMenuMaxBreakpointVisible === 'xl',
          '2xl:hidden': toggleMenuMaxBreakpointVisible === '2xl',
        }"
      >
        <input
          v-model="menuOpen"
          type="checkbox"
          :aria-label="$t('app.navbar.toggle_menu_label')"
          class="peer sr-only"
        />
        <div
          aria-hidden="true"
          class="h-0.5 w-5 rounded bg-base-content transition group-hover:bg-primary peer-checked:translate-y-[0.33rem] peer-checked:rotate-45"
        ></div>
        <div
          aria-hidden="true"
          class="mt-2 h-0.5 w-5 rounded bg-base-content transition group-hover:bg-primary peer-checked:translate-y-[-0.33rem] peer-checked:-rotate-45"
        ></div>
      </label>

      <!-- Logo & Let's meet CTA -->
      <div class="mr-auto flex items-center space-x-10">
        <NuxtLink
          :to="localePath('index')"
          :title="$t('app.link_go_home')"
          class="flex items-center"
        >
          <!-- <Icon
            name="hnze:hnze-logo"
            class="size-(--header-h) hover:animate-text-glow"
          /> -->
          <NuxtImg
            src="/img/hnze.svg"
            fit="inside"
            class="object-contain hover:animate-text-glow"
            style="height: var(--header-h); width: var(--header-h)"
            height="72"
            width="72"
            quality="90"
            format="webp,auto"
          />
        </NuxtLink>

        <NuxtLink
          v-if="showLetsMeetLink"
          :to="localePath('lets-meet')"
          class="hidden shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-mono text-sm font-medium text-base-content-900 hover:bg-primary-100 focus:bg-primary-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:outline-0 focus-visible:ring-inset xs:inline-flex lg:items-center"
          active-class="bg-primary-100 hover:ring-2 hover:ring-primary-200"
        >
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          {{ `@` }} <Icon name="flagpack:fr" /> {{ 'Rennes' }}
        </NuxtLink>
      </div>

      <!-- Site navigation links -->
      <nav
        v-if="navItems.length > 0"
        class="invisible absolute inset-x-0 top-full z-50 ml-auto bg-base-200 pr-4 pl-8 opacity-0 duration-300 ease-linear peer-has-[:checked]:visible peer-has-[:checked]:opacity-100 xs:visible xs:px-8"
        :class="{
          'relative bg-transparent opacity-100': !toggleMenuMaxBreakpointVisible,
          'xs:relative xs:bg-transparent xs:opacity-100': toggleMenuMaxBreakpointVisible === 'xs',
          'sm:relative sm:bg-transparent sm:opacity-100': toggleMenuMaxBreakpointVisible === 'sm',
          'md:relative md:bg-transparent md:opacity-100': toggleMenuMaxBreakpointVisible === 'md',
          'lg:relative lg:bg-transparent lg:opacity-100': toggleMenuMaxBreakpointVisible === 'lg',
          'xl:relative xl:bg-transparent xl:opacity-100': toggleMenuMaxBreakpointVisible === 'xl',
          '2xl:relative 2xl:bg-transparent 2xl:opacity-100': toggleMenuMaxBreakpointVisible === '2xl',
        }"
      >
        <ul
          class="flex flex-col gap-x-2 pb-4 lg:mr-16 lg:gap-x-5"
          :class="{
            '': !toggleMenuMaxBreakpointVisible,
            'xs:flex-row xs:items-center xs:justify-between xs:p-0': toggleMenuMaxBreakpointVisible === 'xs',
            'sm:flex-row sm:items-center sm:justify-between sm:p-0': toggleMenuMaxBreakpointVisible === 'sm',
            'md:flex-row md:items-center md:justify-between md:p-0': toggleMenuMaxBreakpointVisible === 'md',
            'lg:flex-row lg:items-center lg:justify-between lg:p-0': toggleMenuMaxBreakpointVisible === 'lg',
            'xl:flex-row xl:items-center xl:justify-between xl:p-0': toggleMenuMaxBreakpointVisible === 'xl',
            '2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:p-0': toggleMenuMaxBreakpointVisible === '2xl',
          }"
        >
          <li
            v-for="(nav, index) of navItems"
            :key="index"
          >
            <NuxtLink
              :to="localePath(nav.slug)"
              class="group link rounded no-underline"
              :class="{
                'sm:hidden md:inline': nav.minBreakpoint === 'md',
                'sm:hidden lg:inline': nav.minBreakpoint === 'lg',
                'sm:hidden xl:inline': nav.minBreakpoint === 'xl',
                'sm:hidden 2xl:inline': nav.minBreakpoint === '2xl',
              }"
            >
              <template #default="slot">
                <span
                  :class="[
                    'flex items-center rounded p-1 lg:px-3 lg:py-2',
                    {
                      'font-bold text-primary-700 md:bg-primary-200': slot?.isActive,
                      'h-link-glow': !slot?.isActive,
                    },
                  ]"
                >
                  <Icon
                    v-if="nav.icon"
                    :name="nav.icon"
                    class="mr-2 inline size-5 items-center text-sm text-primary-700 opacity-50 transition group-hover:opacity-100"
                    :class="{
                      'opacity-100': slot?.isActive,
                      'inline-flex': !nav.iconMinBreakpoint,
                      'sm:hidden md:inline': nav.iconMinBreakpoint === 'md',
                      'sm:hidden lg:inline': nav.iconMinBreakpoint === 'lg',
                      'sm:hidden xl:inline': nav.iconMinBreakpoint === 'xl',
                      'sm:hidden 2xl:inline': nav.iconMinBreakpoint === '2xl',
                    }"
                  />
                  {{ nav.label }}
                </span>
              </template>
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Customization settings -->
      <div
        class="ml-4 flex items-center space-x-4 lg:space-x-10"
      >
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
