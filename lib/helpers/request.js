import fetch from 'node-fetch';
import FormData from 'form-data';
import _ from 'lodash';

export function makeRequest(requestOptions) {
  const { uri, method, body } = requestOptions;
  const { token, uid } = requestOptions.req.headers;

  let newRequestOptions = {
    method: method ? method : 'GET',
    headers: {
      'Session-token': token
    }
  };

  if (body || uid) {
    const form = new FormData();
    if (uid) {
      form.append('uid', uid);
    }

    if (body) {
      _.forEach(body, function(value, key) {
        form.append(key, value);
      });
    }

    newRequestOptions.body = form;
  }

  return new Promise((resolve, reject) => {
    fetch(uri, newRequestOptions)
    .then((res) => {
      const statusCode = res.status;

      res.json().then((response) => {
        if (response && response.error) {
          reject({
            message: response.error,
            code: statusCode
          });
        }

        if (statusCode >= 400) {
          reject({
            message: response.body,
            code: statusCode
          });
        }

        resolve(response);
      });
    });
  });
};
