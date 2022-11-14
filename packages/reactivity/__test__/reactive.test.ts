import { describe, expect, it } from 'vitest'
import { effect } from '../src/effect'
import { reactive } from '../src/reactive'

describe('响应式', () => {
  it('reactive基本功能', () => {
    const obj = reactive({ count: 1 })
    let val
    effect(() => {
      val = obj.count
    })
    expect(val).toBe(1)

    obj.count++
    expect(val).toBe(2)
  })
  it('reactive只接收复杂数据类型', () => {
    expect(reactive(1)).toBe(1)
  })
  it('reactive支持嵌套', () => {
    const obj = reactive({ count: 1, info: { name: '混沌传奇' } })
    let val
    effect(() => {
      val = obj.info.name
    })
    expect(val).toBe('混沌传奇')

    obj.info.name = 'hundunchuanqi'
    expect(val).toBe('hundunchuanqi')
  })
})
