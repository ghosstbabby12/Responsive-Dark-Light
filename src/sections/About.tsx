"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950 text-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-6 text-center text-indigo-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sobre mí
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Soy un desarrollador apasionado por la tecnología, la creatividad y la optimización de interfaces.
          Disfruto trabajar en proyectos donde el diseño y la lógica se combinan para crear algo memorable.
        </motion.p>
      </div>
    </section>
  );
}
