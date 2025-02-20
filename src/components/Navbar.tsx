"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "../styles/globals.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("/");

  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex justify-center bg-black/80 neon-hover hover:text-cyan-400 backdrop-blur-md z-50">
      <ul className="flex space-x-6  text-lg font-semibold">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link href={link.path} onClick={() => setActive(link.path)}>
              <motion.span
                className={`relative text-gray-400 hover:text-white transition ${
                  active === link.path ? "text-white" : ""
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
                {active === link.path && (
                  <motion.div
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-cyan-400"
                    layoutId="underline"
                  />
                )}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
