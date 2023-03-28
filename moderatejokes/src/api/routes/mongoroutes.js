const express = require('express');
const router = express.Router();
const mongodbController = require('../controllers/mongoController');

router.get('/access_mongodb', mongodbController.readData);
router.post('/create_mongodb', mongodbController.createData);
router.put('/access_mongodb:id', mongodbController.updateData);
router.delete('/access_mongodb:id', mongodbController.deleteData);

module.exports = router;