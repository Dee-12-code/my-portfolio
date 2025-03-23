"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Sample blog data
const blogs = [
  {
    title: "Mastering React 19 & Next.js 15",
    description: "Deep dive into the latest features and optimizations in React 19 and Next.js 15.",
    date: "March 10, 2025",
    slug: "mastering-react-nextjs",
  },
  {
    title: "How I Built My AI-Powered Career Assistant",
    description: "A behind-the-scenes look at the development process of my AI career guidance app.",
    date: "February 28, 2025",
    slug: "building-ai-career-assistant",
  },
  {
    title: "5 Essential JavaScript Patterns for Clean Code",
    description: "Improve your JavaScript skills with these must-know coding patterns.",
    date: "February 15, 2025",
    slug: "js-patterns-clean-code",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Blog Posts
        </motion.h2>

        {/* Blog List */}
        <div className="mt-12 space-y-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <p className="text-gray-400 text-sm">{blog.date}</p>
              <h3 className="text-2xl font-semibold mt-2">{blog.title}</h3>
              <p className="text-gray-400 mt-2">{blog.description}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="mt-4 inline-block text-yellow-400 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
