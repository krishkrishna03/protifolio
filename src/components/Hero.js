import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const nameLetters = "Sri Krishna Sai".split("");
  const roleLetters = "Full Stack Developer".split("");

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 py-20"
      >
        <div className="text-center">
          <div className="mb-8">
            <motion.h1 
              className="text-5xl font-bold text-gray-800 dark:text-white mb-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block mr-2"
              >
                Hi, I'm
              </motion.span>
              <motion.div
                className="inline-flex overflow-hidden h-[1.2em] relative"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {nameLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={`inline-block ${letter === " " ? "mr-2" : ""} text-blue-600 dark:text-blue-400`}
                    whileHover={{
                      scale: 1.2,
                      color: "#3B82F6",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </motion.h1>
            
            <motion.div
              className="relative h-[2.5rem] overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "2.5rem" }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.div
                className="absolute w-full"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex justify-center">
                  {roleLetters.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      className={`text-2xl ${letter === " " ? "mr-2" : ""} text-gray-600 dark:text-gray-300`}
                      whileHover={{
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.p
            variants={containerVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            I'm passionate about creating beautiful, functional, and user-friendly web applications.
            Specializing in MERN stack development with a focus on scalable solutions.
          </motion.p>

          {/* Rest of the component remains the same */}
          <motion.div
            variants={containerVariants}
            className="flex justify-center space-x-4 mb-12"
          >
            <motion.a
              href="https://github.com/krishkrishna03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/patnala-sri-krishna-sai-4531b4229/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaLinkedin />
            </motion.a>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="flex justify-center space-x-4"
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full p-1"
            >
              <motion.div 
                className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;