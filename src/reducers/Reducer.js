import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  counter: 1,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREASE_COUNTER: {
      return Object.assign({}, state, { counter: state.counter + action.increaseBy });
    }
    default:
      return state;
  }
};

export default Reducer;
