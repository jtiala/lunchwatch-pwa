const getAll = state => state.getIn(['menus', 'menus']);

const isLoading = state => state.getIn(['menus', 'loading']);

export {
  getAll,
  isLoading,
};
