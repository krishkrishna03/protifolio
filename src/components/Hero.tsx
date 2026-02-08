import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10" />
      
      <motion.div
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="relative inline-block">
            <motion.img
              src="Krishna.jpg"
              alt="Krishna"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-blue-400/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-20 blur-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
            Patnala Sri Krishna Sai
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl text-slate-300 mb-8 space-y-2"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center space-x-2">
            <motion.span
              className="text-blue-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &lt;
            </motion.span>
            <span>AI/ML Engineer | Full Stack Developer (MERN)</span>
            <motion.span
              className="text-teal-400"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              /&gt;
            </motion.span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <MapPin size={18} className="text-blue-400" />
            <span>Kakinada, Andhra Pradesh, India</span>
          </div>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Enthusiastic tech learner with a strong foundation in AI/ML, NLP, and Full-Stack Development.
          Currently interning as a Sr. Developer at IIITH-RCTS and working on ML/NLP projects.
          Passionate about building intelligent, scalable, and impactful software solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 flex items-center space-x-2">
              <Download size={20} />
              <span>Download Resume</span>
            </span>
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-slate-600 rounded-xl font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: "https://github.com/krishkrishna03", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/patnala-srikrishna-sai-4531b4229", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="group relative p-4 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon size={24} className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;