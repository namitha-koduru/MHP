const express = require("express");
const router = express.Router();

const {
  register,
  login
} = require("../controllers/authController");

/* -------- CREATE ACCOUNT -------- */

router.post("/register", register);

/* -------- LOGIN -------- */

router.post("/login", login);

module.exports = router;