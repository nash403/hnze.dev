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

const menuOpened = ref(false)

const toggleMenuOpen = () => (menuOpened.value = !menuOpened.value)
const closeMenu = () => {
  menuOpened.value = false
}
</script>

<template>
  <div
    aria-hidden="true"
    class="fixed inset-0 z-30 bg-black/40"
    :class="menuOpened ? 'flex md:hidden' : 'hidden'"
    @click="closeMenu"
  ></div>
  <header class="sticky top-0 z-40 w-full backdrop-blur-[1.25rem] backdrop-saturate-[180%] select-none has-[:checked]:bg-base-100">
    <div
      class="relative mx-auto flex max-w-6xl items-center justify-between pr-4 sm:py-0 sm:pr-8 md:px-8"
    >
      <!-- Menu toggle -->
      <label
        class="peer group relative cursor-pointer border-r-2 border-r-base-content-400 p-2 outline-none md:hidden "
        @click="toggleMenuOpen"
      >
        <input
          type="checkbox"
          :aria-label="$t('app.navbar.toggle_menu_label')"
          class="peer sr-only"
        />
        <div
          aria-hidden="true"
          class="h-0.5 w-4 rounded bg-base-content transition group-hover:bg-primary peer-checked:translate-y-[0.33rem] peer-checked:rotate-45"
        ></div>
        <div
          aria-hidden="true"
          class="mt-2 h-0.5 w-4 rounded bg-base-content transition group-hover:bg-primary peer-checked:translate-y-[-0.33rem] peer-checked:-rotate-45"
        ></div>
      </label>

      <!-- Logo & Let's meet CTA -->
      <div class="mr-auto ml-2 flex items-center space-x-10 md:ml-0">
        <NuxtLink
          :to="localePath('index')"
          :title="$t('app.link_go_home')"
          class="-no-glow flex items-center"
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
        class="invisible absolute inset-x-0 top-full z-50 ml-auto border-b border-b-gray-300/40 bg-base-100 pr-4 pl-8 opacity-0 duration-300 ease-linear peer-has-[:checked]:visible peer-has-[:checked]:opacity-100 sm:px-8 md:visible md:relative md:border-b-0 md:bg-transparent md:px-0 md:opacity-100"
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
