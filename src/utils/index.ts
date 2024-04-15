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

export function caesarCode (encodedText: string, shift: number): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const decodedTextArray = encodedText.split('').map((char) => {
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase()
      const index = alphabet.indexOf(char.toLowerCase())
      let newIndex = (index - shift) % 26
      if (newIndex < 0) { newIndex += 26 } // Handle negative indices
      const newChar = isUpperCase ? alphabet[newIndex].toUpperCase() : alphabet[newIndex]
      return newChar
    }
    return char
  })
  return decodedTextArray.join('')
}
