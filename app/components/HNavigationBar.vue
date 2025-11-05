<script lang="ts" setup>
type NavItem = {
  icon?: string
  slug: string
  label: string
}

const localePath = useLocalePath()
const navItems: Ref<NavItem[]> = ref([
  {
    icon: 'mdi:account-circle-outline',
    slug: '/about-me',
    label: 'About',
  },
  {
    icon: 'mdi:briefcase-outline',
    slug: '/career',
    label: 'Career',
  },
])
</script>

<template>
  <header class="sticky top-0 z-40 w-full backdrop-blur-[1.25rem] select-none not-has-[:checked]:[mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-transparent after:blur-sm after:content-[''] not-has-[:checked]:after:via-primary has-[:checked]:bg-base-200 supports-[backdrop-filter]:backdrop-saturate-[180%]">
    <div
      class="relative mx-auto flex max-w-6xl items-center justify-between pr-4 sm:py-0 sm:pr-8 md:px-8"
    >
      <!-- Rest of the code remains the same -->
      <label
        class="peer group relative cursor-pointer border-r-2 border-r-base-content px-2 py-3 outline-none md:hidden "
      >
        <!-- @click="toggleMenuOpen" -->
        <input
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
      <div class="mr-auto ml-2 flex items-center space-x-10 py-[4px] md:ml-0">
        <NuxtLink
          :to="localePath('index')"
          :title="$t('app.link_go_home')"
          class="flex items-center"
        >
          <Icon
            name="hnze:hnze-logo"
            class="size-[4.5rem] hover:animate-text-glow"
          />
        </NuxtLink>

        <NuxtLink
          :to="localePath('lets-meet')"
          class="hidden shrink-0 items-center gap-x-1.5 rounded-md bg-primary-100 px-2.5 py-1.5 font-mono text-sm
         font-medium text-base-content hover:bg-primary-200 focus:bg-primary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:outline-0 focus-visible:ring-inset lg:inline-flex lg:items-center"
        >
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          {{ `@` }} <Icon name="flagpack:fr" /> {{ 'Rennes' }}
        </NuxtLink>
      </div>

      <!-- Site navigation links -->
      <nav
        class="invisible absolute inset-x-0 top-full z-50 ml-auto border-b border-b-gray-300/40 bg-base-200 pr-4 pl-8 opacity-0 duration-300 ease-linear peer-has-[:checked]:visible peer-has-[:checked]:opacity-100 sm:px-8 md:visible md:relative md:border-b-0 md:bg-transparent md:px-0 md:opacity-100"
      >
        <ul class="flex flex-col gap-x-2 pb-4 md:flex-row md:items-center md:justify-between md:p-0 lg:mr-16 lg:gap-x-5">
          <li
            v-for="(nav, index) of navItems"
            :key="index"
          >
            <NuxtLink
              :to="localePath(nav.slug)"
              active-class="router-link-active"
              exact-active-class="router-link-exact-active"
              class="h-link-glow"
            >
              <!-- class="relative flex px-2 py-1 md:inline-flex md:p-0" -->
              <template #default="slot">
                <span :class="['group flex items-center rounded p-1 lg:px-3 lg:py-2', { 'text-base-content-800 md:bg-primary-100': slot?.isActive }]">
                  <Icon
                    v-if="nav.icon"
                    :name="nav.icon"
                    class="mr-2 hidden size-5 items-center text-sm opacity-75 transition group-hover:opacity-100 md:text-base xl:inline-flex"
                    :class="{ 'opacity-100': slot?.isActive }"
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
        <HLangSwitcher />
        <HThemeSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
