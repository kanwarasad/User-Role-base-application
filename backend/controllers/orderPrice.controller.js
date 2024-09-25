const OrderPrice = require('../models/orderPrice.model');

exports.getOrderPrices = async (req, res) => {
  try {
    const prices = await OrderPrice.find();
    res.json(prices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createOrderPrice = async (req, res) => {
  const orderPrice = new OrderPrice(req.body);
  try {
    const savedOrderPrice = await orderPrice.save();
    res.status(201).json(savedOrderPrice);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
