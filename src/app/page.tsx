import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] selection:bg-blue-500/30 selection:text-white scroll-smooth">
      <Navbar />
      <ScrollyCanvas />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
