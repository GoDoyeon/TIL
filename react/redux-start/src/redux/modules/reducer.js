import { combineReducers } from 'redux';
import filter from './filter';
import todos from './todos';
import users from './users';
import { connectRouter } from 'connected-react-router';
import history from '../../history';

const reducer = combineReducers({
  todos,
  filter,
  users,
  router: connectRouter(history),
});

export default reducer;
