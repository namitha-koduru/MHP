import { Home, Utensils, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", icon: <Home size={18} />, path: "/" },
    { name: "Menu", icon: <Utensils size={18} />, path: "/menu" },
    { name: "Cart", icon: <ShoppingCart size={18} />, path: "/cart" },
  ];

  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-full p-6 bg-white border-r"
    >
      <div className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition ${
              location.pathname === item.path
                ? "bg-slate-200 font-semibold"
                : "hover:bg-slate-100"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;