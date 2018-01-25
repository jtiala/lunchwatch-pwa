import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  counter: 1,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_MENUS_SUCCESS: {
      return Object.assign({}, state, { menus: action.menus });
    }
    default:
      return state;
  }
};

export default Reducer;
