import cloneValue from "./main";

Object.prototype.depthCopy = src => {
  return cloneValue(src);
};
