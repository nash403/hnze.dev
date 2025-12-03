<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

interface BaseLink extends Record<any, any> {
  href: string | RouteLocationRaw
  openInNewTab?: boolean
  label?: string
  icon?: string
}

interface SocialLink extends BaseLink {
  type: 'linkedin' | 'github' | string
  icon: string
}

type ContactLinks = Array<BaseLink | { links: BaseLink[] }>

interface Props {
  kbdHelp?: string
  fullName: string
  jobTitle: string
  avatarUrl?: string
  avatarAlt?: string
  phones: string[]
  phonesIcon: string
  email: BaseLink
  location?: BaseLink
  socialLinks?: SocialLink[]
  websiteLinks?: BaseLink[]
}

const props = withDefaults(defineProps<Props>(), {
  kbdHelp: 'CTRL/CMD+P',
  avatarUrl: '/img/profile_picture.jpg',
  socialLinks: () => [],
  websiteLinks: () => [],
})

const contactLinksColumns = computed<[ContactLinks, ContactLinks]>(() => {
  const firstGroupLinks: ContactLinks = [
    props.email,
    ...props.phones.map(p => ({
      href: `tel:${p}`,
      label: p,
      icon: props.phonesIcon,
    })),
  ]
  const secondGroupLinks: ContactLinks = [...(props.websiteLinks || [])]

  if (props.location) {
    secondGroupLinks.unshift(props.location)
  }

  if (props.socialLinks && props.socialLinks?.length > 0) {
    firstGroupLinks.push({ links: props.socialLinks })
  }

  return [firstGroupLinks, secondGroupLinks]
})

const print = () => window?.print?.()
</script>

<template>
  <section
    class="flex print:break-after-page"
  >
    <!-- Hero: Nom + Titre -->
    <h1 class="not-prose h-resume-hero-title flex shrink-0 flex-col gap-4 sm:grid sm:grid-cols-[min-content_1fr_minmax(100px,max-content)] sm:items-center sm:gap-6">
      <div class="h-resume-hero-title-name w-min text-4xl font-bold sm:text-5xl md:text-6xl">
        <NuxtLinkLocale to="index">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="fullName"></span>
        </NuxtLinkLocale>
      </div>
      <div class="h-resume-hero-title-job w-min text-xl sm:text-2xl md:text-4xl">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-html="jobTitle"></span>
      </div>
      <div class="h-resume-hero-title-actions flex w-max max-w-full flex-wrap items-center gap-4 self-start justify-self-end sm:flex-col sm:items-end sm:justify-end print:hidden">
        <button
          type="button"
          class="btn btn-sm btn-secondary"
          @click="$router.back()"
        >
          <Icon name="mingcute:back-2-line" />
          {{ $t('i18n.resume_hero_section.actions.exit.text') }}
        </button>
        <button
          type="button"
          class="btn btn-sm btn-neutral"
          @click="print()"
        >
          <Icon name="mingcute:arrow-to-down-line" />
          {{ $t('i18n.resume_hero_section.actions.print.text') }}
        </button>
        <I18nInterpolated
          tag="span"
          class="text-end text-sm text-base-content-900"
          keypath="i18n.resume_hero_section.actions.kbd_hint.text"
          :interpolations="[kbdHelp]"
          interpolations-class-name="kbd kbd-sm"
        />
      </div>
    </h1>

    <!-- Photo + Intro + Links -->
    <div class="flex flex-1 flex-col items-center justify-center gap-8 text-center">
      <!-- Profile picture -->
      <NuxtImg
        v-if="avatarUrl"
        :src="avatarUrl"
        :alt="avatarAlt"
        class="h-resume-hero-img rounded-[50%]"
        width="120"
        height="120"
        quality="90"
        preload
      />

      <!-- Intro paragraph -->
      <p class="h-resume-hero-intro prose px-8 text-balance md:p-0">
        <slot
          name="intro"
          mdc-unwrap="p"
        ></slot>
      </p>

      <!-- Links -->
      <div class="h-resume-hero-links justify-center-items-center grid w-full max-w-xl grid-cols-1 gap-4 px-8 sm:grid-cols-[repeat(2,minmax(min-content,1fr))] md:gap-6 print:grid print:grid-cols-[repeat(2,minmax(min-content,1fr))]">
        <div
          v-for="(contactLinkItem, i) in contactLinksColumns"
          :key="`${i}-social-links-group`"
          class="flex w-max flex-col gap-x-2 gap-y-1.5"
        >
          <div
            v-for="(socialLink, j) in contactLinkItem"
            :key="`${i}-social-links-group-item-${j}`"
            class="flex items-center gap-2"
            :class="{ 'space-x-2 py-1 text-xl': 'links' in socialLink }"
          >
            <!-- Grouped social link with icon only -->
            <template v-if="'links' in socialLink">
              <template
                v-for="(iconOnlySocialLink, k) in socialLink.links"
                :key="`${i}-social-links-group-item-grouped-${j}-link-${k}`"
              >
                <NuxtLink
                  :to="iconOnlySocialLink.href"
                  :target="iconOnlySocialLink.openInNewTab ? '_blank' : '_self'"
                >
                  <Icon :name="iconOnlySocialLink.icon!" />
                </NuxtLink>
              </template>
            </template>

            <!-- Social link item with label -->
            <template v-else>
              <Icon
                v-if="socialLink.icon"
                :name="socialLink.icon"
              />
              <NuxtLink
                :to="socialLink.href"
                :target="socialLink.openInNewTab ? '_blank' : '_self'"
                class="h-link"
              >
                {{ socialLink.label }}
              </NuxtLink>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
