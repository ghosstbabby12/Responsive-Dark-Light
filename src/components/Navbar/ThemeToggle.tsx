// src/components/Navbar/ThemeToggle.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Evitar mismatch: hasta que el componente esté montado, renderizar un placeholder estable
  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="flex items-center gap-2 px-3 py-1 rounded-md border border-gray-600 text-sm opacity-80 cursor-wait"
        disabled
      >
        <span className="hidden md:inline text-sm">Theme</span>
        <span className="w-6 h-6 rounded-full bg-gray-700" />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1 rounded-md border border-gray-600 hover:bg-gray-700 transition"
    >
      <span className="hidden md:inline text-sm">{theme === "dark" ? "Light" : "Dark"}</span>
      <span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
