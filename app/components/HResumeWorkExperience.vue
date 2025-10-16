<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import { Fragment } from 'vue/jsx-runtime'

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
  companyName: string
  companyLogoUrl?: string
  companyLogoAlt?: string
  companyLogoType?: 'image' | 'icon'
  companyUrl?: RouteLocationRaw
  workLocation?: WorkLocation
  contractType?: ContractType
  startDate: string
  endDate?: string
}

withDefaults(defineProps<Props>(), {
  contractType: 'fullTimePermanent',
  workLocation: 'onsite',
  companyLogoType: 'image',
})
</script>

<template>
  <div class="md:grid md:grid-cols-3 md:gap-3 print:grid print:break-inside-avoid print:grid-cols-3 print:gap-3">
    <!-- Dates -->
    <div :class="{ 'flex items-baseline leading-8 font-bold': !!startDate }">
      <template v-if="startDate">
        <span>{{ startDate.slice(0, -3) }}</span>
        <span
          v-if="endDate"
          class="ml-8"
        >{{ endDate.slice(0, -3) }}</span>
      </template>
    </div>

    <component
      :is="companyName ? 'div' : Fragment"
      :class="{ 'md:col-span-2 print:col-span-2': !!companyName }"
    >
      <!-- Work position -->
      <h3
        class="text-2xl font-bold text-accent"
        :class="{ 'md:col-span-2 print:col-span-2': !companyName }"
      >
        {{ workPosition }}
      </h3>

      <!-- Work position contract details -->
      <div
        v-if="companyName"
        class="mt-2 flex flex-wrap gap-2"
      >
        <template
          v-for="(item, i) in [
            { href: companyUrl, icon: 'clarity:briefcase-line', label: companyName },
            { href: companyUrl, icon: 'clarity:contract-line', label: $t(`contractTypes.${contractType}`, contractType) },
            { href: companyUrl, icon: 'clarity:map-marker-line', label: $t(`workLocations.${workLocation}`, workLocation) },
          ]"
          :key="i"
        >
          <NuxtLink
            v-if="item.href"
            :to="item.href"
            target="_blank"
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
    </component>

    <!-- Company Logo -->
    <div>
      <NuxtImg
        v-if="companyLogoUrl"
        :src="companyLogoUrl"
        :alt="companyLogoAlt || `Logo de ${companyName}`"
        width="128px"
        quality="90"
        format="webp,auto"
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
