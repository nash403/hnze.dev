<script lang="ts" setup>
import IconFlagpackCa from '~icons/flagpack/ca'
import HnzeLogo from '~icons/hnze/logo'

const localePath = useLocalePath()

const { navItems } = useAppNavbar()

const { menuOpened, closeMenu, toggleMenuOpen } = useAppNavbarMenu()
</script>

<template>
  <div aria-hidden="true" class="fixed inset-0 z-30 bg-gray-800/40" :class="menuOpened ? 'flex md:hidden' : 'hidden'" @click="closeMenu" />
  <header class="sticky top-0 z-40 w-full">
    <div
      class="relative mx-auto flex max-w-fullxl items-center justify-between bg-[--bg] pr-4 sm:py-0 sm:pr-8 md:px-8"
    >
      <ZButton
        :aria-label="$t('app.navbar.toggle_menu_label')"
        class="relative border-r-2 border-r-gray-200 p-3 outline-none md:hidden"
        @click="toggleMenuOpen"
      >
        <div
          aria-hidden="true"
          class="h-0.5 w-6 rounded bg-gray-800 transition"
          :class="{ 'translate-y-[0.33rem] rotate-45': menuOpened }"
        />
        <div
          aria-hidden="true"
          class="mt-2 h-0.5 w-6 rounded bg-gray-800 transition"
          :class="{ 'translate-y-[-0.33rem] -rotate-45': menuOpened }"
        />
      </ZButton>

      <div class="mr-auto flex items-center space-x-10">
        <ZLink :to="localePath('index')" :title="$t('app.link_go_home')" class="flex items-center">
          <HnzeLogo class="size-[4.5rem]" />
        </ZLink>

        <ZLink
          :to="localePath('lets-meet')"
          class="text-primary-500 hover:bg-primary-50 focus-visible:ring-primary-500 hidden shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-mono
         text-sm font-medium text-gray-600 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset lg:inline-flex lg:items-center"
        >
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          {{ `@` }} <IconFlagpackCa /> {{ 'Montreal' }}
        </ZLink>
      </div>

      <div class="flex items-center space-x-2 lg:space-x-10">
        <nav class="absolute inset-x-0 top-full z-50 border-b border-b-gray-200 bg-[--bg] px-4 duration-300 ease-linear sm:px-8 md:relative md:border-b-0 md:px-0" :class="menuOpened ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'">
          <ul class="flex flex-col gap-x-2 md:flex-row md:items-center md:justify-between lg:mr-16 lg:gap-x-5">
            <li v-for="nav of navItems" :key="nav.id">
              <ZButton
                prepend
                prepend-class="hidden size-5 text-sm opacity-75 transition md:text-base xl:inline-flex group-hover:opacity-100"
                :to="nav.link"
                :icon="nav.icon"
                class="group flex items-center px-2 py-1 md:p-0"
              >
                <div class="rounded p-1 lg:px-3 lg:py-2">
                  {{ nav.text }}
                </div>
              </ZButton>
            </li>
          </ul>
        </nav>

        <div title="Fonctionnalités limitées pour le moment" class="flex items-center space-x-4">
          <HAppLanguageSwitcher />
          <HAppToggleLoopTheme />

          <!-- <ZButton
            :aria-label="$t('app.navbar.toggle_menu_label')"
            class="relative border-l-2 border-l-gray-200 py-3 pl-3 outline-none md:hidden"
            @click="toggleMenuOpen"
          >
            <div
              aria-hidden="true"
              class="h-0.5 w-6 rounded bg-gray-800 transition"
              :class="{ 'translate-y-[0.33rem] rotate-45': menuOpened }"
            />
            <div
              aria-hidden="true"
              class="mt-2 h-0.5 w-6 rounded bg-gray-800 transition"
              :class="{ 'translate-y-[-0.33rem] -rotate-45': menuOpened }"
            />
          </ZButton> -->
        </div>
      </div>
    </div>
  </header>
</template>
