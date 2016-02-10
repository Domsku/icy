import { makeRequest } from '../helpers/request';
import { basePath } from '../config';

export const getTemp = (req, res, next) => {
  const uri = `${basePath}/data`;

  makeRequest({
    uri: uri,
    req: req
  })
  .then((response) => {
    res.locals.body = response;
    next();
  })
  .catch((error) => {
    res.locals.error = error;
    next();
  });
}

export const setTemp = (req, res, next) => {
  const { temperature } = req.body
  const uri = `${basePath}/data`;

  makeRequest({
    uri: uri,
    req: req,
    method: 'POST',
    body: {
      temperature1: temperature
    }
  })
  .then((response) => {
    res.locals.body = response;
    next();
  })
  .catch((error) => {
    res.locals.error = error;
    next();
  });
}
