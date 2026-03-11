const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* GENERATE TOKEN */

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};


/* REGISTER USER */

exports.register = async (req, res) => {

  try {

    const { name, regId, phone, password, role } = req.body;

    if (!name || !regId || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const existingUser = await User.findOne({
      $or: [
        { phone },
        { regId }
      ]
    });

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
      user: {
        id: user._id,
        name: user.name,
        role: user.role
      },
      token
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};



/* LOGIN USER */

exports.login = async (req, res) => {

  try {

    const { phone, regId, password } = req.body;

    if ((!phone && !regId) || !password) {
      return res.status(400).json({
        message: "Provide phone or regId and password"
      });
    }

    const user = await User.findOne({
      $or: [
        { phone },
        { regId }
      ]
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password"
      });
    }

    const token = generateToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role
      }
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};