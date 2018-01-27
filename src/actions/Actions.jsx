import * as ActionTypes from '../constants/ActionTypes';
import Api from '../api/Api';

export const changeDate = date => ({
  type: ActionTypes.CHANGE_DATE,
  date,
});

export const changeLanguage = language => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  language,
});

export const loadMenusSuccess = payload => ({
  type: ActionTypes.LOAD_MENUS_SUCCESS,
  payload,
});

export const loadMenus = (date, language) => (dispatch) => {
  dispatch({
    type: ActionTypes.LOAD_MENUS,
  });

  Api.getMenus(date, language)
    .then(payload => dispatch(loadMenusSuccess(payload)))
    .catch((error) => {
      throw new Error(error);
    });
};
