import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  BarChart3,
  Code2,
  GraduationCap,
  Cloud,
  type LucideIcon,
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  key: string;
  title: string;
  icon: LucideIcon;
  description: string;
  accent: string;
  items: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    key: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: Brain,
    description: 'Deep learning, NLP, computer vision, and model deployment — the core of my training curriculum.',
    accent: 'from-orange-400 to-red-500',
    items: [
      { name: 'TensorFlow', level: 93 },
      { name: 'Scikit-learn', level: 95 },
      { name: 'NLP', level: 91 },
      { name: 'Computer Vision', level: 88 },
      { name: 'Deep Learning', level: 90 },
      { name: 'Model Deployment', level: 85 },
    ],
  },
  {
    key: 'data-science',
    title: 'Data Science & Analytics',
    icon: BarChart3,
    description: 'Data pipelines, statistical analysis, visualization, and storytelling — turning raw data into decisions.',
    accent: 'from-blue-400 to-cyan-500',
    items: [
      { name: 'Python (Pandas/NumPy)', level: 94 },
      { name: 'Power BI', level: 90 },
      { name: 'Tableau', level: 85 },
      { name: 'SQL', level: 91 },
      { name: 'Statistical Analysis', level: 89 },
      { name: 'Data Visualization', level: 92 },
    ],
  },
  {
    key: 'fullstack',
    title: 'Full-Stack Development',
    icon: Code2,
    description: 'End-to-end web applications with modern frontend frameworks and robust backend architectures.',
    accent: 'from-teal-400 to-emerald-500',
    items: [
      { name: 'React', level: 95 },
      { name: 'Node.js / Express', level: 90 },
      { name: 'Django', level: 86 },
      { name: 'TypeScript', level: 92 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'MongoDB / PostgreSQL', level: 88 },
    ],
  },
  {
    key: 'training',
    title: 'Training & Mentorship',
    icon: GraduationCap,
    description: 'Designing curriculum, delivering workshops, and mentoring the next generation of AI/ML professionals.',
    accent: 'from-amber-400 to-orange-500',
    items: [
      { name: 'Curriculum Design', level: 90 },
      { name: 'Workshop Delivery', level: 93 },
      { name: 'Mentoring', level: 92 },
      { name: 'Content Creation', level: 88 },
      { name: 'Technical Writing', level: 86 },
      { name: 'Public Speaking', level: 84 },
    ],
  },
  {
    key: 'cloud',
    title: 'Cloud & DevOps',
    icon: Cloud,
    description: 'Infrastructure as code, containerization, CI/CD pipelines, and scalable cloud deployments.',
    accent: 'from-sky-400 to-blue-500',
    items: [
      { name: 'GCP', level: 87 },
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 89 },
      { name: 'Kubernetes', level: 78 },
      { name: 'CI/CD', level: 85 },
      { name: 'Git', level: 93 },
    ],
  },
];

function RingProgress({ level, accent, delay }: { level: number; accent: string; delay: number }) {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="relative w-24 h-24 flex-shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
        <circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          className="text-slate-700/60"
        />
        <motion.circle
          cx="48"
          cy="48"
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: 'easeOut', delay }}
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={accent.includes('orange') ? '#fb923c' : accent.includes('blue') || accent.includes('sky') ? '#38bdf8' : accent.includes('teal') || accent.includes('emerald') ? '#2dd4bf' : accent.includes('amber') ? '#fbbf24' : '#38bdf8'} />
            <stop offset="100%" stopColor={accent.includes('orange') ? '#ef4444' : accent.includes('blue') || accent.includes('sky') ? '#3b82f6' : accent.includes('teal') || accent.includes('emerald') ? '#10b981' : accent.includes('amber') ? '#f97316' : '#3b82f6'} />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold text-white">{level}%</span>
      </div>
    </div>
  );
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');

  const selected = skillCategories.find((cat) => cat.key === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-8 w-44 h-44 bg-gradient-to-br from-blue-500/15 to-cyan-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-10 w-60 h-60 bg-gradient-to-tr from-teal-400/10 to-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Brain size={14} />
            Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="mx-auto mt-4 w-24 h-1 rounded-full bg-gradient-to-r from-blue-400 to-teal-400" />
          <p className="mt-5 text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            From building production AI systems to training the next generation of data professionals —
            a blend of deep technical expertise and mentorship.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = category.key === activeCategory;
            return (
              <motion.button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.accent} text-white shadow-lg`
                    : 'bg-slate-800/40 text-slate-400 border border-slate-700/50 hover:text-white hover:bg-slate-800/60 hover:border-slate-600/60'
                }`}
                whileHover={{ scale: isActive ? 1.02 : 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Icon size={16} />
                {category.title}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Active Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">{selected.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Skill Cards with Ring Progress */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {selected.items.map((skill, idx) => (
              <motion.div
                key={skill.name}
                className="group rounded-2xl bg-slate-800/40 border border-slate-700/50 p-5 flex items-center gap-5 hover:border-slate-600/70 hover:bg-slate-800/55 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                exit={{ opacity: 0 }}
                whileHover={{ y: -4 }}
              >
                <RingProgress level={skill.level} accent={selected.accent} delay={idx * 0.1} />

                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-base md:text-lg leading-snug">{skill.name}</h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${selected.accent} bg-opacity-20 text-white/90`}>
                      {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-slate-700/50 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${selected.accent}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 + 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
