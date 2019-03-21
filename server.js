const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const usersRouter = require('./data/users/users-router.js')

const postsRouter = require('./data/posts/posts-router.js')

const cors = require('cors');

const server = express();


function upperCaser (req, res, next) {
    if (req.body.hasOwnProperty('name')) {
        const check = req.body.name.split(' ')
        if (check.length > 2) {
            req.body.name = check.map(el => {
                return el.charAt(0).toUpperCase() + el.slice(1)
            }).join(' ')
        } else {
            req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1)
        }
        next()
    } else {
        next()
    }

}

server.use(express.json());

server.use(cors());

server.use(helmet())

server.use(upperCaser)

server.use('/api/users', usersRouter);

server.use('/api/posts', postsRouter);

module.exports = server;