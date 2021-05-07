import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import recipes from './reducers/recipes';
import auth from './reducers/auth';
import bookmarks from './reducers/bookmarks';
import categories from './reducers/categories';
import recipesItem from './reducers/recipesItem';
import adminPanel from './reducers/adminPanel';
import thunk from 'redux-thunk';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  recipes,
  auth,
  bookmarks,
  categories,
  recipesItem,
  adminPanel,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
