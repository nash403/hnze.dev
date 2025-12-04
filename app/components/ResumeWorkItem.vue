<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import { NuxtLink } from '#components'

type ContractType = 'fullTimePermanent' // CDI à temps plein
  | 'partTimePermanent' // CDI à temps partiel
  | 'fullTimeFixedTerm' // CDD à temps plein
  | 'partTimeFixedTerm' // CDD à temps partiel
  | 'freelance' // Freelance / Indépendant
  | 'internship' // Stage
  | 'apprenticeship' // Alternance / Apprentissage
  | 'seasonal' // Saisonnier
  | 'temporary' // Intérim
  | 'volunteer' // Bénévolat
  | 'selfEmployed' // À mon compte / Projet perso
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
  workLocation?: WorkLocation | [WorkLocation, ...any[]]
  contractType?: ContractType | [ContractType, ...any[]]
  startDate?: string
  endDate?: string
}

const props = withDefaults(defineProps<Props>(), {
  companyLogoType: 'image',
})

const { t } = useI18n()

const i18nContractTypesMapping: Record<ContractType, string> = {
  fullTimePermanent: 'i18n.work_contract_types.full_time_permanent',
  partTimePermanent: 'i18n.work_contract_types.part_time_permanent',
  fullTimeFixedTerm: 'i18n.work_contract_types.full_time_fixed_term',
  partTimeFixedTerm: 'i18n.work_contract_types.part_time_fixed_term',
  freelance: 'i18n.work_contract_types.freelance',
  internship: 'i18n.work_contract_types.internship',
  apprenticeship: 'i18n.work_contract_types.apprenticeship',
  seasonal: 'i18n.work_contract_types.seasonal',
  temporary: 'i18n.work_contract_types.temporary',
  volunteer: 'i18n.work_contract_types.volunteer',
  selfEmployed: 'i18n.work_contract_types.self_employed',
}

const i18nWorkLocationMapping: Record<WorkLocation, string> = {
  onsite: 'i18n.work_locations.onsite',
  remote: 'i18n.work_locations.remote',
  remote_from: 'i18n.work_locations.remote_from',
  hybrid: 'i18n.work_locations.hybrid',
  flexible: 'i18n.work_locations.flexible',
}

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
    const isArray = Array.isArray(props.contractType)
    const contractTypeKey = isArray ? props.contractType[0] : props.contractType
    const interpolationValues = isArray ? props.contractType.slice(1) : []
    const i18nKey = i18nContractTypesMapping[contractTypeKey as keyof typeof i18nContractTypesMapping]

    arr.push({
      icon: 'mingcute:file-check-line',
      label: interpolationValues.length === 1
        ? t(i18nKey || contractTypeKey, interpolationValues[0])
        : t(i18nKey || contractTypeKey, contractTypeKey),
    })
  }
  if (props.workLocation) {
    const isArray = Array.isArray(props.workLocation)
    const workLocationKey = isArray ? props.workLocation[0] : props.workLocation
    const interpolationValues = isArray ? props.workLocation.slice(1) : []
    const i18nKey = i18nWorkLocationMapping[workLocationKey as keyof typeof i18nWorkLocationMapping]

    arr.push({
      icon: 'mingcute:map-pin-line',
      label: interpolationValues.length === 1
        ? t(i18nKey || workLocationKey, interpolationValues[0])
        : t(i18nKey || workLocationKey, workLocationKey),
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
    <div class="col-span-2 space-y-4">
      <div>
        <!-- Work position -->
        <h3>
          {{ workPosition }}
        </h3>

        <!-- Work position contract details -->
        <div class="mt-2 flex flex-wrap gap-2">
          <template
            v-for="(tag, i) in contractDetailTags"
            :key="i"
          >
            <component
              :is="tag.href ? NuxtLink : 'span'"
              v-bind="tag.href
                ? {
                  to: tag.href,
                  target: '_blank',
                  external:
                    true,
                }
                : {}"
              class="badge gap-x-1 badge-ghost badge-md"
            >
              <Icon
                :name="tag.icon"
              />
              {{ tag.label }}
            </component>
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
