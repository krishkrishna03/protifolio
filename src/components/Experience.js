import { motion } from 'framer-motion';
import {  FaCalendar, FaUserGraduate } from 'react-icons/fa';

const experiences = [
  {
    title: "Junior Developer Intern at RCTS",
    location: "Hyderabad, India",
    period: "2023 - 2024"
  },
  {
    title: "Junior Developer Intern at RCTS",
    location: "Hyderabad, India",
    period: "2024 - 2025"
  },
  {
    title: "Speech Analytics Intern",
    location: "Hyderabad, India",
    period: "2024 - Present"
  },
  {
    title: "Artificial Intelligence Intern",
    location: "Pune, India",
    period: "2024 - 2024"
  },
  {
    title: "Swecha AI Intern",
    location: "Hyderabad, India",
    period: "2024 - 2024"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4"
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Internship Experience
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Key internships where I gained hands-on experience and developed new skills.
          </motion.p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-4 border-green-500 dark:border-green-400"
            >
              <motion.div 
                className="absolute w-6 h-6 bg-green-500 dark:bg-green-400 rounded-full -left-[14px] top-0 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
              >
                <FaUserGraduate className="text-white text-sm" />
              </motion.div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ml-4 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                      Learning Opportunity
                    </p>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <FaCalendar className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
