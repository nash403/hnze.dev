<script setup lang="ts">
import IconThemeSystem from '~icons/line-md/computer'
import IconThemeLight from '~icons/line-md/sunny-outline-twotone'
import IconThemeDark from '~icons/line-md/moon'

const colorMode = useColorMode()
const themes = ['system', 'light', 'dark'] as const
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
      <IconThemeSystem v-if="(colorMode.preference as typeof themes[number]) ==='system'" />
      <IconThemeDark v-if="(colorMode.preference as typeof themes[number]) ==='light'" />
      <IconThemeLight v-if="(colorMode.preference as typeof themes[number]) ==='dark'" />
    </ColorScheme>
  </button>
</template>
