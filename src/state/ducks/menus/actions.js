import * as types from './types';

export const fetchList = (date, language, lat, lng) => ({
  type: types.FETCH_LIST,
  meta: {
    async: true,
    blocking: true,
    method: 'GET',
    path: `/v1/menus?language=${language}&date=${date.format('YYYY-MM-DD')}&lat=${lat}&lng=${lng}`,
  },
});

export const clear = () => ({
  type: types.CLEAR,
});
