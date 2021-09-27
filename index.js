const protect = require('static-auth');

const app = protect('/', (user, pass) => user === 'admin' && pass === '19savage**', { directory: `${__dirname}/.out` });

module.exports = app;
