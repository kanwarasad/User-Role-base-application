// backend/routes/orderPrice.routes.js
const express = require('express');
const router = express.Router();
const orderPriceController = require('../controllers/orderPrice.controller');

router.get('/', orderPriceController.getOrderPrices);
router.post('/', orderPriceController.createOrderPrice);

module.exports = router;
