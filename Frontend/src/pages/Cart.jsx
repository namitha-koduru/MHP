"use client";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, getTotal } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20">

      <h1 className="text-4xl font-bold text-center text-gray-900">
        Your Cart
      </h1>

      <div className="max-w-4xl mx-auto mt-12 space-y-6">

        {cart.length === 0 && (
          <p className="text-center text-gray-500">Cart is empty</p>
        )}

        {cart.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">
                ₹ {item.price} x {item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded-lg"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-gray-200 rounded-lg"
              >
                +
              </button>
            </div>
          </motion.div>
        ))}

        {cart.length > 0 && (
          <div className="text-right text-2xl font-bold mt-8">
            Total: ₹ {getTotal()}
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;