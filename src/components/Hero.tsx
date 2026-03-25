import  { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const descriptors = [
    'Software Developer',
    'AI Researcher',
    'Full-Stack Developer',
    'Machine Learning Engineer',
    'Always Learning New Things',
  ];
  const [typedText, setTypedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 100;
    const timeout = setTimeout(() => {
      const current = descriptors[wordIndex];
      if (isDeleting) {
        setTypedText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setTypedText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % descriptors.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, descriptors, isDeleting, wordIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.18 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(5,30,65,0.95)_0%,_rgba(5,30,65,0.9)_40%,_rgba(2,12,30,0.95)_100%)]"
      style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(5,25,60,0.85),_rgba(0,10,24,0.95))]" />

      <div className="absolute -left-24 top-24 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute right-16 bottom-24 w-80 h-80 rounded-full bg-violet-400/10 blur-3xl animate-[float_14s_ease-in-out_infinite]" />

      <div className="container mx-auto px-6 py-28 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6 lg:space-y-8" variants={itemVariants}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-200 border border-cyan-300/30 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Next-gen developer brand
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[var(--text-main)]">
              I build impactful AI-enabled products with elegant frontend and resilient backend code.
            </h1>

            <div className="h-[46px] text-2xl md:text-3xl font-semibold text-[var(--text-muted)]">
              <span>{typedText}</span>
              <span className="inline-block w-[2px] h-7 bg-cyan-300 animate-pulse ml-2" />
            </div>

            <p className="max-w-2xl text-base md:text-xl text-[var(--text-muted)] leading-relaxed">
              As a confident fresher, I deliver polished user experiences and scalable architectures backed by full-stack engineering, machine learning, and cloud-driven deployment.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition transform duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Explore Projects
                <span className="text-lg">?</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 px-8 py-3 font-semibold text-cyan-100 backdrop-blur-md hover:bg-cyan-400/10 transition"
              >
                Let�s collaborate
              </a>
            </div>

            <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Completed Projects', value: '30+' },
                { label: 'AI/ML Internships', value: '5+' },
                { label: 'Open Source', value: '12+' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3 }}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-sm"
                >
                  <div className="text-2xl font-extrabold text-[var(--text-main)]">{item.value}</div>
                  <div className="mt-1 text-sm text-[var(--text-muted)]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-white/10 shadow-2xl shadow-cyan-900/30 backdrop-blur-xl">
              <img
                src="Krishna.jpg"
                alt="Krishna"
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
              <div className="absolute bottom-6 left-6 rounded-full bg-slate-900/60 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm border border-cyan-300/20">
                AI/ML Intern | Full Stack Engineer
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
