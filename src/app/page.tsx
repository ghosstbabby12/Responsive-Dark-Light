import { redirect } from "next/navigation";

export default function Page() {
  // Redirige a la versión con idioma por defecto para que la traducción funcione
  redirect("/es");
}
