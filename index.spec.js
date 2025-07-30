import { expect, test } from 'vitest'
import { Bottles } from './index'

test('first verse', () => {
  const result = new Bottles().verse(99)
  expect(result).toEqual('99 bottles of beer on the wall, 99 bottles of beer\nTake one down and pass it around, 98 bottles of beer on the wall\n\n')
})