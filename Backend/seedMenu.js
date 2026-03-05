require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Menu = require("./models/Menu");

const seedData = [
  { name: "Veg Burger", description: "Delicious veg burger", price: 60 },
  { name: "Chicken Burger", description: "Juicy chicken burger", price: 120 },
  { name: "French Fries", description: "Crispy fries", price: 80 },
];

const seedMenu = async () => {
  try {
    await connectDB();
    await Menu.deleteMany();
    await Menu.insertMany(seedData);
    console.log("Menu Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedMenu();