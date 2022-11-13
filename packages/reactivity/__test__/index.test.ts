import { describe, expect, it } from 'vitest'
import { getType } from '../src/index'

describe('reactivity', () => {
  it('root', () => {
    expect(getType(false)).toBe('Boolean')
  })
})
