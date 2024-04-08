<script lang="ts" setup>
import ZLogoCloud from './ui/ZLogoCloud.vue'
import LogoVue from '~icons/logos/vue'
import LogoNuxt from '~icons/logos/nuxt-icon'
import LogoTypescript from '~icons/logos/typescript-icon'
import LogoTailwindCSS from '~icons/devicon/tailwindcss'
import LogoNodejs from '~icons/logos/nodejs-icon'
import LogoDocker from '~icons/logos/docker-icon'

const { t } = useI18n()
const techs = [
  {
    name: 'Vue',
    title: t('shared.goto_website_of', 'Vue'),
    link: 'https://vuejs.org',
    logo: LogoVue,
    target: '_blank',
  },
  {
    name: 'Nuxt',
    title: t('shared.goto_website_of', 'Nuxt'),
    link: 'https://nuxt.com',
    logo: LogoNuxt,
    target: '_blank',
  },
  {
    name: 'TailwindCSS',
    title: t('shared.goto_website_of', 'TailwindCSS'),
    link: 'https://tailwindcss.com/',
    logo: LogoTailwindCSS,
    target: '_blank',
  },
  {
    name: 'Typescript',
    title: t('shared.goto_website_of', 'Typescript'),
    link: 'https://www.typescriptlang.org/',
    logo: LogoTypescript,
    target: '_blank',
  },
  {
    name: 'Nodejs',
    title: t('shared.goto_website_of', 'Nodejs'),
    link: 'https://nodejs.org/',
    logo: LogoNodejs,
    target: '_blank',
  },
  {
    name: 'Docker',
    title: t('shared.goto_website_of', 'Docker'),
    link: 'https://www.docker.com/',
    logo: LogoDocker,
    target: '_blank',
  },
] satisfies InstanceType<typeof ZLogoCloud>['$props']['items']
</script>

<template>
  <ZLogoCloud :items="techs" />
</template>

<style scoped></style>
