const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// LOGIN ROUTE
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // 3. Create Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // 4. Send Success Response (Matches your HTML expectation)
    res.json({ 
      token, 
      role: user.role,
      message: 'Login successful' 
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// REGISTER ROUTE (Use Postman to create your first user!)
router.post('/register', async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const newUser = await User.create({ email, password: hashedPassword, role });
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;    