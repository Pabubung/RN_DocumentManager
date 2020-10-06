import fetch from 'isomorphic-fetch';

const {Promise} = require('es6-promise');

// const API_URL = 'http://192.168.43.160:1337/';
// const API_URL = 'http://192.168.43.66:1337/';
// const API_URL = 'http://192.168.90.95:1337/';
// const API_URL = 'http://192.168.84.229:1337/';
// const API_URL = 'http://149.129.215.48:1337/';
// const API_URL = 'http://149.129.215.48:8080/';
// const API_URL = 'http://192.168.3.117:1337/';
// const API_URL = 'http://192.168.90.64:1337/';

// https://192.168.3.177/api/dexapicture/getpicture
// const API_URL = 'https://eventapp.dexagroup.com/api';
// const API_URL = 'https://dxportal.dexagroup.com/api/dininghall/v1.0.2/getmakanan';

const API_URL = 'http://192.168.100.80:3000/api/dexaemployee/getemployee';
export default (endpoint, method = 'post', accessToken, body) =>
  fetch(`${API_URL}`, {
    headers: {'content-type': 'application/json', Authorization: accessToken},
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json().then(json => ({json, response})))
    .then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      console.log('ss api employee', json);
      return json;
    })
    .then(
      response => response,
      error => error,
    );
