<script lang="ts" setup>
import IconFlagpackCa from '~icons/flagpack/ca'
import HnzeLogo from '~icons/hnze/logo'

const localePath = useLocalePath()

const navbarMenuOpened = ref(false)
const navItems = [
  {
    id: 1,
    isActive: true,
    text: 'Home',
    link: '#',
  },
  {
    id: 2,
    isActive: false,
    text: 'Portfolio',
    link: '#',
  },
  {
    id: 3,
    isActive: false,
    text: 'Blog',
    link: '#',
  },
  {
    id: 4,
    isActive: false,
    text: 'About',
    link: '#',
  },
]

const toggleNavbar = () => (navbarMenuOpened.value = !navbarMenuOpened.value)
const closeNavbar = () => {
  navbarMenuOpened.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 w-full">
    <div aria-hidden="true" class="fixed inset-0 z-30 bg-gray-800/40" :class="navbarMenuOpened ? 'flex md:hidden' : 'hidden'" @click="closeNavbar"></div>

    <div
      class="mx-auto flex max-w-fullxl items-center justify-between p-4 sm:px-8 sm:py-0"
    >
      <div class="flex items-center">
        <NuxtLink :to="localePath('index')" :title="$t('app.link_go_home')" class="flex items-center">
          <HnzeLogo class="size-16" />
        </NuxtLink>

        <NuxtLink to="#" class="text-primary-500 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 hidden shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-mono text-sm font-medium text-gray-600 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-75 xl:inline-flex xl:items-center dark:text-gray-400 dark:disabled:bg-transparent">
          {{ `@` }} <IconFlagpackCa /> {{ 'Montreal' }}
        </NuxtLink>
      </div>

      <nav
        class="ml-auto flex items-center justify-between gap-x-5"
      >
      </nav>

      <HAppToggleTheme />

      <button
        :aria-label="$t('app.toggle_navbar_menu')"
        class="relative border-l border-l-gray-200 py-3 pl-3 outline-none md:hidden dark:border-r-gray-800"

        @click="toggleNavbar"
      >
        <div
          aria-hidden="true"
          class="h-0.5 w-6 rounded bg-gray-800 transition dark:bg-gray-200"
          :class="{ 'translate-y-[0.33rem] rotate-45': navbarMenuOpened }"
        ></div>
        <div
          aria-hidden="true"
          class="mt-2 h-0.5 w-6 rounded bg-gray-800 transition dark:bg-gray-200"
          :class="{ '-translate-y-[0.33rem] -rotate-45': navbarMenuOpened }"
        ></div>
      </button>
    </div>
  </header>
</template>

<style scoped></style>
