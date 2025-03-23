"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer } from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGit className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-400" /> },
  { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Tech Stack 🚀
        </motion.h2>
        <p className="text-gray-400 mt-4">
          Tools & technologies I use to craft stunning web experiences.
        </p>

        {/* Tech Icons Grid */}
        <motion.div
          className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-5xl">{tech.icon}</div>
              <p className="mt-2 text-gray-300 font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
