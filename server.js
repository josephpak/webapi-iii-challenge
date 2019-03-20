const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const server = express();

server.use(express.json());

server.use(helmet())

module.exports = server;