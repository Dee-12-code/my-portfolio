"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const projects = [
  { title: "Ed-Circle", link: "https://dee-12-code.github.io/Ed-Circle/" },
  { title: "AI-Powered Personal Finance Tracker", link: "https://dee-12-code.github.io/-AI-Powered-Personal-Finance-Tracker/" },
  { title: "Markdown Previewer", link: "https://dee-12-code.github.io/markdown-previewer" },
  { title: "Task Manager", link: "https://task-manager-rouge-delta.vercel.app/"},
  { title: "Quote-machine", link: "https://dee-12-code.github.io/quote-machine/" },
  { title: "Elite Consulting", link: "https://dee-12-code.github.io/Elite-Consulting/" },
  { title: "roman-converter", link: "https://dee-12-code.github.io/roman-converter/" },
];

export default function Projects() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-cyan-400 mb-8 z-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-80 h-40 bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-300"
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
          >
            {/* 3D Distortion Effect */}
            <Canvas className="absolute inset-0">
              <Sphere args={[1, 64, 64]} scale={1.5}>
                <MeshDistortMaterial distort={0.4} speed={2} color="#00FFFF" />
              </Sphere>
            </Canvas>
            
            <span className="absolute text-white font-bold text-xl px-4 py-2 bg-gray-800 bg-opacity-50 rounded-lg border-2 border-cyan-400 hover:shadow-cyan-400 hover:shadow-lg">
              {project.title}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
