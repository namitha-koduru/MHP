"use client";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-gray-800 cursor-pointer"
        >
          MHP 🍽️
        </motion.h1>

        {/* Links */}
        <div className="flex gap-6 items-center">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <motion.span
                whileHover={{ scale: 1.1 }}
                className={`cursor-pointer font-medium transition ${
                  location.pathname === item.path
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                {item.name}
              </motion.span>
            </Link>
          ))}

          {/* Cart Icon */}
          <Link to="/cart">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="relative cursor-pointer"
            >
              <ShoppingCart size={22} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;