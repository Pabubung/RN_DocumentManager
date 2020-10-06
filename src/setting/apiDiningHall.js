import fetch from 'isomorphic-fetch';
const { Promise } = require('es6-promise');

const API_URL = 'https://dxportal.dexagroup.com/api/dininghall/v1.0.2/getmakanan';
export default (endpoint, method = 'post', accessToken, body) => fetch(`${API_URL}`, {
  headers: { 'content-type': 'application/json', 'Authorization': accessToken },
  method,
  body: JSON.stringify(body),
})
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    console.log("ss api",json);
    return json;
  })
  .then(
    response => response,
    error => error,
  );
  
  