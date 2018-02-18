import * as types from './types';

export const startScrolling = () => ({
  type: types.SCROLLING_START,
});

export const stopScrolling = () => ({
  type: types.SCROLLING_STOP,
});

export const toggleTopBar = () => ({
  type: types.TOP_BAR_TOGGLE,
});
