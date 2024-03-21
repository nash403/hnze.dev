import type { ModuleDeclaration, ModuleDeclarationOptions } from '../../types'

const moduleConfig: ModuleDeclarationOptions<'i18n'> = {
  vueI18n: './config/installed-modules/i18n/i18n.config.ts', // relative to /<rootDir>

  types: 'composition',

  lazy: true,
  langDir: './locales', // relative to /<srcDir>
  locales: [
    { code: 'fr-FR', iso: 'fr-FR', file: 'fr-FR.json5', name: 'English' },
    { code: 'en-US', iso: 'en-US', file: 'en-US.json5', name: 'Français' },
  ],
}

export const i18nModule: ModuleDeclaration<'i18n'> = ['@nuxtjs/i18n', moduleConfig]
