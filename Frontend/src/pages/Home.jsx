"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 px-6">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Delicious Food <br />
              Delivered <span className="text-black">Fast</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Experience the best meals crafted with love and delivered at your doorstep.
            </p>

            <div className="mt-8 flex gap-4">
              <Link to="/menu">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-black text-white rounded-xl shadow-lg"
                >
                  Explore Menu
                </motion.button>
              </Link>

              <Link to="/cart">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-black rounded-xl"
                >
                  View Cart
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              alt="food"
              className="rounded-3xl shadow-2xl w-[400px] md:w-[500px]"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
          </motion.div>

        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
          >
            Why Choose MHP?
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Fresh Ingredients",
                desc: "We use only the freshest ingredients to prepare your meals.",
              },
              {
                title: "Fast Delivery",
                desc: "Lightning fast delivery at your doorstep.",
              },
              {
                title: "Best Taste",
                desc: "Crafted by top chefs for an unforgettable experience.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;