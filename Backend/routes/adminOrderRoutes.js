const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

router.get("/orders", adminController.getAllOrders);
router.put("/orders/:id", adminController.updateOrderStatus);

module.exports = router;