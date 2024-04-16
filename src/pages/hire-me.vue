<script lang="ts" setup>
definePageMeta({
  title: 'app.page_hire_me.meta.title',
})

const contactFormFrameOpened = ref(false)
const testimonialFormFrameOpened = ref(false)
</script>

<template>
  <main class="mx-auto max-w-5xl">
    <ZCardGlow>
      <div class="prose prose-xl grid max-w-none p-8 px-4 prose-h2:mt-0 lg:min-h-[250px] lg:grid-cols-2 lg:p-16 lg:px-8 lg:py-12">
        <div class="flex h-full flex-col">
          <h2 class="">
            Travaillons ensemble
          </h2>
          <div>Je peux transformer votre idée d'app en réalité.</div>
          <div class="mt-4 text-base">
            <ZTag label="MVP" />
            <ZTag label="SAAS" />
            <ZTag label="Site Internet" />
            <ZTag label="Renfort d'équipe" />
          </div>
        </div>
      </div>
    </ZCardGlow>

    <section>
      pragraph intro contact me avec lien calendly
    </section>

    <section>
      <div class="mx-auto max-w-screen-sm">
        <p>Rejoignez la liste des clients qui m'ont fait confiance</p>
        <HLogoCloudWorkedFor class="text-7xl" />
      </div>
    </section>

    <section class="flex max-w-fullxl flex-col md:flex-row">
      <div class="max-w-[50%] md:h-screen md:grow">
        <h3 class="sticky top-24">
          Décrivez moi votre projet en détails
        </h3>
      </div>
      <div class="sticky top-24 flex-1">
        <div class="sticky top-24">
          <ZButton :label="contactFormFrameOpened ? 'Annuler' : 'J\'explique mon besoin'" @click="contactFormFrameOpened=!contactFormFrameOpened" />
          <iframe
            v-if="contactFormFrameOpened"
            class="airtable-embed"
            src="https://airtable.com/embed/appbtNgj9UtVa3glD/paglovnLNtz605E6N/form"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            style="background: transparent; border: 1px solid #ccc;"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="flex max-w-fullxl flex-col md:flex-row">
      <div class="sticky top-24 flex-1">
        <div class="sticky top-24">
          <ZButton :label="testimonialFormFrameOpened ? 'Annuler' : 'J\'écris un retour d\'XP sur Honoré'" @click="testimonialFormFrameOpened=!testimonialFormFrameOpened" />
          <iframe
            v-if="testimonialFormFrameOpened"
            class="airtable-embed"
            src="https://airtable.com/embed/appoxLPEkRqpdwcZx/pag7qloiDWr3kZ7Af/form"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="533"
            style="background: transparent; border: 1px solid #ccc;"
          ></iframe>
        </div>
      </div>
      <div class="max-w-[50%] md:h-screen md:grow">
        <h3 class="sticky top-24">
          Si nous avons déjà collaboré ensemble, <br /> Merci de prendre 2 minutes pour m'écrire un retour
        </h3>
      </div>
    </section>

    <!-- <section>
      TODO: fetch testimonials and display them
    </section> -->
  </main>
</template>
