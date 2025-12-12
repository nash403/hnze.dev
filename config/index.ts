import { DEFAULT_THEME } from './constants'
import { isEnabled } from '../app/utils'

export function defineRuntimeOptions() {
  const caName = ['localhost', '0.0.0.0'].includes(process.env.HOST as string)
    ? 'rootCA'
    : process.env.HOST

  const https = process.env.WEBAPP_LOCAL_USE_SSL
    ? {
        key: process.env.CAROOT + `/${`${caName}-key`}.pem`,
        cert: process.env.CAROOT + `/${`${caName}`}.pem`,
      }
    : undefined

  return {
    enableDebugMode: isEnabled(process.env.DEBUG),
    https,
    defaultColorMode: process.env.DEFAULT_COLOR_MODE || DEFAULT_THEME,
  }
}
