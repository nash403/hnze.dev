<script lang="ts" setup>
import LogoVue from '~icons/logos/vue'
import LogoNuxt from '~icons/logos/nuxt-icon'
import LogoTypescript from '~icons/logos/typescript-icon'
import LogoTailwindCSS from '~icons/devicon/tailwindcss'
import LogoNodejs from '~icons/logos/nodejs-icon'
import LogoDocker from '~icons/logos/docker-icon'

const techs = [
  {
    name: 'Vue',
    link: 'https://vuejs.org',
    logo: LogoVue,
  },
  {
    name: 'Nuxt',
    link: 'https://nuxt.com',
    logo: LogoNuxt,
  },
  {
    name: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    logo: LogoTailwindCSS,
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    logo: LogoTypescript,
  },
  {
    name: 'Nodejs',
    link: 'https://nodejs.org/',
    logo: LogoNodejs,
  },
  {
    name: 'Docker',
    link: 'https://www.docker.com/',
    logo: LogoDocker,
  },
]
</script>

<template>
  <ul class="flex flex-wrap gap-4 text-4xl">
    <li v-for="(tech, i) of techs" :key="`tech-${i}`">
      <ZLink :to="tech.link" target="_blank" :title="$t('app.homepage.tech_showcase', [tech.name])">
        <component :is="tech.logo" class="opacity-50 grayscale transition-all hover:opacity-100 hover:filter-none" />
      </ZLink>
    </li>
  </ul>
</template>

<style scoped></style>
