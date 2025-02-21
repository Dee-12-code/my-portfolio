"use client";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Projects() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold text-cyan-400 mb-4 z-10">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sample Project Card with 3D Hover Effect */}
        <motion.div
          className="relative w-80 h-40 bg-gray-900 rounded-xl flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05 }}
        >
          {/* 3D Distortion Effect */}
          <Canvas>
            <Sphere args={[1, 64, 64]} scale={1.5}>
              <MeshDistortMaterial distort={0.4} speed={2} color="#00FFFF" />
            </Sphere>
          </Canvas>
          
          <span className="absolute text-white font-bold text-xl">Coming Soon 🔥🔥...</span>
        </motion.div>
      </div>
      
    </motion.div>
  );
}
