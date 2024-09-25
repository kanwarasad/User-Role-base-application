const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  deliveryDate: { type: Date, required: true },
  actualDeliveryDate: { type: Date } // Optional for SuperAdmin
});

module.exports = mongoose.model('Order', orderSchema);
