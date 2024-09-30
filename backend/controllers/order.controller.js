const Order = require('../models/order.model');

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders); // Accessible to all
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send('Order not found');

    // Only superadmin can update orders
    if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');
    
    Object.assign(order, req.body); // Update order fields
    await order.save();
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// order.controller.js
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send('Order not found');

    // Only superadmin can delete orders
    if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');

    // Update isDeleted flag and store the deletion message and date
    order.isDeleted = true;
    order.deletedAt = new Date();
    order.deletedBy = req.user.id; // Assuming req.user contains authenticated user's info
    order.deletionMessage = 'Successfully deleted your order';
    await order.save();

    res.status(200).send('Order marked as deleted');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// exports.deleteOrder = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) return res.status(404).send('Order not found');

//     // Only superadmin can delete orders
//     if (req.role !== 'superadmin') return res.status(403).send('Require SuperAdmin Role!');

//     await order.remove();
//     res.status(200).send('Order deleted');
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
