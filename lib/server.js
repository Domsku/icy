import restify  from 'restify';
import createServer from './createServer';
import { login } from './middleware/login';
import { send } from './middleware/response';
import { getTemp, setTemp } from './middleware/temperature';
import { sanitizeTemp } from './helpers/sanitize';

const server = createServer({ name: 'icy' });

server.listen('8000', () => {
  console.log('%s is running at %s', 'icy', server.url);
});

server.get('/', send);
server.post('/login', login, send);
server.get('/temperature', getTemp, sanitizeTemp, send);
server.post('/temperature', setTemp, send);
