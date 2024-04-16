import MarkdownIt from 'markdown-it'
import type { LinkExternalURL } from '~/types'

let _md: MarkdownIt | null = null

const initMd = () => {
  if (!_md) { _md = new MarkdownIt() }
  return _md
}

type SocialProfile = {
  username?: string
  url: LinkExternalURL
}
const socialNetworks = ['github', 'linkedin'] as const
type SocialNetworks = typeof socialNetworks[number]

type Resume = Record<string, any> & {
  settings?: {
    caesarCodeShift?: number
  },
  basics: {
    name?: string
    firstName?: string
    lastName?: string
    middleName?: string
    email?: string
    jobTitle?: string
    pictureUrl?: string
    phoneNumber?: string
    phoneNumberFormatted?: string
    url?: LinkExternalURL
    urlText?: string
    summary?: string
    mainLocation?: {
      streetAddress?: string
      city?: string
      postalCode?: string
      countryName?: string
      regionName?: string
      mapsUrl?: string
    }
    socialProfiles?: {
      [social in SocialNetworks]: SocialProfile
    }
  },
  work: Array<any>, // TODO: better type
  skills: Array<any>,
  languages: Array<any>,
  education: Array<any>,
  volunteering: Array<any>,
  interests: Array<any>,
}

const resumeStub: Resume = {
  basics: {
    name: 'Honoré Nintunze',
    jobTitle: 'Full-Stack Web Developer',
  },
  work: [],
  skills: [],
  languages: [],
  education: [],
  volunteering: [],
  interests: [],
}

const loadResume = async (locale?: string): Promise<Resume> => await import(`../assets/resume/resume-${locale}.json`).catch((err) => {
  console.error(`could not import resume object for lan ${locale}`, err)
  return resumeStub
})

const useLocaleResumeDefinition = async (): Promise<Ref<Resume>> => {
  const { localeProperties } = useI18n()
  const resume = ref(await loadResume(localeProperties.value.iso))
  watch(localeProperties, async (locale) => {
    resume.value = await loadResume(locale.iso)
  })

  return resume
}

export async function useResume () {
  const md = initMd()
  const { t } = useI18n()
  const resume = await useLocaleResumeDefinition()

  return computed(() => ({
    ...resume.value.basics,
    ...(resume.value.settings?.caesarCodeShift
      ? {
          email: caesarCode(resume.value.basics.email!, -resume.value.settings.caesarCodeShift),
          phoneNumber: caesarCode(resume.value.basics.phoneNumber!, -resume.value.settings.caesarCodeShift),
          phoneNumberFormatted: caesarCode(resume.value.basics.phoneNumberFormatted!, -resume.value.settings.caesarCodeShift),
        }
      : {}),
    work: [
      ...resume.value.work.map(work => ({
        ...work,
        startDate: (work.startDate as string).slice(0, -3),
        endDate: (work.endDate as string).slice(0, -3),
        image: `/img/companies/${work.logoName}.${work.logoExtension}`,
        summary: md.render(work.summary),
      })),
    ],
    skills: resume.value.skills
      .concat({
        name: t('app.page_resume.section_skills.languages_spoken'),
        level: '',
        keywords: resume.value.languages.map(lang => `${lang.language} (${lang.fluency})`),
      }),
    education: resume.value.education,
    interests: resume.value.interests.map(({ name }) => name).join(', ') + '.',
  }))
}
