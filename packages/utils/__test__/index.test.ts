import { describe, expect, it } from 'vitest'
import { getType, isObject, isOn } from '../src/index'

describe('utils测试', () => {
  it('isOn test:', () => {
    expect(isOn('onClose')).toBe(true)
    expect(isOn('class')).toBe(false)
  })
  it('isObject test:', () => {
    const obj = { name: 'study' }
    expect(isObject(obj)).toBe(true)
    expect(typeof null).toBe('object')
    expect(isObject(null)).toBe(false)
    expect(typeof []).toBe('object')
    expect(isObject([])).toBe(false)
  })
  it('getType test:', () => {
    const arr = [{ name: 'study' }]
    expect(getType(arr)).toBe('Array')
    expect(getType(undefined)).toBe('Undefined')
    expect(getType(null)).toBe('Null')
    expect(getType('')).toBe('String')
    expect(getType(1)).toBe('Number')
    expect(getType(false)).toBe('Boolean')
  })
})
