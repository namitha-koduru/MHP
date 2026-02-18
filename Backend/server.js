const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ---------------- CORS CONFIG ---------------- */
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mhp-rust.vercel.app"  // ⚠ replace if your vercel URL is different
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

/* ---------------- TEST ROUTE ---------------- */
app.get("/api/status", (req, res) => {
  res.json({ message: "Backend Connected Successfully 🚀" });
});

/* ---------------- ROUTES ---------------- */
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

/* ---------------- SERVER ---------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
