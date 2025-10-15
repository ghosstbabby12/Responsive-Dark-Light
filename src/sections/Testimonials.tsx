"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Camila R.", text: "Su atención al detalle y creatividad hacen que cada proyecto destaque." },
  { name: "Andrés L.", text: "Muy profesional y apasionado por lo que hace. Recomiendo totalmente su trabajo." },
  { name: "Laura P.", text: "Transforma ideas en interfaces hermosas y funcionales. Excelente colaboración." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-950 text-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-indigo-400">Testimonios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="italic mb-4 text-gray-300">“{t.text}”</p>
              <h4 className="font-semibold text-indigo-300">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
