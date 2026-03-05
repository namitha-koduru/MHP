const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* -------- GENERATE TOKEN -------- */

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

/* ---------------- REGISTER ---------------- */

exports.register = async (req, res) => {

  try {

    const { name, regId, phone, password, role } = req.body;

    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = await User.create({
      name,
      regId,
      phone,
      password,
      role
    });

    const token = generateToken(user);

    res.status(201).json({
      message: "Account created successfully",
      user,
      token
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

/* ---------------- LOGIN ---------------- */

exports.login = async (req, res) => {

  try {

    const { phone, password } = req.body;

    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    const token = generateToken(user);

    res.json({
      message: "Login successful",
      user,
      token
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};