// import fetch from 'isomorphic-fetch';
import axios from 'axios';
const {Promise} = require('es6-promise');

const API_URL = 'https://rndocument.com/api/document';
export default (id_item,picture_name, method) =>
  fetch(`${API_URL}`, {
    method: 'DELETE',
    // body,
    body: 'id_item=' +id_item+'&picture_name='+picture_name,
    headers: {
      'Content-Type': 'application/x-www-form-url-encoded',
      Accept: 'application/json',
    },
  })
    .then(response => response.json().then(json => ({json, response})))
    .then(({json, response}) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
    .then(
      response => response,
      error => error,
    );
