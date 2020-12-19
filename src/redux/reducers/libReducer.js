import * as TYPES from "../types/lib";

function libReducer(state = [], action) {
  switch (action.type) {
    case TYPES.GET_LIBS:
      return action.payload;
    case TYPES.SORT_LIBS:
      return action.payload;
    default:
      return state;
  }
}

export default libReducer;
