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
  startDate?: string
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
  <article
    class="grid grid-cols-1 gap-4 md:grid-cols-3 print:break-inside-avoid print:grid-cols-3"
  >
    <!-- Dates + Company Logo -->
    <div class="space-y-4">
      <p class="flex items-center leading-8 font-bold">
        <slot name="dates">
          <span v-if="startDate">{{ startDate.slice(0, -3) }}</span>
          <span
            v-if="endDate"
            class="ml-8"
          >{{ endDate.slice(0, -3) }}</span>
        </slot>
      </p>
      <div>
        <NuxtImg
          v-if="companyLogoUrl"
          :src="companyLogoUrl"
          :alt="companyLogoAlt"
          width="128"
          height="72"
          fit="inside"
          placeholder-class="bg-neutral-100"
          quality="90"
          loading="lazy"
        />
      </div>
    </div>

    <!-- Work details -->
    <div class="space-y-4 md:col-span-2">
      <div
        class="md:col-span-2 print:col-span-2"
      >
        <!-- Work position -->
        <h3
          class="md:col-span-2 print:col-span-2"
        >
          {{ workPosition }}
        </h3>

        <!-- Work position contract details -->
        <div class="mt-2 flex flex-wrap gap-2">
          <template
            v-for="(tag, i) in contractDetailTags"
            :key="i"
          >
            <NuxtLink
              v-if="tag.href"
              :to="tag.href"
              target="_blank"
              external
              class="badge badge-ghost badge-md"
            >
              <Icon
                :name="tag.icon"
                class="mr-1"
              />
              {{ tag.label }}
            </NuxtLink>
            <span
              v-else
              class="inline-flex items-center px-2 py-1 font-medium"
            >
              <Icon
                :name="tag.icon"
                class="mr-1"
              />
              {{ tag.label }}
            </span>
          </template>
        </div>
      </div>
      <!-- Summary -->
      <div class="print:prose-xs prose prose-base max-w-none md:prose-sm prose-li:list-[square] prose-li:marker:text-accent prose-li:[&_li]:list-['-']">
        <slot></slot>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
