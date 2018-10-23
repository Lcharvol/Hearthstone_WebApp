import { combineReducers } from 'redux';

import app from './app';
import cards from './cards';
import user from './user';

const reducer = combineReducers({
  app,
  cards,
  user,
});

export default reducer;
