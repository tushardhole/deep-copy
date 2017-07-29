const copyBoolean = (src) => {
  return new Boolean(JSON.parse(src.toString()));
};

export default copyBoolean;