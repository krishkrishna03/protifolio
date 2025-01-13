import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Get In Touch</h2>
          
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://github.com/krishkrishna03"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/patnala-sri-krishna-sai-4531b4229/"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="mailto:patnalasrikrishnasai@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Sri Krishna Sai. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;