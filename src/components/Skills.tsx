import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Settings } from 'lucide-react';

const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend Engineering',
    icon: Code,
    description: 'Rich UIs, responsive experiences, and accessible interfaces with modern toolchains.',
    items: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'TypeScript', level: 92, color: 'from-blue-500 to-blue-700' },
      { name: 'Tailwind CSS', level: 94, color: 'from-teal-500 to-teal-700' },
      { name: 'Next.js', level: 85, color: 'from-slate-500 to-slate-700' },
      { name: 'Accessibility', level: 90, color: 'from-indigo-500 to-indigo-700' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend & API',
    icon: Server,
    description: 'Robust server design, clean API contracts, and scalable data architecture.',
    items: [
      { name: 'Node.js', level: 90, color: 'from-green-500 to-green-700' },
      { name: 'Express', level: 88, color: 'from-cyan-500 to-cyan-700' },
      { name: 'Python', level: 92, color: 'from-yellow-500 to-orange-500' },
      { name: 'Django', level: 84, color: 'from-green-600 to-green-800' },
      { name: 'REST / GraphQL', level: 89, color: 'from-blue-500 to-cyan-600' },
    ],
  },
  {
    key: 'data',
    title: 'AI/ML & Data',
    icon: Settings,
    description: 'Data pipelines, machine learning model development, and applied analytics.',
    items: [
      { name: 'TensorFlow', level: 87, color: 'from-orange-500 to-red-500' },
      { name: 'Scikit-learn', level: 90, color: 'from-sky-500 to-blue-500' },
      { name: 'NLP', level: 88, color: 'from-teal-500 to-cyan-500' },
      { name: 'Computer Vision', level: 83, color: 'from-purple-500 to-indigo-500' },
      { name: 'Data Engineering', level: 86, color: 'from-blue-600 to-blue-800' },
    ],
  },
  {
    key: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Infrastructure as code, containerization, and deployment automation.',
    items: [
      { name: 'Docker', level: 89, color: 'from-teal-500 to-cyan-500' },
      { name: 'GCP', level: 85, color: 'from-blue-500 to-blue-700' },
      { name: 'AWS', level: 78, color: 'from-orange-500 to-red-600' },
      { name: 'CI/CD', level: 83, color: 'from-green-500 to-emerald-500' },
      { name: 'MongoDB', level: 88, color: 'from-emerald-500 to-green-700' },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const selected = skillCategories.find((cat) => cat.key === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-8 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-10 w-56 h-56 bg-gradient-to-tr from-cyan-400/15 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Confident and structured experience foundation, designed like a senior engineer’s portfolio:
            deep specialization, cross-functional strengths, and continuous growth mindset.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = category.key === activeCategory;
            return (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`relative rounded-2xl p-5 text-left border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? 'border-blue-300/40 bg-slate-800/70 shadow-2xl shadow-blue-500/20'
                    : 'border-slate-700/60 bg-slate-800/30 hover:border-blue-300/30 hover:bg-slate-800/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{category.title}</h3>
                      <p className="text-xs text-slate-400">{category.items.length} skills</p>
                    </div>
                  </div>
                  <span className={`text-xs font-semibold ${isActive ? 'text-cyan-300' : 'text-slate-400'}`}>
                    {isActive ? 'Active' : 'View'}
                  </span>
                </div>

                <div className="mt-4 text-slate-400 text-xs leading-relaxed">{category.description}</div>
                <div className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none group-hover:opacity-50 bg-gradient-to-br from-blue-500/12 to-cyan-500/10" />
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {selected.items.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 relative overflow-hidden shadow-lg"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl -translate-x-1/4 -translate-y-1/4" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="px-2 py-1 text-xs font-semibold text-blue-200 bg-blue-500/20 rounded-full">{skill.level}%</span>
                </div>

                <div className="relative h-3 rounded-full bg-slate-700 overflow-hidden">
                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.level}%` }} />
                  <div className="absolute inset-0 bg-white/10" />
                </div>

                <div className="mt-3 text-xs text-slate-400">Level: {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
