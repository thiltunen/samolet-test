import { combineReducers } from 'redux';
import libReducer from './libReducer';

const rootReducer = combineReducers({
  libs: libReducer,
});

export default rootReducer;
