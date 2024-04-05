<script lang="ts" setup>
import { UseClipboard } from '@vueuse/components'
import HnzeLogo from '~icons/hnze/logo'
import IconEmail from '~icons/mingcute/mail-send-line'
import IconLinkedin from '~icons/mingcute/linkedin-line'
import IconGithub from '~icons/mingcute/github-line'
import IconGitLab from '~icons/mingcute/git-lab-line'
import IconInstagram from '~icons/mingcute/ins-line'
import IconX from '~icons/mingcute/social-x-line'
import IconDiscord from '~icons/mingcute/discord-line'

const { t } = useI18n()
const localePath = useLocalePath()

const footerSections = [
  {
    title: t('app.footer.menu.link_titles.general'),
    links: [
      {
        text: t('app.footer.menu.link_texts.home'),
        link: localePath('index'),
      },
      {
        text: t('app.footer.menu.link_texts.affiliation'),
        link: localePath('affiliate'),
      },
      {
        text: t('app.footer.menu.link_texts.uses'),
        link: localePath('uses'),
      },
    ],
  },
  {
    title: t('app.footer.menu.link_titles.content'),
    links: [
      {
        text: t('app.footer.menu.link_texts.about'),
        link: localePath('about'),
      },
      {
        text: t('app.footer.menu.link_texts.resume'),
        link: localePath('resume'),
      },
      {
        text: t('app.footer.menu.link_texts.references'),
        link: localePath({ name: 'hire-me', hash: '#references' }),
      },
    ],
  },
  {
    title: t('app.footer.menu.link_titles.contact'),
    links: [
      {
        text: t('app.footer.menu.link_texts.hire_me'),
        link: localePath('hire-me'),
      },
      {
        text: t('app.footer.menu.link_texts.lets_meet'),
        link: localePath('lets-meet'),
      },
    ],
  },
]

const email = 'hello@hnze.dev'
const discordHandle = 'nash403'
const footerSocialLinks = [
  {
    link: `mailto:${email}`,
    titleText: t('shared.social.links.email_me', [email]),
    icon: IconEmail,
  },
  {
    link: 'https://www.linkedin.com/in/nash403/',
    titleText: t('shared.social.links.follow_me', [t('shared.social.names.linkedin')]),
    icon: IconLinkedin,
  },
  {
    link: 'https://github.com/nash403',
    titleText: t('shared.social.links.follow_me', [t('shared.social.names.github')]),
    icon: IconGithub,
  },
  {
    link: 'https://gitlab.com/hnze',
    titleText: t('shared.social.links.follow_me', [t('shared.social.names.gitlab')]),
    icon: IconGitLab,
  },
  {
    link: 'https://www.instagram.com/nash403/',
    titleText: t('shared.social.links.follow_me', [t('shared.social.names.instagram')]),
    icon: IconInstagram,
  },
  {
    link: 'https://twitter.com/nash_403',
    titleText: t('shared.social.links.follow_me', [t('shared.social.names.x')]),
    icon: IconX,
  },
  {
    link: discordHandle,
    titleText: t(
      'shared.social.links.follow_me',
      [
        t('shared.social.names.discord', [discordHandle]),
      ],
    ),
    icon: IconDiscord,
    isCopyLinkAction: true,
  },
]
</script>

<template>
  <footer class="bg-gray-100 pt-16 md:pt-20 dark:bg-gray-900">
    <div class="mx-auto max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5">
      <nav class="grid grid-cols-2 gap-8 gap-y-10 py-10 text-gray-700 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-300">
        <div v-for="section of footerSections" :key="section.title" class="space-y-5">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {{ section.title }}
          </h4>
          <ul class="space-y-3">
            <li v-for="(link, i) of section.links" :key="`${i}-${link.link}`">
              <a :href="link.link" class="duration-200 hover:text-blue-600 dark:hover:text-blue-500">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <div class="col-span-2 space-y-5 md:col-span-3 lg:col-span-1">
          <HnzeLogo class="mx-auto size-52" />
        </div>
      </nav>

      <div class="flex w-full flex-col items-center justify-between gap-4 border-t border-gray-200 py-3 text-gray-700 md:flex-row md:flex-wrap dark:border-t-gray-800 dark:text-gray-300">
        <div class="flex text-center sm:min-w-max sm:text-left">
          <i18n-t keypath="app.footer.copyright" tag="p">
            <!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
            <template #copyrightDate>
              &copy; {{ (new Date()).getFullYear() }}
            </template>
            <template #cloneIt>
              <a href="https://github.com/nash403/hnze.dev" target="_blank">{{ t('app.footer.clone_website_link') }}</a>
            </template>
          </i18n-t>
        </div>

        <div class="flex justify-center gap-3">
          <template v-for="(social, i) of footerSocialLinks" :key="i">
            <UseClipboard v-if="social.isCopyLinkAction" v-slot="{ copy, copied }" :source="discordHandle">
              <button
                type="button"
                class="block"
                :class="{ 'animate-rubber-band cursor-default': copied, 'cursor-copy': !copied }"
                :aria-label="social.titleText"
                :title="social.titleText"
                @click="copy()"
              >
                <component :is="social.icon" />
              </button>
            </UseClipboard>
            <ZLink v-else :to="social.link" :aria-label="social.titleText" :title="social.titleText" target="_blank">
              <component :is="social.icon" />
            </ZLink>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
