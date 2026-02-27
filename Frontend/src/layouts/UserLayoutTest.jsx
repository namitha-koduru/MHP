"use client";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">

      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1">

        {/* Sidebar */}
        <div className="m-4">
          <div className="bg-card shadow-lg rounded-3xl p-6 h-full">
            <Sidebar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 m-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <div className="bg-card rounded-3xl p-8 shadow-md h-full">
              <Outlet />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default UserLayout;