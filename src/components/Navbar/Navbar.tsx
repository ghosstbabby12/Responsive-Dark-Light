// src/components/Navbar/Navbar.tsx
"use client";

import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="col-span-12 bg-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <div className="flex items-center gap-4">
          {/* Mantén aquí tu logo/texto exactamente como la interfaz original */}
          <a href="#" className="font-bold text-xl">Portafolio</a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#hero" className="hover:underline">Inicio</a>
          <a href="#about" className="hover:underline">Sobre mí</a>
          <a href="#projects" className="hover:underline">Proyectos</a>
          <a href="#contact" className="hover:underline">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((s) => !s)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu (mantener estructura original si ya la tienes) */}
      {open && (
        <div className="md:hidden bg-transparent px-4 pb-4">
          <a href="#hero" className="block py-2">Inicio</a>
          <a href="#about" className="block py-2">Sobre mí</a>
          <a href="#projects" className="block py-2">Proyectos</a>
          <a href="#contact" className="block py-2">Contacto</a>
        </div>
      )}
    </header>
  );
}
