const Menu = require("../models/Menu");

// GET ALL MENU ITEMS
exports.getMenu = async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};