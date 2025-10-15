"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">Contáctame</h2>
        <motion.p
          className="text-lg text-gray-300 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ¿Tienes un proyecto en mente o quieres colaborar? ¡Hablemos!
        </motion.p>
        <motion.a
          href="mailto:ghostbabby@example.com"
          className="inline-block px-8 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Enviar correo
        </motion.a>
      </div>
    </section>
  );
}
