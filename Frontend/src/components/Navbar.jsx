import { ShoppingCart, User, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CartDrawer from "./CartDrawer";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="h-16 bg-white dark:bg-slate-800 dark:text-white shadow-md flex items-center justify-between px-8 border-b border-gray-200 dark:border-slate-700 transition-colors duration-300"
      >
        <h1 className="text-xl font-bold">MHP Canteen</h1>

        <div className="flex items-center gap-6 relative">

          {/* Dark Mode Toggle */}
          <div onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? (
              <Sun className="w-5 h-5 hover:text-yellow-400 transition" />
            ) : (
              <Moon className="w-5 h-5 hover:text-slate-900 transition" />
            )}
          </div>

          {/* Cart */}
          <div
            onClick={() => setIsCartOpen(true)}
            className="relative cursor-pointer"
          >
            <ShoppingCart className="w-6 h-6 hover:text-black dark:hover:text-white transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              2
            </span>
          </div>

          {/* Profile */}
          <div className="relative">
            <User
              className="w-6 h-6 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            />

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-40 bg-white dark:bg-slate-700 shadow-lg rounded-xl py-2 text-sm transition-colors duration-300">
                <div
                  onClick={() => {
                    setIsLoginOpen(true);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer"
                >
                  Login
                </div>

                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer">
                  Profile
                </div>

                <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600 cursor-pointer text-red-500">
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
};

export default Navbar;