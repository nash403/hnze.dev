<template>
  <div>
    <ul class="">
      <li
        v-for="color of ['light', 'dark']"
        :key="color"
        class="inline-block p-2 text-3xl"
        :class="{
          preferred: !$colorMode.unknown && color === $colorMode.preference,
          selected: !$colorMode.unknown && color === $colorMode.value
        }"
      >
        <component :is="`icon-${color}`" width="48" height="48" @click="$colorMode.preference = color" />
      </li>
    </ul>
    <p>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'">&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span>
      </ColorScheme>
    </p>
  </div>
</template>
