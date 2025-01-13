import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaDatabase, 
  FaHtml5 
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiJavascript, 
  SiExpress, 
  SiTailwindcss 
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'SQL', icon: FaDatabase, color: 'text-purple-500' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
  { name: 'HTML/CSS', icon: FaHtml5, color: 'text-red-500' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills</h2>
          
          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: ["100%", "-100%"] }}
            transition={{
              x: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            className="flex gap-8 mb-8"
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center flex-shrink-0"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg mb-3">
                  {<skill.icon className={`text-3xl ${skill.color}`} />}
                </div>
                <span className="text-gray-700 dark:text-gray-300 whitespace-nowrap">{skill.name}</span>
              </div>
            ))}
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;