import { convert } from './utils'
import { track, trigger } from './effect'

class RefImpl {
  isRef: Boolean
  _val: any
  constructor(val: any) {
    this.isRef = true
    this._val = convert(val)
  }

  get value() {
    track(this, 'ref-get', 'value')
    return this._val
  }

  set value(newVal) {
    if (newVal !== this._val)
      this._val = convert(newVal)

    trigger(this, 'ref-set', 'value')
  }
}

export const ref = (val: any) => {
  return new RefImpl(val)
}

