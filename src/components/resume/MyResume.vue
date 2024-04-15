<script setup lang="ts">
import ClarityEmailLine from '~icons/clarity/email-line'

import BxlGithub from '~icons/bxl/github'
import BxlLinkedinSquare from '~icons/bxl/linkedin-square'

import ClarityLinkLine from '~icons/clarity/link-line'
import ClarityMapMarkerLine from '~icons/clarity/map-marker-line'
import ClarityBriefcaseLine from '~icons/clarity/briefcase-line'
import ClarityContractLine from '~icons/clarity/contract-line'

const resume = useResume()
const localePath = useLocalePath()
</script>

<template>
  <div class="hnze-cv p-4 md:p-16 print:p-8">
    <section class="min-[896px]:grid min-[896px]:grid-cols-3 min-[896px]:gap-5 print:grid print:h-screen print:grid-cols-3 print:gap-5">
      <h1 class="min-[896px]:col-span-3 min-[896px]:grid min-[896px]:grid-cols-subgrid print:col-span-3 print:grid print:grid-cols-subgrid">
        <div class="max-w-72 text-6xl font-bold">
          <NuxtLink :to="localePath('index')">
            {{ resume.name }}
          </NuxtLink>
        </div>
        <div class="col-span-2 max-w-40 text-4xl print:max-w-44 print:pl-3">
          {{ resume.jobTitle }}
        </div>
      </h1>

      <div class="col-span-3 flex flex-col place-items-center">
        <NuxtImg
          v-if="resume.pictureUrl"
          :src="resume.pictureUrl"
          :alt="`Photo de profil de ${resume.name}`"
          width="128"
          height="128"
          class="m-8 rounded-[50%]"
          quality="90"
          format="webp,auto"
          :modifiers="{ extract: '770_15_900_900' }"
        />
        <p class="prose prose-base">
          {{ resume.summary }}
        </p>

        <div class="prose prose-base mt-8 w-full md:grid md:grid-cols-2 print:grid print:grid-cols-2">
          <div>
            <div class="flex items-center">
              <ClarityEmailLine class="mr-2" />
              <a :href="`mailto:${resume.email}`">{{ resume.email }}</a>
            </div>
            <div class="flex items-center py-1 text-xl">
              <a :href="resume.socialProfiles?.linkedin?.url" class="mr-2">
                <BxlLinkedinSquare />
              </a>
              <a :href="resume.socialProfiles?.github.url" class="mr-2">
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
        Expériences
      </h2>

      <HResumeLayoutWorkEntry v-for="(work, i) of resume.work" :key="i" class="mt-8">
        <template #title>
          <h3 class="text-2xl font-bold text-[#3a2618]">
            {{ work.position }}
          </h3>
          <div v-if="work.company" class="mt-2 flex flex-wrap gap-2">
            <ZTag :icon="ClarityBriefcaseLine" :label="work.company" :link="work.url" />
            <ZTag :icon="ClarityContractLine" :label="work.contractType" />
            <ZTag :icon="ClarityMapMarkerLine" :label="work.location" />
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
          <div class="print:prose-xs prose prose-base md:prose-sm prose-li:list-[square] prose-li:marker:text-[#3a2618] prose-li:[&_li]:list-['-']" v-html="work.summary"></div>
        </template>
      </HResumeLayoutWorkEntry>
    </section>

    <section class="mt-12">
      <h2 class="text-4xl font-bold md:text-6xl print:text-6xl">
        Compétences
      </h2>

      <ul class="mt-8 space-y-4">
        <li v-for="(skillThematic, i) of resume.skills" :key="i" class="break-inside-avoid">
          <div class="text-base font-semibold">
            {{ skillThematic.name }}
          </div>
          <ul class="mt-2 flex flex-wrap gap-2 text-sm">
            <li v-for="(skill, j) of skillThematic.keywords" :key="`skill-${i}-${j}`">
              <ZTag :label="skill" />
            </li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="mt-12 break-before-page">
      <h2 class="text-4xl font-bold md:text-6xl print:text-6xl">
        Études
      </h2>

      <HResumeLayoutEducationEntry v-for="(education, i) of resume.education" :key="i" class="mt-8">
        <template #title>
          <h3 class="text-2xl font-bold text-[#3a2618]">
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
        Loisirs
      </h2>

      <div class="mt-8 md:grid md:grid-cols-3 print:grid print:grid-cols-3">
        <p class="prose col-span-2 col-start-2 text-base">
          {{ resume.interests }}
        </p>
      </div>
    </section>
  </div>
</template>
