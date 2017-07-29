import cloneValue from "../main";

const copyObject = (src) => {
  const dest = {};
  Object.keys(src).forEach(key => {
    dest[key] = cloneValue(src[key]);
  });
  return dest
};

export default copyObject;