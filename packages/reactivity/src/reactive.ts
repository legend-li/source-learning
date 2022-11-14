import { convert } from './utils'
import { track, trigger } from './effect'

const reactiveMap = new WeakMap()
// const shallowReactiveMap = new WeakMap()

export const reactive: any = (obj: any) => {
  if (!(typeof obj === 'object' && obj !== null)) {
    console.warn(`reactive  ${obj} 必须是一个对象`)
    return obj
  }
  const existingProxy = reactiveMap.get(obj)
  if (existingProxy) {
    return existingProxy
  }
  else {
    const proxy = new Proxy(obj, {
      get(target, key) {
        track(target, 'get', key)
        return convert(target[key])
      },
      set(target, key, value) {
        target[key] = value
        trigger(target, 'set', key)
        return true
      },
    })
    reactiveMap.set(obj, proxy)
    return proxy
  }
}
