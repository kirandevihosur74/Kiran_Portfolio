"use client"
import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Cyan blob */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[70vw] h-[60vw] bg-cyan-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.7, 0.9, 0.6, 0.7],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Magenta blob */}
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[50vw] bg-pink-500/25 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
          opacity: [0.6, 0.8, 0.5, 0.6],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Blue blob */}
      <motion.div
        className="absolute top-[30%] left-[60%] w-[50vw] h-[40vw] bg-blue-500/20 rounded-full blur-2xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, 25, -25, 0],
          scale: [1, 1.15, 0.85, 1],
          opacity: [0.5, 0.7, 0.4, 0.5],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Green blob */}
      <motion.div
        className="absolute top-[60%] left-[10%] w-[40vw] h-[30vw] bg-green-400/20 rounded-full blur-2xl"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 15, -15, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.3, 0.5, 0.2, 0.3],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Purple blob */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-[35vw] h-[30vw] bg-purple-500/25 rounded-full blur-2xl"
        animate={{
          x: [0, -15, 15, 0],
          y: [0, 10, -10, 0],
          scale: [1, 1.05, 0.95, 1],
          opacity: [0.4, 0.6, 0.3, 0.4],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 