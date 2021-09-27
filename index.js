const serverless = require('serverless-http');
const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');

const app = express();
app.use(express.static(`${__dirname}/.out`));
app.use(
  basicAuth({
    users: {
      admin: '19savage**',
      adam: 'password1234',
      eve: 'asdfghjkl',
    },
  })
);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '.out', 'index.html'));
});

const binaryMimeTypes = { binary: ['image/*', 'image/jpeg', 'image/png', 'image/svg+xml'] };

module.exports.handler = serverless(app, binaryMimeTypes);
