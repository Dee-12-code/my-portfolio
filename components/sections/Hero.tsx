"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient">
      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center md:text-left">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi👋, I&apos;m <span className="text-yellow-400">Oladeji</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          I build elegant & dynamic web experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex gap-4 justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
