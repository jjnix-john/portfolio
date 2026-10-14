import { ThemeProvider } from '../context/ThemeContext'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import InteractiveBackground from '../components/InteractiveBackground'
import ChatBot from '../components/ChatBot'

function App() {
  return (
    <ThemeProvider>
      <InteractiveBackground />
      <Nav />
      <main className="relative z-10 bg-transparent text-text transition-colors duration-300">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ChatBot />
      <footer className="relative z-10 border-t border-border bg-surface-secondary/40 py-12 text-center text-sm font-bold text-muted backdrop-blur-md">
        <p className="uppercase tracking-[0.24em] text-text">© {new Date().getFullYear()} JOHN ELTON GEROMO</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.32em] text-sky-400">Crafted with precision & purpose</p>
      </footer>
    </ThemeProvider>
  )
}

export default App
