import { ThemeProvider } from './components/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;