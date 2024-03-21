import type { Options } from 'unplugin-icons'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import type { ModuleDeclaration, ModuleDeclarationOptions } from '../types'

const moduleConfig: ModuleDeclarationOptions<Options> = {
  autoInstall: true,
  customCollections: {
    hnze: FileSystemIconLoader('./src/assets/icons'),
  },
}

export const iconsModule: ModuleDeclaration<Options> = ['unplugin-icons/nuxt', moduleConfig]
