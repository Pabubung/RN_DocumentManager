import fetch from 'isomorphic-fetch';

const { Promise } = require('es6-promise');

// const API_URL = 'http://192.168.43.160:1337/';
// const API_URL = 'http://192.168.43.66:1337/';
// const API_URL = 'http://192.168.90.95:1337/';
// const API_URL = 'http://192.168.84.229:1337/';
// const API_URL = 'http://149.129.215.48:1337/';
// const API_URL = 'http://149.129.215.48:8080/';
// const API_URL = 'http://192.168.3.117:1337/';
// const API_URL = 'http://192.168.90.64:1337/';
const API_URL = 'https://eventapp.dexagroup.com/api';
export default (endpoint, method = 'get', body, accessToken) => fetch(`${API_URL}${endpoint}`, {
  headers: { 'content-type': 'application/json', 'Authorization': accessToken },
  method,
  body: JSON.stringify(body),
})
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .then(
    response => response,
    error => error,
  );
