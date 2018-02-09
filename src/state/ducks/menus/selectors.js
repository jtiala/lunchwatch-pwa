export const getAll = state => state.getIn(['menus', 'menus']);

export const getNextPageNumber = state => 1 + state.getIn(['menus', 'pagination', 'page']);

export const isLoading = state => state.getIn(['menus', 'loading']);

export const isMoreToLoad = state =>
  (state.getIn(['menus', 'pagination', 'page']) < state.getIn(['menus', 'pagination', 'pageCount']));
