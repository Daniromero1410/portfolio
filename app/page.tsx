import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Cooperation from "@/components/sections/Cooperation";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen grid-pattern">
      <Header />
      <Hero />
      <Cooperation />
      <Services />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
