const OrderPrice = require('../models/orderPrice.model');

exports.getOrderPrices = async (req, res) => {
  try {
    const prices = await OrderPrice.find();
    res.json(prices); // Accessible to all
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOrderPrice = async (req, res) => {
  // Only superadmin can create new prices
  if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');
  
  const orderPrice = new OrderPrice(req.body);
  try {
    const savedOrderPrice = await orderPrice.save();
    res.status(201).json(savedOrderPrice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateOrderPrice = async (req, res) => {
  // Only superadmin can update prices
  if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');

  try {
    const orderPrice = await OrderPrice.findById(req.params.id);
    if (!orderPrice) return res.status(404).send('Price not found');

    Object.assign(orderPrice, req.body); // Update price fields
    await orderPrice.save();
    res.status(200).json(orderPrice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// orderPrice.controller.js
exports.deleteOrderPrice = async (req, res) => {
  // Only superadmin can delete prices
  if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');

  try {
    const orderPrice = await OrderPrice.findById(req.params.id);
    if (!orderPrice) return res.status(404).send('Price not found');

    // Update isDeleted flag and store the deletion message and date
    orderPrice.isDeleted = true;
    orderPrice.deletedAt = new Date();
    orderPrice.deletedBy = req.user.id; // Assuming req.user contains authenticated user's info
    orderPrice.deletionMessage = 'Successfully deleted your value';
    await orderPrice.save();

    res.status(200).send('Price marked as deleted');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// exports.deleteOrderPrice = async (req, res) => {
//   // Only superadmin can delete prices
//   if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');

//   try {
//     const orderPrice = await OrderPrice.findById(req.params.id);
//     if (!orderPrice) return res.status(404).send('Price not found');

//     await orderPrice.remove();
//     res.status(200).send('Price deleted');
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
