import * as types from './types';

export const changeDate = date => ({
  type: types.CHANGE_DATE,
  payload: {
    date,
  },
});

export const changeLanguage = language => ({
  type: types.CHANGE_LANGUAGE,
  payload: {
    language,
  },
});

export const changeLocation = (lat, lng, address) => ({
  type: types.CHANGE_LOCATION,
  payload: {
    lat,
    lng,
    address,
  },
});
