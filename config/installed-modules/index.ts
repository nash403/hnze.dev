import type { NuxtConfig } from 'nuxt/schema'
import { colorModeModule } from '../installed-modules/color-mode'
import { i18nModule } from '../installed-modules/i18n'
import { iconsModule } from '../installed-modules/icons'
import { siteModuleConfig } from '../installed-modules/seo'
import { tailwindcssModule } from '../installed-modules/tailwindcss'

export const modulesDeclarations = [
  i18nModule,
  '@nuxtseo/module',
  tailwindcssModule,
  colorModeModule,
  iconsModule,
] satisfies NuxtConfig['modules']

export const modulesConfigurations = {
  ...siteModuleConfig,
}
