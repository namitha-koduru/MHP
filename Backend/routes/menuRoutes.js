const express = require("express");
const router = express.Router();
const Menu = require("../models/Menu");

/* -------- CREATE MENU ITEM -------- */
router.post("/", async (req, res) => {
  try {
    const item = await Menu.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

/* -------- GET ALL MENU ITEMS -------- */
router.get("/", async (req, res) => {
  try {
    const items = await Menu.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
