<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

type ContractType = 'fullTimePermanent' // CDI à temps plein
  | 'partTimePermanent' // CDI à temps partiel
  | 'fullTimeFixedTerm' // CDD à temps plein
  | 'partTimeFixedTerm' // CDD à temps partiel
  | 'freelance' // Freelance / Indépendant
  | 'contractor' // Contrat de prestation (souvent B2B)
  | 'internship' // Stage
  | 'apprenticeship' // Alternance / Apprentissage
  | 'seasonal' // Saisonnier
  | 'temporary' // Intérim
  | 'volunteer' // Bénévolat
  | 'selfEmployed' // Auto-entrepreneur / Entrepreneur individuel
  | 'remoteFullTime' // Temps plein en télétravail
  | 'remotePartTime' // Temps partiel en télétravail
  | 'hybrid' // Mode hybride (présentiel + télétravail)
  | 'casual' // Occasionnel / Travail à la tâche
  | string // Fallback value

type WorkLocation = 'onsite' // Sur site
  | 'remote' // Télétravail
  | 'hybrid' // Mode hybride (présentiel + télétravail)
  | 'flexible' // Flexible / Au choix
  | string // Fallback value

interface Props {
  workPosition: string
  companyName?: string
  companyLogoUrl?: string
  companyLogoAlt?: string
  companyLogoType?: 'image' | 'icon'
  companyUrl?: RouteLocationRaw
  workLocation?: WorkLocation
  contractType?: ContractType
  startDate: string
  endDate?: string
}

const props = withDefaults(defineProps<Props>(), {
  companyLogoType: 'image',
})

const { t } = useI18n()

const contractDetailTags = computed(() => {
  const arr: Array<{ href?: RouteLocationRaw, icon: string, label: string }> = []
  if (props.companyName) {
    arr.push({
      href: props.companyUrl,
      icon: 'mingcute:briefcase-line',
      label: props.companyName,
    })
  }
  if (props.contractType) {
    arr.push({
      href: props.companyUrl,
      icon: 'mingcute:file-check-line',
      label: t(`contractTypes.${props.contractType}`, props.contractType),
    })
  }
  if (props.workLocation) {
    arr.push({
      href: props.companyUrl,
      icon: 'mingcute:map-pin-line',
      label: t(`workLocations.${props.workLocation}`, props.workLocation),
    })
  }
  return arr
})
</script>

<template>
  <div class="md:grid md:grid-cols-3 md:gap-3 print:grid print:break-inside-avoid print:grid-cols-3 print:gap-3">
    <!-- Dates -->
    <div class="flex items-baseline leading-8 font-bold">
      <span>{{ startDate.slice(0, -3) }}</span>
      <span
        v-if="endDate"
        class="ml-8"
      >{{ endDate.slice(0, -3) }}</span>
    </div>

    <div
      class="md:col-span-2 print:col-span-2"
    >
      <!-- Work position -->
      <h3
        class="text-2xl font-bold text-accent md:col-span-2 print:col-span-2"
      >
        {{ workPosition }}
      </h3>

      <!-- Work position contract details -->
      <div class="mt-2 flex flex-wrap gap-2">
        <template
          v-for="(item, i) in contractDetailTags"
          :key="i"
        >
          <NuxtLink
            v-if="item.href"
            :to="item.href"
            target="_blank"
            external
            class="inline-flex items-center px-2 py-1 font-medium"
          >
            <Icon
              :name="item.icon"
              class="mr-1"
            />
            {{ item.label }}
          </NuxtLink>
          <span
            v-else
            class="inline-flex items-center px-2 py-1 font-medium"
          >
            <Icon
              :name="item.icon"
              class="mr-1"
            />
            {{ item.label }}
          </span>
        </template>
      </div>
    </div>

    <!-- Company Logo -->
    <div>
      <NuxtImg
        v-if="companyLogoUrl"
        :src="companyLogoUrl"
        :alt="companyLogoAlt || `Logo de ${companyName}`"
        width="128px"
        quality="90"
      />
    </div>

    <!-- Work summary -->
    <div
      class="print:prose-xs prose prose-base md:prose-sm prose-li:list-[square] prose-li:marker:text-accent prose-li:[&_li]:list-['-']"
    >
      <slot name="summary"></slot>
    </div>
  </div>
</template>

<style scoped></style>
