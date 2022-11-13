import { isObject } from '@hdcq/utils'

export const reactive = (obj) => {
  return new Proxy(obj, {
    get(target, property) {
      return convert(target[property])
    },
    set(target, property, value) {
      target[property] = value
    },
  })
}

function convert(val) {
  return isObject(val) ? reactive(val) : val
}
