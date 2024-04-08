<script lang="ts" setup>
import ZLogoCloud from './ui/ZLogoCloud.vue'
import LogoZv from '~icons/hnze-companies/zv'
import LogoDecat from '~icons/hnze-companies/decathlon'
import LogoAdeo from '~icons/hnze-companies/adeo'
import LogoNorauto from '~icons/hnze-companies/norauto'
import LogoAuchan from '~icons/hnze-companies/auchan'

const { t } = useI18n()
const techs = [
  {
    name: 'Zadig & Voltaire',
    title: t('shared.goto_website_of', 'Zadig & Voltaire'),
    link: 'https://zadig-et-voltaire.com',
    logo: LogoZv,
    target: '_blank',
  },
  {
    name: 'Decathlon',
    title: t('shared.goto_website_of', 'Decathlon'),
    link: 'https://www.decathlon.fr/',
    logo: LogoDecat,
    target: '_blank',
  },
  {
    name: 'Norauto',
    title: t('shared.goto_website_of', 'Norauto'),
    link: 'https://www.norauto.fr/',
    logo: LogoNorauto,
    target: '_blank',
  },
  {
    name: 'Adeo',
    title: t('shared.goto_website_of', 'Adeo'),
    link: 'https://www.adeo.com',
    logo: LogoAdeo,
    target: '_blank',
  },
  {
    name: 'Auchan Retail France',
    title: t('shared.goto_website_of', 'Auchan Retail France'),
    link: 'https://www.auchan-retail.com/fr',
    logo: LogoAuchan,
    target: '_blank',
  },
] satisfies InstanceType<typeof ZLogoCloud>['$props']['items']
</script>

<template>
  <ZLogoCloud :items="techs" />
</template>

<style scoped></style>
