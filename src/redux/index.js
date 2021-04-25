import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import recipes from './reducers/recipes';
import auth from './reducers/auth';
import bookmarks from './reducers/bookmarks';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  recipes: recipes,
  auth: auth,
  bookmarks: bookmarks,
  // categories: categories,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;
