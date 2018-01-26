import format from 'date-fns/format';

const API_URL = 'http://localhost:8088';

class Api {
  static requestHeaders() {
    return { Accept: 'application/json' };
  }

  static getMenus() {
    const headers = this.requestHeaders();
    const request = new Request(`${API_URL}/v1/menus?language=fi&date=${format(Date(), 'YYYY-MM-DD')}&lat=65.0591245&lng=25.4403774`, {
      method: 'GET',
      headers,
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default Api;
