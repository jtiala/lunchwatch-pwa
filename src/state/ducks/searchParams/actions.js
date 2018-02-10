import * as types from './types';

export const changeDate = date => ({
  type: types.DATE_CHANGE,
  payload: {
    date,
  },
});

export const changeLanguage = language => ({
  type: types.LANGUAGE_CHANGE,
  payload: {
    language,
  },
});

export const changeLocation = (lat, lng, address) => ({
  type: types.LOCATION_CHANGE,
  payload: {
    lat,
    lng,
    address,
  },
});
