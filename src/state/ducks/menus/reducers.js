import { Record, Map, List, fromJS } from 'immutable';
import * as types from './types';

const stateRecord = Record({
  error: null,
  loading: false,
  menus: List(),
  pagination: Map(),
});

const initialState = stateRecord();

const menusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_LIST: {
      return state.set('loading', true);
    }
    case types.FETCH_LIST_COMPLETED: {
      return state
        .set('error', null)
        .set('loading', false)
        .set('menus', fromJS(action.payload.data))
        .set('pagination', fromJS(action.payload.pagination));
    }
    case types.FETCH_LIST_FAILED: {
      return state
        .set('error', types.FETCH_LIST_FAILED)
        .set('loading', false)
        .set('menus', List())
        .set('pagination', Map());
    }
    case types.CLEAR: {
      return state
        .set('error', null)
        .set('loading', false)
        .set('menus', List())
        .set('pagination', Map());
    }
    default:
      return state;
  }
};

export default menusReducer;
