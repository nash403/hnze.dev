<script lang="ts" setup>
import ZLogoCloud from './ui/ZLogoCloud.vue'

const { t } = useI18n()
const techs = [
  {
    name: 'Zadig & Voltaire',
    title: t('shared.goto_website_of', 'Zadig & Voltaire'),
    link: 'https://zadig-et-voltaire.com',
    logo: '/img/companies/zv.svg',
    target: '_blank',
  },
  {
    name: 'Decathlon',
    title: t('shared.goto_website_of', 'Decathlon'),
    link: 'https://www.decathlon.fr/',
    logo: '/img/companies/decathlon.svg',
    target: '_blank',
  },
  {
    name: 'Norauto',
    title: t('shared.goto_website_of', 'Norauto'),
    link: 'https://www.norauto.fr/',
    logo: '/img/companies/norauto.svg',
    target: '_blank',
  },
  {
    name: 'Adeo',
    title: t('shared.goto_website_of', 'Adeo'),
    link: 'https://www.adeo.com',
    logo: '/img/companies/adeo.svg',
    target: '_blank',
  },
  {
    name: 'Auchan Retail France',
    title: t('shared.goto_website_of', 'Auchan Retail France'),
    link: 'https://www.auchan-retail.com/fr',
    logo: '/img/companies/auchan.svg',
    target: '_blank',
  },
] satisfies InstanceType<typeof ZLogoCloud>['$props']['items']
</script>

<template>
  <ZLogoCloud :items="techs" />
</template>


