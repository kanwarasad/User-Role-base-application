const mongoose = require('mongoose');

const orderPriceSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date }, // Optional: Store deletion date
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Who deleted the record
  deletionMessage: { type: String }, // Optional: Custom message
});

module.exports = mongoose.model('OrderPrice', orderPriceSchema);
