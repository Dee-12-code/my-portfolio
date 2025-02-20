"use client";
import { motion } from "framer-motion";
import "../styles/globals.css";

export default function Footer() {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 w-full text-center p-4 text-gray-500 bg-black/80 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      © {new Date().getFullYear()} Oladeji Johnson | All Rights Reserved
    </motion.footer>
  );
}
