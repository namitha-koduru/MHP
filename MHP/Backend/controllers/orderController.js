const Order = require("../models/Order");
const sendSMS = require("../utils/sendSMS");

exports.placeOrder = async (req, res) => {
  const { mobile, items, total, orderType, paymentMode } = req.body;

  const orderId = "MHP" + Date.now();

  await Order.create({
    orderId,
    mobile,
    items,
    total,
    orderType,
    paymentMode,
    status: "PREPARING"
  });

  await sendSMS(
    mobile,
    `Order placed! ID: ${orderId}. Total ₹${total}`
  );

  res.json({ success: true, orderId });
};
