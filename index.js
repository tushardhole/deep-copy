function cloneValue(value) {
  if (value instanceof Array) {
    return copyArray(value)
  } else if (value instanceof Object) {
    return copyObject(value);
  } else {
    return value
  }
}
const copyObject = (src) => {
  const dest = {};
  Object.keys(src).forEach(key => {
    dest[key] = cloneValue(src[key]);
  });
  return dest
};

const copyArray = srcArr => {
  const targetArray = [];
  srcArr.forEach(element => {
    targetArray.push(cloneValue(element));
  });
  return targetArray
};

Object.prototype.depthCopy = src => {
  return copyObject(src);
};