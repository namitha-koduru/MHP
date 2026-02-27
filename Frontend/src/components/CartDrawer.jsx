import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: "tween" }}
            className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-slate-800 dark:text-white shadow-xl z-50 p-6 flex flex-col transition-colors duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <X
                className="cursor-pointer"
                onClick={onClose}
              />
            </div>

            {/* Cart Items */}
            <div className="flex-1 space-y-4 overflow-y-auto">
              {cartItems.length === 0 ? (
                <p className="text-gray-400 dark:text-gray-300">
                  Cart is empty
                </p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <div className="flex items-center gap-3">
                      <span>₹{item.price}</span>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mt-4">
              <div className="flex justify-between mb-4 font-semibold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <Button className="w-full">
                Checkout
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;