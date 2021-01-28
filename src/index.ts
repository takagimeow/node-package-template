/**
 * Module dependencies.
 */

import debug from 'debug';
import http from 'http';
import app from './app';
import { normalizePort, onError, onListening } from './utils/callbacks';

debug('express-app:server');
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
console.log('port: ', port);
server.listen(port);
server.on('error', (error) => onError(error, port as string));
server.on('listening', () => onListening(server));
