const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const authMiddleware = require('../middleware/auth.middleware');

// router.get('/', orderController.getOrders);
// router.post('/', orderController.createOrder);

// Order routes
router.get('/', authMiddleware.verifyToken, orderController.getOrders); // Everyone can view
router.post('/', authMiddleware.verifyToken, authMiddleware.isAdminOrSuperAdmin, orderController.createOrder); // Only admin & superadmin can create
router.put('/:id', authMiddleware.verifyToken, authMiddleware.isSuperAdmin, orderController.updateOrder); // Only superadmin can update
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.isSuperAdmin, orderController.deleteOrder); // Only superadmin can delete


module.exports = router;
