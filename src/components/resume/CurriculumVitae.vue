<script setup lang="ts">
import ClarityEmailLine from '~icons/clarity/email-line'
import ClarityPhoneHandsetLine from '~icons/clarity/phone-handset-line'

import BxlGithub from '~icons/bxl/github'
import BxlLinkedinSquare from '~icons/bxl/linkedin-square'

import ClarityLinkLine from '~icons/clarity/link-line'
import ClarityMapMarkerLine from '~icons/clarity/map-marker-line'
import ClarityBriefcaseLine from '~icons/clarity/briefcase-line'
import ClarityContractLine from '~icons/clarity/contract-line'

const resume = await useResume()
const localePath = useLocalePath()
</script>

<template>
  <div class="p-4 md:p-16 print:p-8">
    <section class="min-[896px]:grid min-[896px]:grid-cols-3 min-[896px]:gap-5 print:grid print:h-screen print:grid-cols-3 print:gap-5">
      <h1 class="min-[896px]:col-span-3 min-[896px]:grid min-[896px]:grid-cols-subgrid print:col-span-3 print:grid print:grid-cols-subgrid">
        <div class="max-w-72 text-6xl font-bold">
          <NuxtLink :to="localePath('index')" class="-no-hover">
            {{ resume.name }}
          </NuxtLink>
        </div>
        <div class="col-span-2 max-w-40 text-4xl print:max-w-44 print:pl-3">
          {{ resume.jobTitle }}
        </div>
      </h1>

      <div class="col-span-3 flex flex-col place-items-center">
        <ZProfilePicture class="invisible m-8" size="180" />
        <p class="prose prose-base px-8 md:p-0">
          {{ resume.summary }}
        </p>

        <div class="prose prose-base mt-8 w-full md:grid md:grid-cols-2 print:grid print:grid-cols-2">
          <div>
            <div class="flex items-center">
              <ClarityEmailLine class="mr-2" />
              <a :href="`mailto:${resume.email}`" target="_blank">{{ resume.email }}</a>
            </div>
            <div class="flex items-center">
              <ClarityPhoneHandsetLine class="mr-2" />
              <a :href="`tel:${resume.phoneNumber}`" target="_blank">{{ resume.phoneNumberFormatted }}</a>
            </div>
            <div class="flex items-center space-x-2 py-1 text-xl">
              <a :href="resume.socialProfiles?.linkedin?.url" target="_blank">
                <BxlLinkedinSquare />
              </a>
              <a :href="resume.socialProfiles?.github.url" target="_blank">
                <BxlGithub />
              </a>
            </div>
          </div>

          <div>
            <div class="flex items-center">
              <ClarityMapMarkerLine class="mr-2" />
              <a :href="resume.mainLocation?.mapsUrl" target="_blank">{{ `${resume.mainLocation?.city}, ${resume.mainLocation?.regionName},
                            ${resume.mainLocation?.countryName}` }}</a>
            </div>
            <div class="flex items-center">
              <ClarityLinkLine class="mr-2" />
              <a :href="resume.url" target="_blank">{{ resume.urlText }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-12 break-before-page">
      <h2 class="text-4xl font-bold md:text-6xl print:text-6xl">
        {{ $t('app.page_resume.section_work.title') }}
      </h2>

      <HResumeLayoutWorkEntry v-for="(work, i) of resume.work" :key="i" class="mt-8">
        <template #title>
          <h3 class="text-2xl font-bold text-accent">
            {{ work.position }}
          </h3>
          <div v-if="work.company" class="mt-2 flex flex-wrap gap-2">
            <ZTag class="bg-secondary-100 text-xs" :icon="ClarityBriefcaseLine" :label="work.company" :link="work.url" />
            <ZTag class="bg-secondary-100 text-xs" :icon="ClarityContractLine" :label="work.contractType" />
            <ZTag class="bg-secondary-100 text-xs" :icon="ClarityMapMarkerLine" :label="work.location" />
          </div>
        </template>

        <template #dates>
          <div class="flex items-baseline font-bold leading-8">
            <span class="mr-8">{{ work.startDate }}</span>
            <span>{{ work.endDate }}</span>
          </div>
        </template>

        <template v-if="work.company" #logo>
          <img class="my-4 max-w-32 md:my-0" :src="work.image" :alt="`Logo ${work.company}`" />
        </template>

        <template #summary>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="prose prose-base md:prose-sm print:prose-xs prose-li:list-[square] prose-li:marker:text-accent prose-li:[&_li]:list-['-']" v-html="work.summary"></div>
        </template>
      </HResumeLayoutWorkEntry>
    </section>

    <section class="mt-12">
      <h2 class="text-4xl font-bold md:text-6xl print:text-6xl">
        {{ $t('app.page_resume.section_skills.title') }}
      </h2>

      <ul class="mt-8 max-w-4xl space-y-4">
        <li v-for="(skillThematic, i) of resume.skills" :key="i" class="break-inside-avoid">
          <div class="text-base font-semibold">
            {{ skillThematic.name }}
          </div>
          <ul class="mt-2 flex flex-wrap gap-2 text-sm">
            <li v-for="(skill, j) of skillThematic.keywords" :key="`skill-${i}-${j}`">
              <ZTag :label="skill" class="bg-secondary-100 text-xs" />
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="mt-12 break-before-page">
      <h2 class="text-4xl font-bold md:text-6xl print:text-6xl">
        {{ $t('app.page_resume.section_school.title') }}
      </h2>

      <HResumeLayoutEducationEntry v-for="(education, i) of resume.education" :key="i" class="mt-8">
        <template #title>
          <h3 class="text-2xl font-bold text-accent">
            {{ education.studyType }}
          </h3>
        </template>
        <template #dates>
          <div class="text-2xl">
            {{ education.startDate ? `${education.startDate} / ${education.endDate}` : education.endDate }}
          </div>
        </template>
        <template #school>
          <a v-if="education.url" class="text-2xl" :href="education.url" target="_blank">{{ education.institution }}</a>
          <p v-else class="text-2xl">
            {{ education.institution }}
          </p>
        </template>
        <template #summary>
          <div class="prose mt-4 text-base">
            {{ education.area }}
          </div>
        </template>
      </HResumeLayoutEducationEntry>
    </section>

    <section class="mt-12">
      <h2 class="text-4xl font-bold md:text-6xl print:text-6xl">
        {{ $t('app.page_resume.section_interests.title') }}
      </h2>

      <div class="mt-8 md:grid md:grid-cols-3 print:grid print:grid-cols-3">
        <p class="prose col-span-2 col-start-2 text-base">
          {{ resume.interests }}
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
a:hover:not(.-no-hover) {
  @apply text-primary;
}
</style>
