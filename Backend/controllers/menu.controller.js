const Menu = require("../models/Menu");

/* GET ALL MENU ITEMS */

exports.getMenu = async (req, res) => {

  try {

    const items = await Menu.find();

    res.json(items);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

/* ADD MENU ITEM (ADMIN) */

exports.addMenuItem = async (req, res) => {

  try {

    const { name, price, category } = req.body;

    const item = await Menu.create({
      name,
      price,
      category
    });

    res.status(201).json(item);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};