
const express = require('express');
const router = express.Router();
const mysqlController = require('../controllers/sqlController');

router.post('/update_mysql', mysqlController.addData);
router.post('/auth', mysqlController.authenticate);

module.exports = router;