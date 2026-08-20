import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden text-slate-100 transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative border-t border-slate-200/20 bg-slate-950/60 py-12 text-center text-sm font-bold text-slate-200 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6">
          <p className="uppercase tracking-[0.35em] text-slate-200">© {new Date().getFullYear()} JOHN ELTON GEROMO</p>
          <p className="mt-3 text-xs uppercase tracking-[0.32em] text-sky-300">Crafted with precision & purpose</p>
        </div>
      </footer>
    </>
  );
}
