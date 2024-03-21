import type { ModuleDeclaration, ModuleDeclarationOptions } from '../types'

const moduleConfig: ModuleDeclarationOptions<'colorMode'> = {
  classSuffix: '',
}

export const colorModeModule: ModuleDeclaration<'colorMode'> = ['@nuxtjs/color-mode', moduleConfig]
