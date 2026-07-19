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
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-400">
        &copy; {new Date().getFullYear()} John Elton Geromo. All rights reserved.
      </footer>
    </>
  );
}
