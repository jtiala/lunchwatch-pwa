import { Record } from 'immutable';
import * as types from './types';

const stateRecord = Record({
  scrolling: false,
  topBarExpanded: true,
});

const initialState = stateRecord();

const searchParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SCROLLING_START: {
      return state.set('scrolling', true);
    }
    case types.SCROLLING_STOP: {
      return state.set('scrolling', false);
    }
    case types.TOP_BAR_TOGGLE: {
      return state.set('topBarExpanded', !state.get('topBarExpanded'));
    }
    default:
      return state;
  }
};

export default searchParamsReducer;
