import { Record } from 'immutable';
import moment from 'moment';
import * as types from './types';

const stateRecord = Record({
  date: moment(),
  language: 'fi',
  lat: 65.0593177,
  lng: 25.4662935,
  address: 'University of Oulu',
});

const initialState = stateRecord();

const searchParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_DATE: {
      return state.set('date', action.payload.date);
    }
    case types.CHANGE_LANGUAGE: {
      return state.set('language', action.payload.language);
    }
    case types.CHANGE_LOCATION: {
      return state
        .set('lat', action.payload.lat)
        .set('lng', action.payload.lng)
        .set('address', action.payload.address);
    }
    default:
      return state;
  }
};

export default searchParamsReducer;
