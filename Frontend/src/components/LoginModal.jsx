import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LoginModal = ({ isOpen, onClose }) => {
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

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white w-96 p-8 rounded-2xl shadow-xl relative">
              <X
                className="absolute top-4 right-4 cursor-pointer"
                onClick={onClose}
              />

              <h2 className="text-2xl font-bold mb-6 text-center">
                Login
              </h2>

              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-300 outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full mb-6 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-slate-300 outline-none"
              />

              <Button className="w-full">
                Login
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;