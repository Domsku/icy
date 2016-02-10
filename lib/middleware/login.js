import { makeRequest } from '../helpers/request';
import { basePath } from '../config';

export const login = (req, res, next) => {
  if (req.body) {
    const {username, password} = req.body;
    const uri = `${basePath}/login`;

    makeRequest({
      uri: uri,
      req: req,
      method: 'POST',
      body: {
        username: username,
        password: password
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
  } else {
    res.send(400)
  }
}
