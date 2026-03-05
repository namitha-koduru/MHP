"use client";
import { motion } from "framer-motion";
import menuData from "../data/menuData";
import MenuCard from "../components/menu/MenuCard";

const Menu = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-900"
      >
        Our Menu
      </motion.h1>

      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
        {menuData.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default Menu;