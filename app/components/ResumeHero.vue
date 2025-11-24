<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

interface BaseLink {
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
  fullName: string
  jobTitle: string
  avatarUrl?: string
  phones: string[]
  phonesIcon: string
  email: BaseLink
  location?: BaseLink
  socialLinks?: SocialLink[]
  websiteLinks?: BaseLink[]
}

const props = withDefaults(defineProps<Props>(), {
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
</script>

<template>
  <section>
    <!-- Resume header title with full name & position -->
    <h1>
      <div class="max-w-72 text-6xl font-bold">
        <NuxtLink
          :to="$localePath('index')"
          class="-no-hover"
        >
          {{ fullName }}
        </NuxtLink>
      </div>
      <div class="col-span-2 max-w-40 text-4xl print:max-w-44 print:pl-3">
        {{ jobTitle }}
      </div>
    </h1>

    <div class="col-span-3 flex flex-col place-items-center">
      <!-- Profile picture -->
      <NuxtImg
        v-if="avatarUrl"
        :src="avatarUrl"
        alt="Photo portrait de Honoré Nintunze"
        class="rounded-[50%]"
        width="200"
        height="200"
        quality="90"
        format="webp,auto"
        :modifiers="{ extract: '770_15_900_900' }"
      />

      <!-- Goal / Summary -->
      <p class="prose prose-base px-8 md:p-0">
        <slot
          name="goal"
          mdc-unwrap="p"
        ></slot>
      </p>

      <!-- Social links -->
      <div class="prose prose-base mt-8 w-full md:grid md:grid-cols-2 print:grid print:grid-cols-2">
        <div
          v-for="(contactLinkItem, i) in contactLinksColumns"
          :key="`${i}-social-links-group`"
        >
          <div
            v-for="(socialLink, j) in contactLinkItem"
            :key="`${i}-social-links-group-item-${j}`"
            class="flex items-center"
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
                class="mr-2"
              />
              <NuxtLink
                :to="socialLink.href"
                :target="socialLink.openInNewTab ? '_blank' : '_self'"
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
