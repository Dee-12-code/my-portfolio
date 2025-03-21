"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, Github, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect! 🤝
        </motion.h2>
        <p className="text-gray-400 mt-4">
          Got a project idea, a job opportunity, or just want to say hi? Feel free to reach out!
        </p>

        {/* Email Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="mailto:dejij4617@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-pink-500 text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send an Email
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="mt-6 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/oladeji-johnson-137aa1332"
            target="_blank"
            className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
          >
            <Linkedin className="w-7 h-7" />
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/dee-12-code"
            target="_blank"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <Github className="w-7 h-7" />
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/oladeji506/"
            target="_blank"
            className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
          >
            <Instagram className="w-7 h-7" />
          </Link>

          {/* WhatsApp */}
          <Link
            href="https://wa.me/2348065170569"
            target="_blank"
            className="text-gray-400 hover:text-green-500 transition transform hover:scale-110"
          >
            <MessageCircle className="w-7 h-7" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
