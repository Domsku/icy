import restify from 'restify';

export default function createServer(options) {

  const server = restify.createServer({...options});

  server.on('uncaughtException', (req, res, route, err) => {
    res.send(err);
  });

  server.use(restify.acceptParser(server.acceptable));
  server.use(restify.bodyParser());
  server.use(restify.queryParser());
  server.use(restify.CORS({
    origins: ['*'],
    credentials: true,
    headers: []
  }));

  server.use((req, res, next) => {
    res.locals = {body: {}};
    next();
  });

  return server;

};
