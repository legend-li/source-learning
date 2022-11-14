// 数据结构示例：
// targetMap: {
//   target1: depsMap,
//   target2: depsMap,
// }
// depsMap: {
//   key1: deps,
//   key2: deps,
// }
// deps: new Set([effect1, effect2, ...])
let activeEffect: null | Function = null
const targetMap = new WeakMap()

export const track = (target: any, type: string, key: any) => {
  if (!activeEffect)
    return
  console.log('track type:', type)
  let depsMap = targetMap.get(target)
  if (!depsMap)
    targetMap.set(target, depsMap = new Map())

  let deps = depsMap.get(key)
  if (!deps)
    depsMap.set(key, deps = new Set())

  deps.add(activeEffect)
}

export const trigger = (target: any, type: string, key: any) => {
  const depsMap = targetMap.get(target)
  if (!depsMap)
    return
  console.log('trigger type:', type)
  const deps = depsMap.get(key)
  if (deps)
    deps.forEach((effect: Function) => effect())
}

export const effect = (fn: Function) => {
  activeEffect = fn
  fn()
  activeEffect = null
}
