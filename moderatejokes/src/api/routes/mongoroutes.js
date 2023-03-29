const express = require('express');
const router = express.Router();
const mongodbController = require('../controllers/mongoController');

router.get('/read', mongodbController.readData);
// router.post('/create_mongodb', mongodbController.createData);
router.put('/update:id', mongodbController.updateData);
router.delete('/delete:id', mongodbController.deleteData);

module.exports = router;