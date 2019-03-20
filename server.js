const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const usersRouter = require('./data/users/users-router.js')

const postsRouter = require('./data/posts/posts-router.js')

const server = express();

server.use(express.json());

server.use(helmet())

server.use('/api/users', usersRouter);

server.use('/api/posts', postsRouter);

module.exports = server;