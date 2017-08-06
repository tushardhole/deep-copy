import cloneValue from "../main";

const copyArray = srcArr => {
  const targetArray = [];
  srcArr.forEach(element => {
    targetArray.push(cloneValue(element));
  });
  return targetArray;
};

export default copyArray;
