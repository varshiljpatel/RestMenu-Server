const router = require('express').Router();
const apiController = require('../controllers/api.controller.js');

router.all('/', (req, res) => apiController.getHome(req, res));

module.exports = router;