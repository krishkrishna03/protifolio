import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['all', 'web', 'mobile', 'fullstack', "frontend"];

  const projects = [
    {
      id: 1,
      title: "Task Manager",
      category: "web",
      description: "A responsive and user-friendly task management app with localStorage persistence and task filtering.",
      longDescription: "Developed a sleek and responsive task manager application using React and TailwindCSS. It allows users to create, edit, delete, and filter tasks. Tasks are saved locally using browser localStorage, ensuring persistence even after refreshing the page. Clean UI with efficient task filtering and status management.",
      image: "pro1.png",
      technologies: ["React", "TailwindCSS", "JavaScript", "LocalStorage"],
      github: "https://github.com/krishkrishna03/Task_manager.git",
      demo: "https://taskmangerk.netlify.app/",
      features: ["Task Creation & Editing", "Task Filtering", "LocalStorage Persistence", "Responsive Design", "User-friendly Interface"]
    },
    {
      id: 2,
      title: "COVID-19 Tracker",
      category: "frontend",
      description: "Interactive COVID-19 tracker with real-time global and country-specific data visualization.",
      longDescription: "COVID-19 Tracker is a powerful React-based web application that displays real-time and historical COVID-19 data from around the world. It features global and country-specific statistics, interactive visualizations with Chart.js and Recharts, an interactive world map via Leaflet, and dark/light mode toggle. Users can explore the evolution of the pandemic, compare countries, and view historical trends through a modern and responsive UI. Data is fetched from the reliable disease.sh API.",
      image: "pro6.png", // Replace with actual image file name or path
      technologies: [
        "React",
        "Chart.js",
        "Recharts",
        "Leaflet",
        "Axios",
        "Disease.sh API",
        "React CountUp",
        "React Select",
        "Date-fns"
      ],
      github: "https://github.com/your-username/covid19-tracker", // Replace with actual GitHub repo URL
      demo: "https://covid19trackerk.netlify.app/", // Replace with deployed demo link if available
      features: [
        "Global & Country-specific COVID-19 Statistics",
        "12+ Interactive Charts & Graphs",
        "Historical Data Visualization",
        "Interactive World Map with Leaflet",
        "Country Comparison",
        "Dark/Light Mode Toggle",
        "Responsive Design",
        "Real-time Updates via disease.sh API"
      ]
    },

    {
      id: 2,
      title: "Learning Management System",
      category: "fullstack",
      description: "A comprehensive LMS with course creation, student progress tracking, and interactive learning tools.",
      longDescription: "Developed a full-featured learning management system with course authoring tools, video streaming, interactive quizzes, student progress tracking, discussion forums, and certificate generation. Includes mobile-responsive design and offline content access.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "WebRTC"],
      github: "#",
      demo: "#",
      features: ["Course Authoring", "Video Streaming", "Progress Tracking", "Interactive Quizzes", "Certificate Generation"]
    },
    {
      id: 3,
      title: "Pong Game",
      category: "frontend",
      description: "Classic Pong game built with HTML, CSS, and JavaScript.",
      longDescription: "A simple and fun Pong game created using vanilla HTML, CSS, and JavaScript. The left paddle is controlled by the player's mouse, while the right paddle is managed by a basic AI. The game features smooth paddle and ball movement, collision detection, and score tracking, offering a nostalgic arcade experience.",
      image: "pro4.png", // Replace with actual image file name or path
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#", // Replace with actual GitHub repo URL
      demo: "https://krishkrishna03.github.io/Pong_game/", // Replace with actual demo URL if hosted
      features: [
        "Classic Pong Gameplay",
        "Mouse-Controlled Paddle",
        "Basic AI Opponent",
        "Smooth Movement",
        "Collision Detection",
        "Score Tracking"
      ]
    },
    {
      id: 4,
      title: "Weather App",
      category: "frontend",
      description: "Real-time weather application using OpenWeatherMap API.",
      longDescription: "Built a dynamic and responsive weather application using React and OpenWeatherMap API. Users can search for any city to get real-time weather updates including temperature, humidity, weather conditions, and more. The app features a clean UI with API integration and error handling for invalid locations.",
      image: "pro2.png",
      technologies: ["React", "API Integration", "JavaScript"],
      github: "#",
      demo: "https://tempcast.netlify.app/",
      features: ["Real-time Weather Data", "API Integration", "Responsive Design", "City Search", "Error Handling"]
    }, {
      id: 5,
      title: "MiNote - Note Taking App",
      category: "fullstack",
      description: "Elegant full-stack note-taking app with rich text editor and JWT-based authentication.",
      longDescription: "MiNote is a beautiful and modern note-taking application built with React, Node.js, and Express. It features secure user authentication using JWT, rich text editing with React Quill, and a responsive UI built with Tailwind CSS and Framer Motion. Notes are organized with categories, searchable, and auto-saved as you type. The project demonstrates full-stack development with a clean architecture and intuitive user experience.",
      image: "pro3.png", // Replace with actual image file name or path
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "React Quill",
        "JWT",
        "Framer Motion",
        "Axios"
      ],
      github: "#", // Replace with actual GitHub repo URL
      demo: "https://notepadk.netlify.app/", // Replace with deployed demo link if available
      features: [
        "Rich Text Editor", "JWT Authentication", "Private Notes per User", "Category Organization", "Search & Filter", "Auto-save", "Responsive Design", "Dark Mode", "Real-time Updates"
      ]
    }, {
      id: 6,
      title: "Productivity Hub",
      category: "fullstack",
      description: "A modern productivity dashboard with tools like summarizer, speech-to-text, sentiment analysis, and task manager.",
      longDescription: "Productivity Hub is a responsive and elegant productivity web app built with React 18 + TypeScript and Tailwind CSS. It includes powerful tools such as Text Summarizer, Text-to-Speech, Speech-to-Text, Sentiment Analysis, and Task Manager, all working client-side with Web APIs and Local Storage. Designed with accessibility and performance in mind, it features modern UI design, gradient themes, real-time updates, and browser compatibility. Built with Vite, it boasts fast loading and is ready for deployment.",
      image: "pro5.png", // Replace with actual image file name or path
      technologies: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "React Router",
        "Lucide React",
        "Web Speech API",
        "Local Storage"
      ],
      github: "#", // Replace with actual GitHub repo URL
      demo: "https://productivityhubk.netlify.app/", // Replace with deployed URL if hosted (e.g., Netlify or Vercel)
      features: [
        "Text Summarizer with File Upload",
        "Text-to-Speech with Voice Settings",
        "Real-time Speech-to-Text",
        "Sentiment Analysis with Visual Output",
        "Task Manager with Priority & Due Dates",
        "Responsive Modern UI",
        "Smooth Animations & Gradient Themes",
        "Client-side Storage and Privacy Focused",
        "Accessibility & ARIA Compliance"
      ]
    }



  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white'
                : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Filter size={18} />
                <span className="capitalize">{category === 'all' ? 'All Projects' : category}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Overlay Actions */}
                  <motion.div
                    className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.a
                      href={project.github}
                      className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-3 bg-teal-600 rounded-full hover:bg-teal-700 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full capitalize">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-1 text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-slate-900/80 rounded-full hover:bg-slate-900 transition-colors duration-200"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full capitalize">
                      {selectedProject.category}
                    </span>
                  </div>

                  <p className="text-slate-300 leading-relaxed mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          <span className="text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-2 bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      className="flex items-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors duration-200"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.demo}
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
