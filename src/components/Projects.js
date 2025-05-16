import { motion } from 'framer-motion';

const projects = [
  {
    title: "Task Manager",
    description: "A responsive and user-friendly task management app with localStorage persistence and task filtering.",
    image: "pro2.png",
    link: "https://taskmangerk.netlify.app/",
    tags: ["React", "TailwindCSS", "JavaScript", "LocalStorage"]
  },
  {
    title: "Weather App",
    description: "Real-time weather application using OpenWeatherMap API",
    image: "pro3.png",
    link: "https://tempcast.netlify.app/",
    tags: ["React", "API Integration", "JavaScript"]
  },
  {
    title: "NoteHub",
    description: "A sleek and responsive online note-taking app with user authentication and real-time sync.",
    image: "pro5.png",
    link: "https://notepadk.netlify.app/",
    tags: ["React", "API Integration", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and Tailwind CSS",
    image: "pro1.png",
    link: "https://krishnasaiportfolio.netlify.app/",
    tags: ["React", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Voice Emotion - Speech Emotion Recognition",
    description: "A modern web application for analyzing emotions in speech using advanced audio processing and visualization techniques. Built with React, TailwindCSS, and modern web technologies.",
    image: "pro4.png", // you need to provide or create 'pro4.png' or another suitable image
    link: "https://voiceemotion.netlify.app/", // replace with your app's live URL
    tags: [
      "React 18","Vite","Web Audio API","WaveSurfer.js","React Router"
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
