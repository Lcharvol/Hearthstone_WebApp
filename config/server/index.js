const server = { host: '127.0.0.1', port: 3004 };
const path = require('path');

module.exports = {
  locale: 'en_US',
  publicPath: path.join(__dirname, '../../public'),
  buildPath: path.join(__dirname, '../../build'),
  httpCode: {
    Unauthorized: 201, // 401
    BadRequest: 202, //  400
    Forbidden: 203, // 403
    error: 306, //  404
  },
  server,
  routes: {},
  db: {
    host: '0.0.0.0',
    port: 27017,
    options: {
      auto_reconnect: true,
      poolSize: 10,
      w: 1,
      strict: true,
      native_parser: true,
    },
    database: 'test',
  },
};
