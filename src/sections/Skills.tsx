"use client";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "TailwindCSS", "TypeScript", "Node.js", "Git", "Figma"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-10 text-indigo-400">Habilidades</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="px-6 py-3 bg-gray-800 rounded-xl text-lg shadow-lg hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
