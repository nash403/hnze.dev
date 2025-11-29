export const SUPPORTED_THEMES = ['system', 'light', 'dark'] as const
export const DEFAULT_THEME: Exclude<typeof SUPPORTED_THEMES[number], 'system'> = 'light'
