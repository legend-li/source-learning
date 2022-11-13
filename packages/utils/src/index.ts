// 获取一个变量的类型
export const getType = (val: any) => {
  return Object.prototype.toString.call(val).slice(8, -1)
}

// 判断一个变量是不是一个对象
export const isObject = (val: any) => {
  return getType(val) === 'Object'
}

// 判断一个key是否是事件绑定key
export const isOn = (key: string) => {
  return /^on[^a-z]/.test(key)
}
