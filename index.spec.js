import { expect, test } from 'vitest'

test('first verse', () => {
  const result = new Bottles().verse(99)
  expect(result).toBe('99 bottles of beer on the wall, 99 bottles of beer\nTake one down and pass it around, 98 bottles of beer on the wall\n\n')
})