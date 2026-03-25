import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingElements from './components/FloatingElements';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 1100);
  }, []);

  // Default light mode. Remove dark/light toggle behavior.
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');

  return (
    <div className="app-root min-h-screen overflow-x-hidden transition-colors duration-500 light">
      {isLoaded ? null : (
        <div id="app-loading" className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-sm">
          <div className="space-y-3 text-center">
            <div className="mx-auto w-14 h-14 border-4 border-slate-600 border-t-blue-300 rounded-full animate-spin" />
            <p className="text-slate-300 tracking-widest text-lg">LOADING PORTFOLIO</p>
          </div>
        </div>
      )}

      <FloatingElements />
      <Header />
      <main className="relative bg-[var(--bg-accent)] text-[var(--text-main)] transition-colors duration-500">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;