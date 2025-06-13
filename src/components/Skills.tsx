import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const categories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React.js', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'TypeScript', level: 85, color: 'from-blue-600 to-blue-700' },
        { name: 'Tailwind CSS', level: 95, color: 'from-teal-500 to-teal-600' },
        { name: 'Next.js', level: 80, color: 'from-gray-600 to-gray-700' },
        { name: 'Vue.js', level: 75, color: 'from-green-500 to-green-600' },
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 88, color: 'from-green-500 to-green-600' },
        { name: 'Python', level: 85, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Express.js', level: 90, color: 'from-gray-600 to-gray-700' },
        { name: 'FastAPI', level: 78, color: 'from-teal-500 to-teal-600' },
        { name: 'GraphQL', level: 75, color: 'from-pink-500 to-pink-600' },
      ]
    },
    database: {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-green-600 to-green-700' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-blue-700' },
        { name: 'AWS', level: 75, color: 'from-orange-500 to-orange-600' },
        { name: 'Docker', level: 78, color: 'from-blue-500 to-blue-600' },
        { name: 'Redis', level: 70, color: 'from-red-500 to-red-600' },
      ]
    },
    mobile: {
      title: 'Mobile & Others',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 80, color: 'from-blue-500 to-blue-600' },
        { name: 'Flutter', level: 65, color: 'from-blue-400 to-blue-500' },
        { name: 'Git/GitHub', level: 95, color: 'from-gray-600 to-gray-700' },
        { name: 'Jest/Testing', level: 75, color: 'from-red-500 to-red-600' },
        { name: 'Figma', level: 70, color: 'from-purple-500 to-purple-600' },
      ]
    }
  };

  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend', color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', icon: '🟢', category: 'Backend', color: 'from-green-400 to-green-600' },
    { name: 'Python', icon: '🐍', category: 'Backend', color: 'from-yellow-400 to-yellow-600' },
    { name: 'MongoDB', icon: '🍃', category: 'Database', color: 'from-green-500 to-green-700' },
    { name: 'AWS', icon: '☁️', category: 'Cloud', color: 'from-orange-400 to-orange-600' },
    { name: 'Docker', icon: '🐳', category: 'DevOps', color: 'from-blue-500 to-blue-700' },
    { name: 'TypeScript', icon: '📘', category: 'Language', color: 'from-blue-600 to-blue-800' },
    { name: 'GraphQL', icon: '🔗', category: 'API', color: 'from-pink-400 to-pink-600' },
    { name: 'Next.js', icon: '▲', category: 'Framework', color: 'from-gray-600 to-gray-800' },
    { name: 'Express', icon: '🚀', category: 'Backend', color: 'from-gray-500 to-gray-700' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', color: 'from-blue-600 to-blue-800' },
    { name: 'Redis', icon: '🔴', category: 'Cache', color: 'from-red-500 to-red-700' },
    { name: 'Tailwind', icon: '🎨', category: 'CSS', color: 'from-teal-400 to-teal-600' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend', color: 'from-green-400 to-green-600' },
    { name: 'Flutter', icon: '🦋', category: 'Mobile', color: 'from-blue-400 to-blue-600' },
    { name: 'Git', icon: '📝', category: 'Version Control', color: 'from-orange-500 to-orange-700' }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <category.icon size={20} />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{key}</span>
              </span>
              {activeCategory === key && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-xl"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-6">
            {categories[activeCategory as keyof typeof categories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        animate={{ x: ["0%", "100%", "0%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Grid - Enhanced Design */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-4">Technologies I Work With</h3>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm text-center hover:bg-slate-800/50 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                {/* Background gradient effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}
                />
                
                {/* Icon */}
                <div className="relative z-10 mb-3">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                </div>
                
                {/* Technology name */}
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors duration-300">
                    {tech.category}
                  </div>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-xl transition-all duration-300"
                />

                {/* Floating particles effect on hover */}
                <motion.div
                  className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Additional info section */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/30 rounded-full border border-slate-700/50 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-300 text-sm">
                Always learning and exploring new technologies
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;