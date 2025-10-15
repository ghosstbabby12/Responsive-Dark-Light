"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ¡Hola! Soy <span className="text-indigo-500">Ghostbabby</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Desarrollador Frontend & Diseñador UI/UX. Me apasiona crear experiencias digitales elegantes y funcionales.
      </motion.p>
    </section>
  );
}
