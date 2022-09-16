import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import GreetingsReducer from './Reducers/Greeting';

const rootReducer = combineReducers({ GreetingsReducer });
const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));

export default store;
