import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger/src';
import recipes from './reducers/recipes';
import auth from './reducers/auth';
import bookmarks from './reducers/bookmarks';
import categories from './reducers/categories';
import recipesitem from './reducers/recipesitem';
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
  recipesitem,
  adminPanel,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
