import { combineReducers } from 'redux';
import users from './UsersReducer';

const reducer = combineReducers({
  users
})

export default reducer;
