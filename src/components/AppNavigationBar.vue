<script lang="ts" setup>
import IconFlagpackCa from '~icons/flagpack/ca'
import HnzeLogo from '~icons/hnze/logo'

const localePath = useLocalePath()

const { navItems } = useAppNavbar()

const { menuOpened, closeMenu, toggleMenuOpen } = useAppNavbarMenu()
</script>

<template>
  <div aria-hidden="true" class="fixed inset-0 z-30 bg-black/40" :class="menuOpened ? 'flex md:hidden' : 'hidden'" @click="closeMenu"></div>
  <header class="sticky top-0 z-40 w-full select-none bg-background/40 backdrop-blur-[1.25rem] backdrop-saturate-[180%] has-[:checked]:bg-background">
    <div
      class="relative mx-auto flex max-w-fullxl items-center justify-between pr-4 sm:py-0 sm:pr-8 md:px-8"
    >
      <label
        class="peer relative border-r-2 border-r-foreground-400 p-2 outline-none md:hidden"
        @click="toggleMenuOpen"
      >
        <input type="checkbox" :aria-label="$t('app.navbar.toggle_menu_label')" class="peer sr-only" />
        <div
          aria-hidden="true"
          class="h-0.5 w-4 rounded bg-foreground transition peer-checked:translate-y-[0.33rem] peer-checked:rotate-45"
        ></div>
        <div
          aria-hidden="true"
          class="mt-2 h-0.5 w-4 rounded bg-foreground transition peer-checked:translate-y-[-0.33rem] peer-checked:-rotate-45"
        ></div>
      </label>

      <div class="ml-2 mr-auto flex items-center space-x-10 md:ml-0">
        <ZLink :to="localePath('index')" :title="$t('app.link_go_home')" class="-unglow flex items-center">
          <HnzeLogo class="size-[4.5rem] hover:animate-text-glow" />
        </ZLink>

        <ZLink
          :to="localePath('lets-meet')"
          class="-unglow hidden shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-1.5 font-mono text-sm font-medium
         text-foreground-500 focus:bg-primary-50 focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-50 lg:inline-flex lg:items-center"
        >
          <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
          {{ `@` }} <IconFlagpackCa /> {{ 'Montreal' }}
        </ZLink>
      </div>

      <nav
        class="invisible absolute inset-x-0 top-full z-50 ml-auto border-b border-b-gray-300/40 bg-background pl-8 pr-4 opacity-0 duration-300 ease-linear peer-has-[:checked]:visible peer-has-[:checked]:opacity-100 sm:px-8 md:visible md:relative md:border-b-0 md:px-0 md:opacity-100"
      >
        <ul class="flex flex-col gap-x-2 pb-4 md:flex-row md:items-center md:justify-between md:p-0 lg:mr-16 lg:gap-x-5">
          <li v-for="nav of navItems" :key="nav.id">
            <ZLink
              :to="nav.link"
              active-class="router-link-active"
              exact-active-class="router-link-exact-active"
              class="relative flex px-2 py-1 md:inline-flex md:p-0"
            >
              <template #default="slot">
                <span :class="['group flex items-center rounded p-1 lg:px-3 lg:py-2', { 'text-foreground-800 md:bg-primary-50': slot?.isActive }]">
                  <component :is="nav.icon" class="mr-2 hidden size-5 items-center text-sm opacity-75 transition group-hover:opacity-100 md:text-base xl:inline-flex" :class="{ 'opacity-100': slot?.isActive }" />
                  {{ nav.text }}
                </span>
              </template>
            </ZLink>
          </li>
        </ul>
      </nav>

      <div class="ml-4 flex items-center space-x-4 lg:space-x-10" title="Fonctionnalités limitées pour le moment">
        <HAppLanguageSwitcher />
        <HAppToggleLoopTheme />
      </div>
    </div>
  </header>
</template>
