import fetch from 'isomorphic-fetch';
const {Promise} = require('es6-promise');

const API_URL = 'https://rndocument.com/api/document';
export default (endpoint, method, accessToken, body) =>
  fetch(`${API_URL}`, {
    headers: {
      // 'content-type': 'application/json',
      // 'Authorization': accessToken
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    method,
    body,
    // : JSON.stringify(body),
    // body,
    // headers: {
    //   'Content-Type': 'application/x-www-form-url-encoded',
    //   Accept: 'application/json',
    // },
  })
    .then(response => response.json().then(json => ({json, response})))
    .then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      // console.log("ss api document",json);
      return json;
    })
    .then(
      response => response,
      error => error,
    );
