"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Carnaval Conecta", desc: "Plataforma interactiva para gestión de eventos culturales.", tech: "React + Spring Boot" },
  { title: "Portafolio Interactivo", desc: "Sitio personal dinámico con animaciones fluidas.", tech: "Next.js + TailwindCSS" },
  { title: "Dashboard de Análisis", desc: "Panel de control con visualizaciones y filtros dinámicos.", tech: "React + Recharts" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-indigo-400">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/30 transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-2 text-indigo-400">{p.title}</h3>
              <p className="text-gray-300 mb-3">{p.desc}</p>
              <span className="text-sm text-gray-500">{p.tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
