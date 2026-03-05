console.log("RUNNING FILE:", __filename);

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

/* DATABASE */

connectDB();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

/* ROUTES */

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/admin", adminOrderRoutes);

/* TEST ROUTE */

app.get("/api/status", (req, res) => {
  res.json({ message: "Backend Connected Successfully 🚀" });
});

/* SERVER */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});