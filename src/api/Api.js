class Api {
  static requestHeaders() {
    return { Accept: 'application/json' };
  }

  static getMenus(date, language) {
    const headers = this.requestHeaders();
    const request = new Request(`${process.env.API_URL}/v1/menus?language=${language}&date=${date.format('YYYY-MM-DD')}&lat=65.0591245&lng=25.4403774`, {
      method: 'GET',
      headers,
    });

    return fetch(request)
      .then((response) => {
        if (!response.ok) {
          return new Error(response);
        }

        return response.json();
      })
      .catch(error => error);
  }
}

export default Api;
