const getDate = state => state.getIn(['searchParams', 'date']);

const getLanguage = state => state.getIn(['searchParams', 'language']);

const getAddress = state => state.getIn(['searchParams', 'address']);

const getLat = state => state.getIn(['searchParams', 'lat']);

const getLng = state => state.getIn(['searchParams', 'lng']);

export {
  getDate,
  getLanguage,
  getAddress,
  getLat,
  getLng,
};
