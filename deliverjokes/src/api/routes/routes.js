const express = require('express')
const route = express.Router();

const { executeQuery } = require('../controllers/controller')

route.get(
    '/get',
    executeQuery
)

module.exports = route;