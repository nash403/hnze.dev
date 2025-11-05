<script lang="ts" setup>
// type NavItem = {
//   icon?: string
//   class?: string
//   to: string
//   label: string
// }

// const { t } = useI18n()
const localePath = useLocalePath()
// const navItems: NavItem[] = [
//   // {
//   //   label: t('app.navbar.pages.about'),
//   //   to: localePath('about'),
//   // },
//   // {
//   //   class: 'md:hidden lg:inline-block',
//   //   label: t('app.navbar.pages.uses'),
//   //   to: localePath('uses'),
//   // },
//   {
//     icon: 'line-md:coffee-loop',
//     class: 'md:inline-block',
//     label: t('app.navbar.pages.meet'),
//     to: localePath('lets-meet'),
//   },
//   {
//     icon: 'line-md:telegram',
//     label: t('app.navbar.pages.hire_me'),
//     to: localePath('hire-me'),
//   },
// ].map((nav, i) => ({
//   ...nav,
//   id: `nav-item-${i}-${nav.to}`,
// }))

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
  <header class="sticky top-0 z-40 w-full bg-base-200/40 backdrop-blur-[1.25rem] backdrop-saturate-[180%] select-none has-[:checked]:bg-base-200">
    <div
      class="relative mx-auto flex max-w-wide items-center justify-between pr-4 sm:py-0 sm:pr-8 md:px-8"
    >
      <!-- Menu toggle -->
      <label
        class="peer relative border-r-2 border-r-base-content-400 p-2 outline-none md:hidden"
        @click="toggleMenuOpen"
      >
        <input
          type="checkbox"
          :aria-label="$t('app.navbar.toggle_menu_label')"
          class="peer sr-only"
        />
        <div
          aria-hidden="true"
          class="h-0.5 w-4 rounded bg-base-content transition peer-checked:translate-y-[0.33rem] peer-checked:rotate-45"
        ></div>
        <div
          aria-hidden="true"
          class="mt-2 h-0.5 w-4 rounded bg-base-content transition peer-checked:translate-y-[-0.33rem] peer-checked:-rotate-45"
        ></div>
      </label>

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

        <!-- <ZLink
          :to="localePath('lets-meet')"
          class="-no-glow text-base-content-500 focus:bg-primary-50 focus-visible:ring-primary-50 hidden shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-1.5
         font-mono text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:outline-0 focus-visible:ring-inset lg:inline-flex lg:items-center"
        >
          !-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text --
          {{ `@` }} <Icon name="flagpack:fr" /> {{ 'Rennes' }}
        </ZLink> -->
      </div>

      <!-- <nav
        class="bg-base-200 invisible absolute inset-x-0 top-full z-50 ml-auto border-b border-b-gray-300/40 pr-4 pl-8 opacity-0 duration-300 ease-linear peer-has-[:checked]:visible peer-has-[:checked]:opacity-100 sm:px-8 md:visible md:relative md:border-b-0 md:bg-transparent md:px-0 md:opacity-100"
      >
        <ul class="flex flex-col gap-x-2 pb-4 md:flex-row md:items-center md:justify-between md:p-0 lg:mr-16 lg:gap-x-5">
          <li
            v-for="nav of navItems"
            :key="nav.id"
          >
            <ZLink
              :to="nav.link"
              active-class="router-link-active"
              exact-active-class="router-link-exact-active"
              class="relative flex px-2 py-1 md:inline-flex md:p-0"
            >
              <template #default="slot">
                <span :class="['group flex items-center rounded p-1 lg:px-3 lg:py-2', { 'text-base-content-800 md:bg-primary-50': slot?.isActive }]">
                  <component
                    :is="nav.icon"
                    class="mr-2 hidden size-5 items-center text-sm opacity-75 transition group-hover:opacity-100 md:text-base xl:inline-flex"
                    :class="{ 'opacity-100': slot?.isActive }"
                  />
                  {{ nav.text }}
                </span>
              </template>
            </ZLink>
          </li>
        </ul>
      </nav> -->

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
