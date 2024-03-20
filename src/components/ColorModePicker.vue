<script setup lang="ts">
import type { FunctionalComponent, SVGAttributes } from 'vue'
import IconThemeLight from '~icons/hnze/theme-light'
import IconThemeDark from '~icons/hnze/theme-dark'

type ColorSchemeType = 'light' | 'dark'

const iconMap: Record<ColorSchemeType, FunctionalComponent<SVGAttributes>> = {
  light: IconThemeLight,
  dark: IconThemeDark,
}

const colorMode = useColorMode()
</script>

<template>
  <div>
    <ul class="">
      <li
        v-for="color of ['light', 'dark'] as ColorSchemeType[]"
        :key="color"
        class="inline-block p-2 text-3xl"
        :class="{
          preferred: !colorMode.unknown && color === colorMode.preference,
          selected: !colorMode.unknown && color === colorMode.value
        }"
      >
        <component :is="iconMap[color]" width="48" height="48" @click="colorMode.preference = color" />
      </li>
    </ul>
    <p>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ colorMode.preference }}</b>
        <span v-if="colorMode.preference === 'system'">&nbsp;(<i>{{ colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
    </p>
  </div>
</template>
