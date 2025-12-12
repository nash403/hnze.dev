export const isNuxtApp = import.meta.server || (import.meta.client && Boolean(window.__NUXT__))

/**
 * Checks if a value is enabled by comparing against common truthy representations
 * @param value - The value to check (typically from environment variables)
 * @returns true if the value matches common truthy representations (1, true, '1', 'true')
 */
export function isEnabled(value: unknown): boolean {
  return [1, true, '1', 'true'].includes(value as any)
}
