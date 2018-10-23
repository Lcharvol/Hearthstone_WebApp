import { combineReducers } from 'redux';

import app from './app';
import cards from './cards';

const reducer = combineReducers({
  app,
  cards,
});

export default reducer;
