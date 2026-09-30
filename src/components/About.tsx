import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Users, Compass, BookOpen, FlaskConical, BrainCircuit, TrendingUp, GraduationCap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "2+", label: "Years Experience", icon: Target },
    { number: "15+", label: "Internships", icon: Users },
    { number: "30+", label: "Projects Completed", icon: Code },
    { number: "5+", label: "Certifications", icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-200">
              Building Intelligent Solutions with AI & Full-Stack Development
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              I'm an AI/ML Engineer and Full Stack Developer specializing in building intelligent,
              scalable software solutions. With expertise in Natural Language Processing, Computer Vision,
              and the MERN stack, I transform complex problems into innovative applications that make a real impact.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Currently working as an AI/ML/DA/DS Technical Trainer at Innoknowvex in Bangalore, I've also
              completed 12+ internships across AI/ML, Cloud Computing, and Full-Stack Development, and led
              research at IIIT Hyderabad's RCTS Lab. My journey is driven by curiosity, continuous learning,
              and a passion for creating solutions — and now, for teaching the next generation.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['Machine Learning', 'NLP & Computer Vision', 'Cloud Computing', 'MERN Stack'].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-slate-800/50 rounded-full text-sm font-medium border border-slate-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <stat.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Journey — Stepper */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
              <Compass size={14} />
              Milestones
            </div>
            <h3 className="text-3xl md:text-4xl font-bold">
              My <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Journey</span>
            </h3>
            <div className="mx-auto mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-blue-400 to-teal-400" />
          </div>

          {/* Horizontal stepper on desktop, vertical on mobile */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Connecting line — desktop */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-teal-400/40" />
              {/* Connecting line — mobile */}
              <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/40 via-cyan-400/40 to-teal-400/40" />

              <div className="grid md:grid-cols-5 gap-6 md:gap-2">
                {[
                  { year: "2021", title: "Started B.Tech", desc: "Began Computer Science (AI) at KIET — Python & ML fundamentals", icon: BookOpen },
                  { year: "2023", title: "Research at IIIT-H", desc: "Junior Developer Intern at RCTS Lab — kicked off AI/ML research", icon: FlaskConical },
                  { year: "2024", title: "AI/ML Specialist", desc: "12+ internships across NLP, Speech, Cloud, and Full-Stack", icon: BrainCircuit },
                  { year: "2025", title: "Senior Developer", desc: "Led ML/NLP projects at IIIT-H, mentored 50+ students at K-HUB", icon: TrendingUp },
                  { year: "2026", title: "Technical Trainer", desc: "AI/ML/DA/DS Trainer at Innoknowvex, Bangalore — present", icon: GraduationCap },
                ].map((item, index) => {
                  const Icon = item.icon;
                  const isLatest = index === 4;
                  return (
                    <motion.div
                      key={item.year}
                      className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 pl-12 md:pl-0"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.12 }}
                      viewport={{ once: true }}
                    >
                      {/* Node */}
                      <div className="relative flex-shrink-0 md:mb-4">
                        <motion.div
                          className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                            isLatest
                              ? 'bg-gradient-to-br from-amber-400 to-orange-500 border-amber-300/50 shadow-lg shadow-amber-500/30'
                              : 'bg-slate-800 border-blue-400/40'
                          }`}
                          whileHover={{ scale: 1.15 }}
                        >
                          <Icon size={18} className={isLatest ? 'text-white' : 'text-blue-300'} />
                          {isLatest && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400 ring-2 ring-slate-900 animate-pulse" />
                          )}
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="md:text-center flex-1 md:px-2">
                        <div className={`text-lg font-bold ${isLatest ? 'text-amber-300' : 'text-blue-300'}`}>
                          {item.year}
                        </div>
                        <div className="text-white font-semibold text-sm md:text-base mt-0.5 leading-snug">
                          {item.title}
                        </div>
                        <div className="text-slate-400 text-xs mt-1.5 leading-relaxed hidden md:block">
                          {item.desc}
                        </div>
                        <div className="text-slate-400 text-sm mt-1.5 leading-relaxed md:hidden">
                          {item.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;