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

export function caesarCode (text: string, shift: number): string {
  if (!shift) { return text }
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz'
  const decodedTextArray = text.split('').map((char) => {
    if (char.match(/[a-z0-9]/i)) {
      const isUpperCase = !Number(char) && char === char.toUpperCase()
      const index = alphabet.indexOf(char.toLowerCase())
      let newIndex = (index - shift) % alphabet.length
      if (newIndex < 0) { newIndex += alphabet.length }
      const newChar = isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex]
      return newChar
    }
    return char
  })
  return decodedTextArray.join('')
}
