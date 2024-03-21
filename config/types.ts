import type { ModuleOptions, NuxtConfig } from 'nuxt/schema'

type ModuleOptionKeyOrValue = keyof NuxtConfig | Partial<ModuleOptions>

export type ModuleDeclarationOptions<K extends ModuleOptionKeyOrValue> = NonNullable<(K extends keyof NuxtConfig
  ? NuxtConfig[K]
  : K
)>

export type ModuleDeclaration<K extends ModuleOptionKeyOrValue> = (
  string |
  [
    string,
    ModuleDeclarationOptions<K>
  ]
)
