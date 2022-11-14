import { isObject } from '@hdcq/utils'
import { reactive } from './reactive'

export function convert(val: any) {
  return isObject(val) ? reactive(val) : val
}
