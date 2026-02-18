const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderId: String,
  mobile: String,
  items: Array,
  total: Number,
  orderType: String,
  paymentMode: String,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);
