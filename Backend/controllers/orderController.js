const Order = require("../models/Order");

// Create order (User)
exports.createOrder = async (req, res) => {
  try {
    const { items, totalAmount } = req.body;

    const newOrder = new Order({
      user: req.user?._id || null,
      items,
      totalAmount,
      status: "Pending"
    });

    await newOrder.save();
    res.status(201).json(newOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get logged-in user's orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user?._id });
    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};