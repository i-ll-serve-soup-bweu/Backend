const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const registerRouter = require('./routes/register-router');
const loginRouter = require('./routes/login-router');
const restricted = require('./auth/restricted-middleware.js');
const kitchenRouter = require('./routes/kitchen-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/register', registerRouter);
server.use('/login', loginRouter);
server.use('/kitchen', restricted, kitchenRouter);

server.get('/', (req, res) => {
  res.send('Alive!');
});

module.exports = server;
