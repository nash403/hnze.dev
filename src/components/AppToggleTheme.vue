<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import IconThemeSystem from '~icons/line-md/computer'
import IconThemeLight from '~icons/line-md/sunny-outline-twotone'
import IconThemeDark from '~icons/line-md/moon'

const colorMode = useColorMode()
const themesIcons: { [theme in 'system' | 'light' | 'dark']: FunctionalComponent } = {
  system: IconThemeSystem,
  light: IconThemeLight,
  dark: IconThemeDark,
}

const themes = Object.entries(themesIcons).map(([theme, _]) => theme)
const currentThemeIndex = ref(colorMode.preference === 'unkown'
  ? 0
  : themes.findIndex(theme => theme === colorMode.preference))

currentThemeIndex.value < 0 && (currentThemeIndex.value = 0)

const getNextThemeIndex = () => (currentThemeIndex.value + 1) % themes.length

const toggleTheme = () => {
  currentThemeIndex.value = getNextThemeIndex()
  colorMode.preference = themes[currentThemeIndex.value]
}
</script>

<template>
  <button
    :aria-label="$t('app.toggle_theme_label', [colorMode.preference])"
    @click="toggleTheme()"
  >
    <ColorScheme placeholder="...">
      <template v-for="(theme, i) of themes" :key="i">
        <component :is="(themesIcons as any)[themes[getNextThemeIndex()]]" v-if="(colorMode.preference as typeof themes[number]) === theme" />
      </template>
    </ColorScheme>
  </button>
</template>
