import { combineReducers } from 'redux';
import recipes from './recipes';

export const rootReducer = combineReducers({
  recipes,
});
