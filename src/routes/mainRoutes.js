const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.getHome);
router.post('/create', mainController.createItem);
// Add more routes as needed

module.exports = router;
