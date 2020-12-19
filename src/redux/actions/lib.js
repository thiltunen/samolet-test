import * as TYPES from "../types/lib";

export const getLibs = (arr) => ({
  type: TYPES.GET_LIBS,
  payload: arr,
});

export const sortLibs = (arr) => ({
  type: TYPES.SORT_LIBS,
  payload: arr,
});

export const getLibsThunk = () => async (dispatch, getState) => {
  const response = await fetch(
    "opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json"
  );
  const result = await response.json();
  result.sort((a, b) => b.libraries - a.libraries);

  dispatch(getLibs(result));
};
