const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'staff' } // e.g., 'manager', 'chef', 'waiter'
});

module.exports = mongoose.model('User', UserSchema);
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);