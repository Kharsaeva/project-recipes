import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
const logger = createLogger({
  diff: true,
  collapsed: true,
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
