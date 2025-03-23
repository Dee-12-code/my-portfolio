"use client";

import { motion } from "framer-motion";
import { useRouter, useParams, notFound } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

// Blog Post Type
interface BlogPost {
  title: string;
  description: string;
  content: string;
  date: string;
  slug: string;
}

// Sample blog data
const blogs: BlogPost[] = [
  {
    title: "Mastering React 19 & Next.js 15",
    description: "Explore the latest features and optimizations in React 19 and Next.js 15.",
    content: `
### What's New in React 19?
React 19 introduces **React Compiler**, which optimizes rendering performance automatically. It also improves **Server Components**, making SSR much more efficient.

#### Key Features:
- 🔥 **Automatic Memoization** (No need for useMemo/useCallback in most cases)
- 🚀 **Improved Suspense** for better lazy loading
- 🛠 **React Actions API** for handling complex UI state

\`\`\`tsx
// Example: Using React Actions
import { useActionState } from "react";

function Counter() {
  const [count, setCount] = useActionState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
\`\`\`
    `,
    date: "March 10, 2025",
    slug: "mastering-react-nextjs",
  },
  {
    title: "How I Built My AI-Powered Career Assistant",
    description: "A behind-the-scenes look at the development process of my AI career guidance app.",
    content: `
### Introduction
Building an AI-powered career assistant was a challenging but rewarding experience. The goal was to create an intelligent system that provides job recommendations, resume reviews, and career insights.

#### Technologies Used:
- **Next.js 15** for the frontend
- **OpenAI API** for natural language processing
- **MongoDB** for storing user data
- **Tailwind CSS** for styling

\`\`\`tsx
// Example: Fetching AI-generated career advice
async function getCareerAdvice(userInput: string) {
  const response = await fetch("/api/ai-advice", {
    method: "POST",
    body: JSON.stringify({ query: userInput }),
  });
  return response.json();
}
\`\`\`
    `,
    date: "February 28, 2025",
    slug: "building-ai-career-assistant",
  },
  {
    title: "5 Essential JavaScript Patterns for Clean Code",
    description: "Improve your JavaScript skills with these must-know coding patterns.",
    content: `
### 1. The Module Pattern
This pattern helps encapsulate logic and prevent global scope pollution.

\`\`\`js
const Counter = (function () {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count,
  };
})();
\`\`\`

### 2. The Factory Pattern
The factory pattern creates objects based on a template.

\`\`\`js
function createUser(name, role) {
  return { name, role, active: true };
}
const user1 = createUser("Alice", "Admin");
\`\`\`
    `,
    date: "February 15, 2025",
    slug: "js-patterns-clean-code",
  },
];

export default function BlogPost() {
  const router = useRouter();
  const params = useParams();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (params?.slug) {
      const foundBlog = blogs.find((post) => post.slug === params.slug);
      setBlog(foundBlog || null);
    }
  }, [params?.slug]);

  if (blog === null) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  if (!blog) {
    return notFound();
  }

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          className="mb-6 text-yellow-400 font-semibold hover:underline"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.back()}
        >
          ← Back to Blog
        </motion.button>

        {/* Blog Title */}
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {blog.title}
        </motion.h1>

        {/* Blog Date */}
        <motion.p
          className="text-gray-400 text-sm mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {blog.date}
        </motion.p>

        {/* Blog Content with Markdown & Syntax Highlighting */}
        <motion.div
          className="text-gray-300 mt-6 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <ReactMarkdown
            components={{
              code({ className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                return match ? (
                  <SyntaxHighlighter
                    style={dracula}
                    language={match[1]}
                    PreTag="div"
                    showLineNumbers
                    {...props}
                  >
                    {String(children).trim()}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                    {children}
                  </code>
                );
              },
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </motion.div>
      </div>
    </motion.section>
  );
}
