import type { NuxtConfig } from 'nuxt/config'
import { baseNuxtConfig } from './base'
import { runtimeConfig } from './runtime'
import { modulesDeclarations, modulesConfigurations } from './installed-modules'

export function defineProjectNuxtConfig (): NuxtConfig {
  // https://nuxt.com/docs/api/configuration/nuxt-config
  return {
    ...baseNuxtConfig,

    modules: modulesDeclarations,

    ...modulesConfigurations,

    runtimeConfig,
  }
}
