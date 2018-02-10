import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Record } from 'immutable';
import * as reducers from './ducks/index';
import { apiService } from './middlewares';

export default function configureStore(initialState) {
  const stateRecord = Record({
    menus: undefined,
    searchParams: undefined,
    ui: undefined,
  });

  const rootReducer = combineReducers(reducers, stateRecord);

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(
      apiService,
      thunk,
      logger,
    )),
  );
}
