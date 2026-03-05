import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

const MenuCard = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
    >
      <motion.img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {item.name}
        </h3>

        <p className="text-gray-600 mt-2">₹ {item.price}</p>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => addToCart(item)}
          className="mt-4 w-full bg-black text-white py-2 rounded-xl"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MenuCard;