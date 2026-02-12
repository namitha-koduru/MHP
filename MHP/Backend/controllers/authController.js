const Otp = require("../models/Otp");
const User = require("../models/User");
const sendSMS = require("../utils/sendSMS");

exports.sendOtp = async (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  await Otp.create({
    mobile,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000)
  });

  await sendSMS(mobile, `Your MHP OTP is ${otp}`);

  res.json({ message: "OTP sent successfully" });
};

exports.verifyOtp = async (req, res) => {
  const { mobile, otp } = req.body;

  const record = await Otp.findOne({ mobile, otp });
  if (!record || record.expiresAt < new Date()) {
    return res.status(400).json({ success: false });
  }

  await User.findOneAndUpdate(
    { mobile },
    { mobile },
    { upsert: true }
  );

  res.json({ success: true, message: "Login successful" });
};
