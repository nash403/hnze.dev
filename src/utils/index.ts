/**
 *
 * @param date a JS Date object
 * @returns an array of [year, month, day, hour, minute, second, millisecond]
 */
export const extractFromDate = (date: Date): string[] =>
  date
    .toISOString()
    .split(/[^0-9]/)
    .slice(0, -1)
