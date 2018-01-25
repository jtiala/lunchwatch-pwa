import * as ActionTypes from '../constants/ActionTypes';
import Api from '../api/Api';

export const loadMenusSuccess = menus => ({
  type: ActionTypes.LOAD_MENUS_SUCCESS,
  menus,
});

export const loadMenus = () => dispatch =>
  Api.getMenus()
    .then(menus => dispatch(loadMenusSuccess(menus)))
    .catch((error) => {
      throw new Error(error);
    });
