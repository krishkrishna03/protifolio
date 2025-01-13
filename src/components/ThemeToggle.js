import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </motion.button>
  );
}