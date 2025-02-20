"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [glitch, setGlitch] = useState(false);

  // Trigger glitch effect every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 300); // Glitch duration
    }, 2000); // Glitch every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Background Effect */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,#1a1a1a,#000)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Hero Text with Glitch Effect */}
      <motion.h1
        className={`text-5xl md:text-7xl font-extrabold text-cyan-400 z-10 ${
          glitch ? "animate-glitch" : ""
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Oladeji Johnson
      </motion.h1>

      <motion.p
        className="text-gray-300 text-lg md:text-xl mt-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Crafting futuristic web experiences 🚀
      </motion.p>

      {/* Scroll Prompt */}
      <motion.div
        className="absolute bottom-10 flex items-center gap-2 text-gray-500 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span>Scroll Down</span>
        <motion.div
          className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
          transition={{ repeat: Infinity, duration: 1 }}
        />
      </motion.div>
    </main>
  );
}
