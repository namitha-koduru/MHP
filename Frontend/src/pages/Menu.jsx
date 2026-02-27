import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";

const allItems = [
  { id: 1, name: "Veg Burger", price: 60, category: "Veg" },
  { id: 2, name: "Chicken Roll", price: 80, category: "Non-Veg" },
  { id: 3, name: "Cold Coffee", price: 50, category: "Beverages" },
  { id: 4, name: "French Fries", price: 40, category: "Veg" },
  { id: 5, name: "Chicken Biryani", price: 120, category: "Non-Veg" },
];

const categories = ["All", "Veg", "Non-Veg", "Beverages"];

const Menu = () => {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = allItems.filter((item) => {
    return (
      (activeCategory === "All" || item.category === activeCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 dark:text-white">Menu</h2>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-xl focus:ring-2 focus:ring-slate-300 outline-none dark:bg-slate-700 dark:text-white dark:border-slate-600"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-3 overflow-x-auto mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-700 dark:text-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-slate-500 dark:text-slate-300 mt-2">
              ₹{item.price}
            </p>
            <p className="text-xs mt-1 text-gray-400">
              {item.category}
            </p>

            <Button
              className="mt-4 w-full"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;