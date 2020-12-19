import { combineReducers } from "redux";
import libReducer from "./libReducer";
import filterTextReducer from "./filterTextReducer";

const rootReducer = combineReducers({
  libs: libReducer,
  filterText: filterTextReducer,
});

export default rootReducer;
