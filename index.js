const doDeepCopy = (src) => {
  const dest = {};
  Object.keys(src).forEach(key => {
    if (typeof src[key] === 'object') {
      dest[key] = doDeepCopy(src[key]);
    } else {
      dest[key] = src[key]
    }
  });
  return dest
};

Object.prototype.deepCopy = src => {
  return doDeepCopy(src);
};