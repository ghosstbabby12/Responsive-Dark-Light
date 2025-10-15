"use client";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-950 border-t border-gray-800 text-gray-400 text-sm">
      © {new Date().getFullYear()} Ghostbabby. Todos los derechos reservados.
    </footer>
  );
}
