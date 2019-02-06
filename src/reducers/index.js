import { combineReducers } from 'redux';

import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { isLogged } from './isLogged.reducer';
const rootReducer = combineReducers({
  users,
  isLogged,
  alert
});

export default rootReducer;

