import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import reducer from './recipes';
const logger = createLogger({
  diff: true,
  collapsed: true,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));
export default store;
