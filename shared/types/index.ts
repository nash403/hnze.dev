import type { SUPPORTED_THEMES } from '../../config/constants'

export type ColorTheme = typeof SUPPORTED_THEMES[number]
export type IconifyIconName = `${string}:${string}`

type FigureOneToNine = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type FigureZeroToNine = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
/**
 * Years
 */
type YYYY = `19${FigureZeroToNine}${FigureZeroToNine}` | `20${FigureZeroToNine}${FigureZeroToNine}`
/**
 * Months
 */
type MM = `0${FigureOneToNine}` | `1${0 | 1 | 2}`
/**
 * Days
 */
type DD = `${0}${FigureOneToNine}` | `${1 | 2}${FigureZeroToNine}` | `3${0 | 1}`
/**
 * YYYYMMDD
 */
export type DateStringDashed = `${YYYY}-${MM}-${DD}`

export type ExternalURL = `http${'s' | ''}://${string}`
