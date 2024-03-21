import type { ModuleDeclaration, ModuleDeclarationOptions } from '../types'

const moduleConfig: ModuleDeclarationOptions<'tailwindcss'> = {
  configPath: '~~/tailwind.config',
}

export const tailwindcssModule: ModuleDeclaration<'tailwindcss'> = ['@nuxtjs/tailwindcss', moduleConfig]
