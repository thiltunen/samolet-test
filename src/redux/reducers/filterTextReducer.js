import * as TYPES from "../types/filterText";

function filterTextReducer(state = "", action) {
  switch (action.type) {
    case TYPES.FILTER_LIBS:
      return action.payload;
    default:
      return state;
  }
}

export default filterTextReducer;
