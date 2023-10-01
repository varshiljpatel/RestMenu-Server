const router = require('express').Router();
const apiController = require('../controllers/api.controller.js');

router.all('/', (req, res) => apiController.getHome(req, res));

// Create an Order
router.post('/orders/create', (req, res) => apiController.createOrder(req, res));

// Get Order
router.get('/orders', (req, res) => apiController.getOrders(req, res));

// Incomleted orders
router.get('/orders/pending', (req, res) => apiController.getPendingOrders(req, res));

// Comlete orders request
router.post('/order/completed', (req, res) => apiController.setCompletedOrder(req, res));

module.exports = router;