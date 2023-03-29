const express = require('express')
const route = express.Router();

const { getData, getType, createJoke, createType, getRandom } = require('../controllers/controller')

route.get(
    '/get',
    getData
)


route.post(
    '/create',
    createJoke
)

route.get(
    '/gettype',
    getType
)

route.post(
    '/createtype',
    createType
)

route.get(
    '/getrandom',
    getRandom
)

module.exports = route;