"use client";
import { motion } from "framer-motion";
import { Mail, Github, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl font-bold text-cyan-400 mb-4 z-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Contact Me
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="text-gray-300 mb-6 text-lg z-10"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Let&apos;s connect! <span className="text-cyan-400">🚀</span>
      </motion.p>

      {/* Contact Icons */}
      <motion.div
        className="flex space-x-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, delayChildren: 0.6 },
          },
        }}
      >
        {/* WhatsApp */}
        <motion.a
          href="https://wa.me/2348065170569"
          target="_blank"
          rel="noopener noreferrer"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <MessageCircle className="w-12 h-12 neon-hover text-green-400 hover:text-green-500 transition" />
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:dejij4617@gmail.com"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Mail className="w-12 h-12 neon-hover text-red-400 hover:text-red-500 transition" />
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/dee-12-code"
          target="_blank"
          rel="noopener noreferrer"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Github className="w-12 h-12 neon-hover text-white hover:text-gray-400 transition" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
