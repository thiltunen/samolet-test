import * as TYPES from "../types/lib";

export const getLibs = (obj) => ({
  type: TYPES.GET_LIBS,
  payload: obj,
});

export const getLibsThunk = () => async (dispatch, getState) => {
  const response = await fetch(
    "opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json"
  );
  const result = await response.json();

  dispatch(getLibs(result));
};
