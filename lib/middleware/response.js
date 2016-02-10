export const send = (req, res, next) => {
  const { body, error } = res.locals;
  if(!error) {
    if(body) {
      res.send(200, body);
    } else {
      res.send(204);
    }
  } else {
    const code = error.code ? error.code : 500;
    res.send(code, error);
  }
};
