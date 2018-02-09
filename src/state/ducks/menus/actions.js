import * as types from './types';

export const fetch = (date, language, lat, lng, page = 1, append = false) => ({
  type: types.FETCH,
  meta: {
    async: true,
    append,
    method: 'GET',
    path: `/v1/menus?language=${language}&date=${date.format('YYYY-MM-DD')}&lat=${lat}&lng=${lng}&page=${page}`,
  },
});

export const clear = () => ({
  type: types.CLEAR,
});
