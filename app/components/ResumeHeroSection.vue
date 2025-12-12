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
  kbdHelp: 'ctrl/cmd+P',
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
    secondGroupLinks.push({ links: props.socialLinks })
  }

  return [firstGroupLinks, secondGroupLinks]
})

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
const toggleLocale = computed(() => locales.value.filter(l => l.code !== locale.value)[0])

const print = () => window?.print?.()
const switchLocale = () => {
  if (toggleLocale.value) {
    router.replace(switchLocalePath(toggleLocale.value.code))
  }
}
</script>

<template>
  <section
    class="flex print:break-after-page"
  >
    <!-- eslint-disable vue/no-v-html -->
    <h1 class="not-prose h-resume-hero-title flex shrink-0 flex-col items-start gap-4 sm:grid sm:grid-cols-[min-content_1fr_minmax(100px,max-content)] sm:gap-6">
      <div
        class="h-resume-hero-title-name w-min text-4xl font-bold sm:text-5xl md:text-6xl"
        v-html="fullName"
      >
      </div>
      <div
        class="h-resume-hero-title-job w-min text-xl sm:text-2xl md:text-4xl"
        v-html="jobTitle"
      >
      </div>
      <div class="h-resume-hero-title-actions flex w-max max-w-full flex-wrap items-center gap-4 self-start justify-self-end sm:flex-col sm:items-end sm:justify-end print:hidden">
        <NuxtLinkLocale
          to="index"
          class="btn btn-sm btn-secondary"
        >
          <Icon name="mingcute:back-2-line" />
          {{ $t('i18n.resume_hero_section.actions.exit.text') }}
        </NuxtLinkLocale>
        <button
          type="button"
          class="btn btn-sm btn-neutral"
          @click="print()"
        >
          <Icon name="mingcute:arrow-to-down-line" />
          {{ $t('i18n.resume_hero_section.actions.print.text') }}
        </button>
        <button
          type="button"
          class="btn btn-outline btn-sm btn-accent"
          @click="switchLocale"
        >
          <Icon name="mingcute:refresh-3-line" />
          <i18n-t
            scope="global"
            keypath="i18n.shared.switch_to_locale"
            tag="span"
          >
            <template #locale>
              {{ toggleLocale?.code?.toUpperCase() }}
              <Icon :name="toggleLocale?.icon as IconifyIconName" />
            </template>
          </i18n-t>
        </button>

        <I18nInterpolated
          tag="span"
          class="hidden text-end text-sm not-[@media_all_and_(hover:none)]:inline dark:text-base-content-600 light:text-base-content-900"
          keypath="i18n.resume_hero_section.actions.kbd_hint.text"
          :interpolations="[kbdHelp]"
          interpolations-class-name="kbd kbd-sm"
        />
      </div>
    </h1>

    <div class="flex flex-1 flex-col items-center justify-center gap-8 text-center">
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

      <p class="h-resume-hero-intro prose px-8 text-balance md:p-0">
        <slot
          name="intro"
          mdc-unwrap="p"
        ></slot>
      </p>

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
            <template v-if="'links' in socialLink">
              <NuxtLink
                v-for="(iconOnlySocialLink, k) in socialLink.links"
                :key="`${i}-social-links-group-item-grouped-${j}-link-${k}`"
                :to="iconOnlySocialLink.href"
                :target="iconOnlySocialLink.openInNewTab ? '_blank' : '_self'"
              >
                <Icon
                  :name="iconOnlySocialLink.icon!"
                  mode="svg"
                />
              </NuxtLink>
            </template>

            <template v-else>
              <Icon
                v-if="socialLink.icon"
                :name="socialLink.icon"
                mode="svg"
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
