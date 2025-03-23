"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Project data
const projects = [
  {
    title: "Markdown Previewer",
    description: "A web application that allows users to write and preview Markdown in real-time. It features a split interface where users can enter Markdown syntax",
    image: "/projects/Markdown.png",
    live: "https://dee-12-code.github.io/markdown-previewer/",
    repo: "https://github.com/Dee-12-code/markdown-previewer",
  },
  {
    title: "Task Manager Web App",
    description: "A clean and minimalistic task manager with priority levels and local storage.",
    image: "/projects/Task.png",
    live: "https://task-manager-rouge-delta.vercel.app/",
    repo: "https://github.com/Dee-12-code/task-manager",
  },
  {
    title: "Personal Finance Tracker",
    description: "A finance app that helps users track expenses and set budgets.",
    image: "/projects/finance tracker.png",
    live: "https://dee-12-code.github.io/-AI-Powered-Personal-Finance-Tracker/",
    repo: "https://github.com/Dee-12-code/-AI-Powered-Personal-Finance-Tracker",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repo}
                    className="px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
