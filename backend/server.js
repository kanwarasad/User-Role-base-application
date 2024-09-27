// backend/server.js
const express = require('express');

// require('dotenv').config(); // Load environment variables from .env file
// const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const { verifyToken } = require('./middleware/auth.middleware');
// const userController = require('./../controllers/user.controller');
const userController = require('./controllers/user.controller');
const authMiddleware = require('./middleware/auth.middleware');


dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGODB_URI; // Get the connection string from environment variables
if (!uri) {
  console.error('MongoDB URI is undefined. Please check your environment variable.');
  process.exit(1); // Exit the process with a failure code
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));
  console.log('MongoDB URI:', uri);

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected!'))
//     .catch(err => console.error('MongoDB connection error:', err));
  // Authentication Routes
  
  // Import Routes
  const orderRoutes = require('./routes/order.routes');
  const orderPriceRoutes = require('./routes/orderPrice.routes');
  
  // Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/order-prices', orderPriceRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
