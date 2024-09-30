const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  deliveryDate: { type: Date, required: true },
  actualDeliveryDate: { type: Date }, // Optional for SuperAdmin
  isDeleted: { type: Boolean, default: false },
  deletedAt: { type: Date }, // Optional: Store deletion date
  deletedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Who deleted the record
  deletionMessage: { type: String }, // Optional: Custom message
});

module.exports = mongoose.model('Order', orderSchema);
