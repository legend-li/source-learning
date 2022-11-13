const getType = (val) => {
  return Object.prototype.toString.call(val).slice(8, -1);
};
const isObject = (val) => {
  return getType(val) === "Object";
};
const isOn = (key) => {
  return /^on[^a-z]/.test(key);
};

export { getType, isObject, isOn };
