// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/auth.controller');

// router.post('/signup', authController.signup);
// router.post('/login', authController.login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
// const userController = require('../controllers/userController');
const userController = require('./../controllers/user.controller');
// const authMiddleware = require('../middleware/authMiddleware');
const authMiddleware = require('./../middleware/auth.middleware');

// Authentication Routes
router.post('/signup', authController.signup); // Sign up a new user
router.post('/login', authController.login);   // Log in an existing user

// User Routes (protected with authMiddleware)
router.get('/profile', authMiddleware.verifyToken, userController.getUserProfile); // Fetch user profile

module.exports = router;
