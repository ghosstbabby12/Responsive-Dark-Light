import { Globe } from "lucide-react";

export default function LanguageToggle() {
  return (
    <button
      className="flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
      title="Cambiar idioma (no funcional)"
    >
      <Globe size={18} />
      <span>ES / EN</span>
    </button>
  );
}
