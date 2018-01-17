import * as ActionTypes from '../constants/ActionTypes';

// eslint-disable-next-line import/prefer-default-export
export const increaseCounter = increaseBy => ({
  type: ActionTypes.INCREASE_COUNTER,
  increaseBy,
});
