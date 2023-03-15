const express = require('express')
const route = express.Router()
const { submit, getAll, update, deleteJoke } = require('../controllers/controller')
//, get, delete, update
route.post('/post', submit)
route.get('/get', getAll)
route.delete('/delete:id', deleteJoke)
route.put('/modify:id', update)

module.exports = route;