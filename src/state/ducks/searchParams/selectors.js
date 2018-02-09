export const getDate = state => state.getIn(['searchParams', 'date']);

export const getLanguage = state => state.getIn(['searchParams', 'language']);

export const getAddress = state => state.getIn(['searchParams', 'address']);

export const getLat = state => state.getIn(['searchParams', 'lat']);

export const getLng = state => state.getIn(['searchParams', 'lng']);
