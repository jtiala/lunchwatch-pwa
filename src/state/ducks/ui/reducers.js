import { Record } from 'immutable';
import * as types from './types';

const stateRecord = Record({
  scrolling: false,
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
    default:
      return state;
  }
};

export default searchParamsReducer;
