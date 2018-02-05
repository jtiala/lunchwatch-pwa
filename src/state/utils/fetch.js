function parseStatus(status, res) {
  return new Promise((resolve, reject) => {
    if (status >= 200 && status < 300) {
      res.then(response => resolve(response));
    } else {
      res.then(response => reject(new Error({ status, response })));
    }
  });
}

export default (url, method, body) => {
  const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  });

  const request = new Request(url, {
    method,
    headers,
    body: method !== 'GET' ? JSON.stringify(body) : null,
  });

  return fetch(request)
    .then(res => parseStatus(res.status, res.json()));
};
