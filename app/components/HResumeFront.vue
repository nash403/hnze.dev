<script lang="ts" setup>
defineProps({
  fullName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  avatarUrl: {
    type: String,
    default: '/img/profile_picture.jpg',
  },
})
</script>

<template>
  <section>
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
      <p class="prose prose-base px-8 md:p-0">
        <slot
          name="goal"
          mdc-unwrap="p"
        ></slot>
      </p>
    </div>
  </section>
  <!-- <section class="min-[896px]:grid min-[896px]:grid-cols-3 min-[896px]:gap-5 print:grid print:h-screen print:grid-cols-3 print:gap-5">
    <h1 class="min-[896px]:col-span-3 min-[896px]:grid min-[896px]:grid-cols-subgrid print:col-span-3 print:grid print:grid-cols-subgrid">
      <div class="max-w-72 text-6xl font-bold">
        <NuxtLink
          :to="localePath('index')"
          class="-no-hover"
        >
          {{ resume.name }}
        </NuxtLink>
      </div>
      <div class="col-span-2 max-w-40 text-4xl print:max-w-44 print:pl-3">
        {{ resume.jobTitle }}
      </div>
    </h1>

    <div class="col-span-3 flex flex-col place-items-center">
      <ZProfilePicture
        class="invisible m-8"
        size="180"
      />
      <p class="prose prose-base px-8 md:p-0">
        {{ resume.summary }}
      </p>

      <div class="prose prose-base mt-8 w-full md:grid md:grid-cols-2 print:grid print:grid-cols-2">
        <div>
          <div class="flex items-center">
            <ClarityEmailLine class="mr-2" />
            <a
              :href="`mailto:${resume.email}`"
              target="_blank"
            >{{ resume.email }}</a>
          </div>
          <div class="flex items-center">
            <ClarityPhoneHandsetLine class="mr-2" />
            <a
              :href="`tel:${resume.phoneNumber}`"
              target="_blank"
            >{{ resume.phoneNumberFormatted }}</a>
          </div>
          <div class="flex items-center space-x-2 py-1 text-xl">
            <a
              :href="resume.socialProfiles?.linkedin?.url"
              target="_blank"
            >
              <BxlLinkedinSquare />
            </a>
            <a
              :href="resume.socialProfiles?.github.url"
              target="_blank"
            >
              <BxlGithub />
            </a>
          </div>
        </div>

        <div>
          <div class="flex items-center">
            <ClarityMapMarkerLine class="mr-2" />
            <a
              :href="resume.mainLocation?.mapsUrl"
              target="_blank"
            >{{ `${resume.mainLocation?.city}, ${resume.mainLocation?.regionName},
                            ${resume.mainLocation?.countryName}` }}</a>
          </div>
          <div class="flex items-center">
            <ClarityLinkLine class="mr-2" />
            <a
              :href="resume.url"
              target="_blank"
            >{{ resume.urlText }}</a>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>

<style scoped></style>
