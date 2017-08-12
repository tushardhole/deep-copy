import copyObject from "./components/objectCopy";
import copyArray from "./components/arrayCopy";
import copyNumber from "./components/numberCopy";
import copyBoolean from "./components/booleanCopy";
import copyString from "./components/stringCopy";
import copyDate from "./components/dateCopy";
import copyCollection from "./components/collectionCopy";

const cloneValue = value => {
  switch (value.constructor) {
    case Array:
      return copyArray(value);
    case Number:
      return copyNumber(value);
    case Boolean:
      return copyBoolean(value);
    case String:
      return copyString(value);
    case Date:
      return copyDate(value);
    case Set:
      return copyCollection(value, Set);
    case Map:
      return copyCollection(value, Map);
    case Object:
      return copyObject(value);
    default:
      return value;
  }
};

export default cloneValue;
