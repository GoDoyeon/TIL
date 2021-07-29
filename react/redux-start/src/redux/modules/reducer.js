import { combineReducers } from 'redux';
import filter from './filter';
import todos from './todos';
import users from './users';

const reducer = combineReducers({
  todos,
  filter,
  users,
});

export default reducer;
