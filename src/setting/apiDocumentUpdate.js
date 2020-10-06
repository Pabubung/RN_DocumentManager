// import fetch from 'isomorphic-fetch';
import axios from 'axios';
const {Promise} = require('es6-promise');

const API_URL = 'https://rndocument.com/api/document';
export default (
  id_item,
  date_item,
  type_item,
  name_item,
  additional_information,
  picture_source,
  current_location_item,
  receiver_item,
) =>
  fetch(`${API_URL}`, {
    method: 'PUT',
    // body,
    // body: 'id_item=' +id_item+'&picture_source='+picture_source,
    body:
      'id_item=' +
      id_item +
      '&date_item=' +
      date_item +
      '&type_item=' +
      type_item +
      '&name_item=' +
      name_item +
      '&additional_information=' +
      additional_information +
      '&picture_source=' +
      picture_source +
      '&current_location_item=' +
      current_location_item +
      '&receiver_item=' +
      receiver_item,
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
