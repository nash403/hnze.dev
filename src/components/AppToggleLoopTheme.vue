<script lang="ts" setup>
import type { FunctionalComponent } from 'vue'
import IconThemeSystem from '~icons/line-md/computer'
import IconThemeLight from '~icons/line-md/sunny-outline-twotone'
import IconThemeDark from '~icons/line-md/moon'
import type { ColorTheme } from '~/types'

const colorMode = useColorMode()
const { t } = useI18n()
const route = useRoute()

const themesIcons: { [theme in ColorTheme]: FunctionalComponent } = {
  system: IconThemeSystem,
  light: IconThemeLight,
  dark: IconThemeDark,
}

const themeNames: { [theme in ColorTheme]: string } = {
  system: t('app.theme.names.system'),
  light: t('app.theme.names.light'),
  dark: t('app.theme.names.dark'),
}

const themes = Object.entries(themesIcons).map(([theme, _]) => theme as ColorTheme)

const getThemeIndexFromPreference = (preference?: string) => {
  preference = preference || colorMode.preference
  return preference === 'unkown'
    ? 0
    : themes.findIndex(theme => theme === preference)
}

const currentThemeIndex = ref(getThemeIndexFromPreference(route.meta.colorMode ? route.meta.colorMode : undefined))

// Ensure valid initial value
currentThemeIndex.value < 0 && (currentThemeIndex.value = 0)

const getNextThemeIndex = () => (currentThemeIndex.value + 1) % themes.length

const toggleTheme = () => {
  colorMode.preference = themes[getNextThemeIndex()]
}

watch(() => colorMode.preference, () => {
  currentThemeIndex.value = getThemeIndexFromPreference()
})
</script>

<template>
  <button
    :aria-label="$t('app.theme.toggle_btn_label', [themeNames[themes[currentThemeIndex]]])"
    :title="$t('app.theme.toggle_btn_label', [themeNames[themes[currentThemeIndex]]])"
    :disabled="colorMode.forced"
    :class="{ 'cursor-not-allowed': colorMode.forced }"
    @click="toggleTheme()"
  >
    <ColorScheme placeholder="...">
      <template v-for="(theme, i) of themes" :key="i">
        <component
          :is="themesIcons[
            themes[currentThemeIndex]]"
          v-if="(colorMode.preference as typeof themes[number]) === theme"
        />
      </template>
    </ColorScheme>
  </button>
</template>
