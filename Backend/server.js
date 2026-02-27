console.log("RUNNING FILE:", __filename);
console.log("🔥 THIS SERVER FILE IS RUNNING");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const menuRoutes = require("./routes/menuRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");

const app = express();

/* ---------------- DATABASE ---------------- */
connectDB();

/* ---------------- MIDDLEWARE ---------------- */
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mhp-rust.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

/* ---------------- ROUTES ---------------- */
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/menu", menuRoutes);

/* ✅ ADMIN ROUTES (ONLY THIS ONE) */
app.use("/api/admin", adminOrderRoutes);

/* ---------------- TEST ROUTE ---------------- */
app.get("/api/status", (req, res) => {
  res.json({ message: "Backend Connected Successfully 🚀" });
});

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});