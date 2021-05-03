import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger/src';
import recipes from './reducers/recipes';
import auth from './reducers/auth';
import bookmarks from './reducers/bookmarks';
import categories from './reducers/categories';
import recipesitem from './reducers/recipesitem';
import thunk from 'redux-thunk';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  recipes: recipes,
  auth: auth,
  bookmarks: bookmarks,
  categories: categories,
  recipesitem: recipesitem,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
