const mongoose = require('mongoose');

const orderPriceSchema = new mongoose.Schema({
  price: { type: Number, required: true }
});

module.exports = mongoose.model('OrderPrice', orderPriceSchema);
