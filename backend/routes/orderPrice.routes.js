// backend/routes/orderPrice.routes.js
const express = require('express');
const router = express.Router();
const orderPriceController = require('../controllers/orderPrice.controller');
const authMiddleware = require('../middleware/auth.middleware');

// router.get('/', orderPriceController.getOrderPrices);
// router.post('/', orderPriceController.createOrderPrice);
// Order routes
router.get('/', authMiddleware.verifyToken, orderPriceController.getOrderPrices); // Everyone can view
router.post('/', authMiddleware.verifyToken, authMiddleware.isSuperAdmin, orderPriceController.createOrderPrice); // Only superadmin can create
router.put('/:id', authMiddleware.verifyToken, authMiddleware.isSuperAdmin, orderPriceController.updateOrderPrice); // Only superadmin can update
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.isSuperAdmin, orderPriceController.deleteOrderPrice); // Only superadmin can delete


module.exports = router;
