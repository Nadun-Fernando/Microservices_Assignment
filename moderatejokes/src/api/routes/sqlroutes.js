
const express = require('express');
const router = express.Router();
const mysqlController = require('../controllers/sqlController');

router.post('/update_mysql', mysqlController.addData);

module.exports = router;