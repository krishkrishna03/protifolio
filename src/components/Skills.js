import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDatabase, 
  FaHtml5,
  FaDocker,
  FaAws,
  FaFigma
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiJavascript, 
  SiExpress, 
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiFirebase,
  SiPostgresql
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: 'React', icon: FaReact, color: 'text-blue-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-800 dark:text-white' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
      { name: 'Express', icon: SiExpress, color: 'text-gray-600 dark:text-gray-400' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
      { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'AWS', icon: FaAws, color: 'text-yellow-600' },
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
      { name: 'SQL', icon: FaDatabase, color: 'text-purple-500' },
      { name: 'Figma', icon: FaFigma, color: 'text-pink-500' },
      { name: 'HTML/CSS', icon: FaHtml5, color: 'text-red-500' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A comprehensive overview of my technical expertise and tools I work with
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
                {category.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-full mb-3">
                      <skill.icon className={`text-3xl ${skill.color}`} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
