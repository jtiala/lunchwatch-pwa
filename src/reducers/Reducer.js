import { Record, Map, List, fromJS } from 'immutable';
import moment from 'moment';
import * as ActionTypes from '../constants/ActionTypes';

const stateRecord = Record({
  date: moment(),
  language: 'fi',
  menus: List(),
  menuPagination: Map(),
  loadingMenus: false,
});

const initialState = stateRecord();

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_DATE: {
      return state.set('date', action.date);
    }
    case ActionTypes.CHANGE_LANGUAGE: {
      return state.set('language', action.language);
    }
    case ActionTypes.LOAD_MENUS: {
      return state.set('loadingMenus', true);
    }
    case ActionTypes.LOAD_MENUS_SUCCESS: {
      return state
        .set('loadingMenus', false)
        .set('menus', fromJS(action.payload.data))
        .set('menuPagination', fromJS(action.payload.pagination));
    }
    default:
      return state;
  }
};

export default Reducer;
