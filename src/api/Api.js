const API_URL = 'http://localhost:8088';

class Api {
  static requestHeaders() {
    return { Accept: 'application/json' };
  }

  static getMenus() {
    const headers = this.requestHeaders();
    const request = new Request(`${API_URL}/v1/menus`, {
      method: 'GET',
      headers,
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default Api;
