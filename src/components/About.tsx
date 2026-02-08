import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Target, Users } from 'lucide-react';

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
              Currently working as a Senior Developer at IIIT Hyderabad's RCTS Lab, I've completed multiple
              internships across AI/ML, Cloud Computing, and Full-Stack Development. My journey is driven by
              curiosity, continuous learning, and a passion for creating solutions that bridge technology and
              real-world challenges.
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

        {/* Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">My Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-teal-400 rounded-full" />
              
              {[
                { year: "2021", title: "Started B.Tech in AI", desc: "Began Computer Science (AI) at KIET, focusing on Python and ML fundamentals" },
                { year: "2023", title: "Research at IIIT-H", desc: "Junior Developer Intern at RCTS Lab, started AI/ML journey" },
                { year: "2024", title: "AI/ML Specialist", desc: "Multiple internships in AI, NLP, Speech Processing, and Cloud Computing" },
                { year: "2025", title: "Senior Developer", desc: "Leading ML/NLP projects at IIIT-H and mentoring as ML Mentor at K-HUB" },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                      <div className="text-blue-400 font-bold text-lg">{item.year}</div>
                      <div className="text-white font-semibold mb-2">{item.title}</div>
                      <div className="text-slate-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;