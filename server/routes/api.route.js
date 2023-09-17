const router = require('express').Router();
const apiController = require('../controllers/api.controller.js');

router.all('/', (req, res) => apiController.getHome(req, res));

// Create an Order
router.post('/order/create', (req, res) => apiController.createOrder(req, res));

// Get Order
router.get('/orders', (req, res) => apiController.getOrders(req, res));

module.exports = router;