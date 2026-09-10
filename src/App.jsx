import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white bg-grid-pattern selection:bg-white selection:text-black">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <About />
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <Skills />
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <Projects />
        <div className="h-px w-full max-w-6xl mx-auto bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

