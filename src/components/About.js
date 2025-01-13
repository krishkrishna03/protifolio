import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white"
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.02 }}
              >
                I'm a Full Stack Developer with expertise in the MERN stack. Currently pursuing my B.Tech in Computer Science, 
                I have a strong foundation in web development and a passion for creating efficient, scalable applications.
              </motion.p>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.02 }}
              >
                I specialize in building full-stack web applications using React, Node.js, Express, and MongoDB. 
                I'm constantly learning new technologies and best practices to deliver high-quality solutions.
              </motion.p>
              <motion.div 
                className="pt-4"
                variants={itemVariants}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Key Skills:</h3>
                <motion.ul 
                  className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300"
                  variants={containerVariants}
                >
                  {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Git'].map((skill, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ scale: 1.05, x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      • {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-full h-64 md:h-80 bg-blue-100 dark:bg-blue-900 rounded-lg overflow-hidden"
                whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
              >
                <motion.img
                  src="/image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x500?text=Profile+Image';
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <motion.a
              href="/resume.pdf"
              className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;