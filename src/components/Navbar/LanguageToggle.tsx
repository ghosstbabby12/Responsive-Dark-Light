// src/components/Navbar/LanguageToggle.tsx
"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Lang, languages, defaultLang } from "@/app/i18n/config";

function detectLang(pathname: string): Lang {
  for (const l of languages) {
    if (pathname === `/${l}` || pathname.startsWith(`/${l}/`)) return l;
  }
  return defaultLang;
}

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname() || "/";

  const current = detectLang(pathname);
  const next: Lang = current === "es" ? "en" : "es";

  const handleToggle = () => {
    // Extraer la parte restante del path sin el prefijo de idioma actual
    let rest = pathname;
    for (const l of languages) {
      const prefix = `/${l}`;
      if (rest === prefix) { rest = ""; break; }
      if (rest.startsWith(`${prefix}/`)) { rest = rest.slice(prefix.length + 1); break; }
    }
    // Si no había prefijo de idioma, rest es el path actual sin la barra inicial
    if (!pathname.startsWith("/en") && !pathname.startsWith("/es")) {
      rest = pathname.startsWith("/") ? pathname.slice(1) : pathname;
    }

    const qs = typeof window !== "undefined" ? window.location.search : "";
    const newPath = `/${next}${rest ? `/${rest}` : ""}${qs}`;
    router.push(newPath);
  };

  return (
    <button
      aria-label="Toggle language"
      onClick={handleToggle}
      className="flex items-center gap-2 px-3 py-1 rounded-md border border-gray-600 hover:bg-gray-700 transition text-sm"
      title="Cambiar entre ES / EN"
    >
      <span className="sr-only">Idioma</span>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span>{(current === "es" ? "ES" : "EN")} → {(next === "es" ? "ES" : "EN")}</span>
    </button>
  );
}
