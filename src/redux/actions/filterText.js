import * as TYPES from "../types/filterText";

export const filterLibs = (arr) => ({
  type: TYPES.FILTER_LIBS,
  payload: arr,
});
