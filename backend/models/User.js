const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user','admin', 'superadmin'], required: true },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }], // Reference to Order
  orderPrices: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderPrice' }] // Reference to OrderPrice

});

// Hash password before saving

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Compare hashed password
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
