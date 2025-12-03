<script lang="ts" setup>
import type { ColorTheme, IconifyIconName } from '#shared/types'

const colorMode = useColorMode()
const { t } = useI18n()
const route = useRoute()

const supportedThemes: { [theme in ColorTheme]: { icon: IconifyIconName, label: string } } = {
  system: {
    icon: 'line-md:computer',
    label: t('i18n.comp.theme_switcher.system.name'),
  },
  light: {
    icon: 'line-md:sunny-outline',
    label: t('i18n.comp.theme_switcher.light.name'),
  },
  dark: {
    icon: 'line-md:moon',
    label: t('i18n.comp.theme_switcher.dark.name'),
  },
}

const themes: ColorTheme[] = Object.entries(supportedThemes).map(([theme, _]) => theme as ColorTheme)

const getThemeIndexFromPreference = (preference?: string) => {
  preference = preference || colorMode.preference
  const index = preference === 'unkown'
    ? 0
    : themes.findIndex(theme => theme === preference)
  return index > -1 ? index : 0
}

const currentThemeIndex = ref(getThemeIndexFromPreference(route.meta.colorMode ? route.meta.colorMode : undefined))

const getNextThemeIndex = () => (currentThemeIndex.value + 1) % themes.length

const toggleTheme = () => {
  colorMode.preference = themes[getNextThemeIndex()] as string
}

watch(() => colorMode.preference, () => {
  currentThemeIndex.value = getThemeIndexFromPreference()
})
</script>

<template>
  <button
    :aria-label="t('i18n.comp.theme_switcher.toggle_btn_title', [supportedThemes[themes[currentThemeIndex]!].label])"
    :title="t('i18n.comp.theme_switcher.toggle_btn_title', [supportedThemes[themes[currentThemeIndex]!].label])"
    :disabled="colorMode.forced"
    :class="['inline-flex link items-center hover:text-primary', { 'cursor-not-allowed': colorMode.forced }]"
    @click="toggleTheme()"
  >
    <ColorScheme
      placeholder="..."
      tag="div"
      class="size-5"
    >
      <Icon
        :name="supportedThemes[themes[currentThemeIndex]!].icon"
        size="1.25em"
        :class="[{ 'hover:animate-[spin_10s_linear_infinite]': colorMode.value === 'light' }]"
      />
    </ColorScheme>
  </button>
</template>
