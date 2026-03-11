const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

/* -------- CREATE MENU ITEM (ADMIN) -------- */
router.post("/", async (req, res) => {
  try {

    const item = await Menu.create(req.body);

    res.status(201).json({
      message: "Menu item created",
      item
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: err.message
    });

  }
});

/* -------- GET ALL AVAILABLE MENU ITEMS -------- */
router.get("/", async (req, res) => {
  try {

    const items = await Menu.find({ isAvailable: true });

    res.json(items);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
});

/* -------- GET MENU BY CATEGORY -------- */
router.get("/category/:category", async (req, res) => {
  try {

    const items = await Menu.find({
      category: req.params.category,
      isAvailable: true
    });

    res.json(items);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
});

/* -------- UPDATE MENU ITEM (ADMIN) -------- */
router.put("/:id", async (req, res) => {
  try {

    const updatedItem = await Menu.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedItem);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
});

/* -------- DELETE MENU ITEM (ADMIN) -------- */
router.delete("/:id", async (req, res) => {
  try {

    await Menu.findByIdAndDelete(req.params.id);

    res.json({
      message: "Menu item deleted"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
});

module.exports = router;