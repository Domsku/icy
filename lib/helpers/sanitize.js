export const sanitizeTemp = (req, res, next) => {
  const data = res.locals.body;
  const temperatureData = {
    set: data.temperature1,
    current: data.temperature2
  }
  res.locals.body = temperatureData;
  next();
}
