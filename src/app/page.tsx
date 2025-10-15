import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export default function HomePage() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 text-gray-100 dark:bg-gray-900 dark:text-white transition-colors">
        <div className="grid grid-cols-12 gap-4">
          <Navbar />
          <Hero />
          <About />
          <Skills />
s          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
