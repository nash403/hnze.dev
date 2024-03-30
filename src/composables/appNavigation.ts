import type { FunctionalComponent } from 'vue'
import IconLetsMeetPage from '~icons/line-md/coffee-loop'
import IconHireMePage from '~icons/line-md/telegram'

type NavItem = {
  icon?: FunctionalComponent
  class?: string
  link: string
  text: string
}

export function useAppNavbar () {
  const { t } = useI18n()
  const localePath = useLocalePath()
  const route = useRoute()
  const _navItems: NavItem[] = [
    {
      text: t('app.navbar.pages.about'),
      link: localePath('about'),
    },
    {
      class: 'md:hidden lg:inline-block',
      text: t('app.navbar.pages.uses'),
      link: localePath('uses'),
    },
    {
      icon: IconLetsMeetPage,
      class: 'md:inline-block',
      text: t('app.navbar.pages.meet'),
      link: localePath('lets-meet'),
    },
    {
      icon: IconHireMePage,
      text: t('app.navbar.pages.hire_me'),
      link: localePath('hire-me'),
    },
  ]

  const navItems = computed(() => {
    return _navItems.map((nav, i) => ({
      ...nav,
      id: `nav-item-${i}-${nav.link}`,
      active: route.path === nav.link,
    }))
  })

  return {
    navItems,
  }
}

export function useAppNavbarMenu () {
  const navbarMenuOpened = ref(false)

  const toggleMenuOpen = () => (navbarMenuOpened.value = !navbarMenuOpened.value)
  const closeMenu = () => {
    navbarMenuOpened.value = false
  }

  return {
    menuOpened: navbarMenuOpened,
    toggleMenuOpen,
    closeMenu,
  }
}
