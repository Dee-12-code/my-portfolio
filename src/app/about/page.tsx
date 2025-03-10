"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-cyan-400 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          About Me
        </motion.h1>

        {/* Profile Image */}
        <motion.div
          className="w-44 h-44 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/profile.jpg" // Make sure the image exists in the public folder
            alt="Oladeji Johnson"
            width={176}
            height={176}
            className="object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.p
          className="max-w-2xl text-gray-300 text-lg leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I&apos;m Oladeji Johnson, a passionate web developer specializing in
          crafting interactive and immersive web experiences. I push the
          boundaries of design and functionality, combining cutting-edge
          technologies with seamless user interactions.
        </motion.p>

        {/* Certifications Section */}
        <motion.div
          className="mt-12 w-full max-w-2xl text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-cyan-400 mb-4 text-center">
            Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
            <li>Responsive Web Design - freeCodeCamp</li>
            <li>JavaScript Algorithms and Data Structures - freeCodeCamp</li>
            <li>Front End Development Libraries - freeCodeCamp</li>
            <li>Front-end Development - Axia Africa</li>
            <li>Hewlett Packard Enterprise Software Engineering Job Simulation - Forage</li>
          </ul>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
