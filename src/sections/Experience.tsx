"use client";
import { motion } from "framer-motion";

const experiences = [
  { role: "Frontend Developer", company: "Freelance", period: "2023 - Actualidad", desc: "Desarrollo de interfaces modernas y dinámicas." },
  { role: "UI Designer", company: "Proyectos personales", period: "2021 - 2023", desc: "Diseño de experiencias de usuario atractivas e intuitivas." },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-indigo-400">Experiencia</h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-300">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <span className="text-sm text-gray-500">{exp.period}</span>
              <p className="mt-2 text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
