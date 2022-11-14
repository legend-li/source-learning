import { describe, expect, it } from 'vitest'
import { effect } from '../src/effect'
import { ref } from '../src/ref'

describe('响应式', () => {
  it('ref基本功能', () => {
    const obj = ref(1)
    let val
    effect(() => {
      val = obj.value
    })
    expect(val).toBe(1)

    obj.value++
    expect(val).toBe(2)
  })
  it('ref支持复杂数据类型', () => {
    const obj = ref({ count: 1 })
    let val
    effect(() => {
      val = obj.value.count
    })
    expect(val).toBe(1)

    obj.value.count++
    expect(val).toBe(2)
  })
  it('ref支持设置复杂数据类型', () => {
    const obj = ref(null)
    let name
    obj.value = { name: '混沌传奇' }
    effect(() => {
      name = obj.value.name
    })
    expect(name).toBe('混沌传奇')

    obj.value.name = 'hundunchuanqi'
    expect(name).toBe('hundunchuanqi')
  })
})

