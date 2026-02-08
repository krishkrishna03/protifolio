import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Developer Intern | Research Intern",
      company: "RCTS, IIIT-Hyderabad",
      location: "Kakinada, Andhra Pradesh, India",
      period: "August 2024 - April 2025",
      type: "Research Internship",
      description: "Leading ML/NLP research projects at IIIT Hyderabad's Research Center. Working on cutting-edge AI solutions, building intelligent systems, and collaborating with research teams on innovative projects.",
      achievements: [
        "Developed ML/NLP models for real-world applications",
        "Collaborated with research teams on AI projects",
        "Built scalable web applications using MERN stack",
        "Contributed to research publications and technical documentation"
      ],
      technologies: ["Python", "NLP", "Machine Learning", "React", "Node.js", "MongoDB", "TensorFlow"],
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Django Intern",
      company: "Perpex",
      location: "Remote, India",
      period: "July 2025 - September 2025",
      type: "Internship",
      description: "Developed backend applications using Django framework. Built RESTful APIs, implemented database models, and created server-side logic for web applications.",
      achievements: [
        "Built robust backend systems with Django",
        "Designed and implemented RESTful APIs",
        "Optimized database queries for better performance",
        "Integrated third-party services and APIs"
      ],
      technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "Git"],
      color: "from-green-600 to-green-700"
    },
    {
      title: "Android Developer",
      company: "EduSkills Foundation",
      location: "Hyderabad, Telangana, India",
      period: "January 2025 - March 2025",
      type: "Internship",
      description: "Developed Android applications using Java and Android SDK. Created user interfaces, implemented app logic, and integrated backend services for mobile apps.",
      achievements: [
        "Built native Android applications from scratch",
        "Implemented modern Android UI/UX patterns",
        "Integrated RESTful APIs and cloud services",
        "Optimized app performance and user experience"
      ],
      technologies: ["Java", "Android SDK", "XML", "REST APIs", "Git"],
      color: "from-teal-600 to-teal-700"
    },
    {
      title: "Java Full Stack Developer",
      company: "EduSkills Foundation",
      location: "Hyderabad, Telangana, India",
      period: "October 2024 - December 2024",
      type: "Internship",
      description: "Worked on full-stack Java applications. Built both frontend and backend components using Java technologies, Spring Boot, and modern web frameworks.",
      achievements: [
        "Developed full-stack applications using Java and Spring Boot",
        "Created responsive web interfaces with modern frameworks",
        "Implemented secure authentication and authorization",
        "Built RESTful web services and microservices"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS", "JavaScript", "REST APIs"],
      color: "from-red-600 to-red-700"
    },
    {
      title: "Web Development Intern",
      company: "EduSkills Foundation",
      location: "Hyderabad, Telangana, India",
      period: "June 2024 - September 2024",
      type: "Internship",
      description: "Built responsive web applications using modern frontend and backend technologies. Worked on creating user-friendly interfaces and implementing server-side logic.",
      achievements: [
        "Developed responsive websites with HTML, CSS, and JavaScript",
        "Built dynamic web applications using React",
        "Implemented backend APIs with Node.js and Express",
        "Deployed applications to cloud platforms"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Analyst",
      company: "UptoSkills",
      location: "Remote, India",
      period: "December 2024 - March 2025",
      type: "Internship",
      description: "Analyzed structured and unstructured data to derive actionable insights. Created dashboards, performed statistical analysis, and automated reporting processes.",
      achievements: [
        "Cleaned and transformed large datasets using Python and Excel",
        "Created interactive dashboards with Power BI and Tableau",
        "Performed exploratory data analysis and statistical summaries",
        "Automated data reports reducing manual work by 30%"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Power BI", "Excel", "SQL", "Matplotlib"],
      color: "from-yellow-600 to-yellow-700"
    },
    {
      title: "Machine Learning Mentor",
      company: "K-HUB (KIET)",
      location: "Kakinada, Andhra Pradesh, India",
      period: "October 2023 - March 2025",
      type: "Mentorship",
      description: "Mentored students in Machine Learning concepts and projects. Conducted workshops, guided project development, and helped students build ML solutions.",
      achievements: [
        "Mentored 50+ students in ML and AI concepts",
        "Conducted hands-on workshops on ML algorithms",
        "Guided students through real-world ML projects",
        "Helped students prepare for AI/ML careers"
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Jupyter", "Data Science"],
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "Cloud Computing Intern",
      company: "Learnflu",
      location: "Bengaluru, Karnataka, India",
      period: "November 2024 - January 2025",
      type: "Internship",
      description: "Worked with cloud platforms and technologies. Deployed applications, managed cloud infrastructure, and implemented cloud-based solutions.",
      achievements: [
        "Deployed applications on Google Cloud Platform",
        "Managed cloud infrastructure and resources",
        "Implemented CI/CD pipelines for automated deployments",
        "Optimized cloud costs and performance"
      ],
      technologies: ["GCP", "Docker", "Kubernetes", "CI/CD", "Cloud Storage"],
      color: "from-blue-400 to-blue-500"
    },
    {
      title: "Speech Processing Intern",
      company: "Speech Processing Lab, IIITH",
      location: "Hyderabad, Telangana, India",
      period: "August 2024 - January 2025",
      type: "Research Internship",
      description: "Worked on speech processing and analytics research. Developed speech-to-text pipelines, extracted conversational features, and built analytics dashboards.",
      achievements: [
        "Developed speech-to-text pipeline using pre-trained models",
        "Extracted conversational features like pitch and sentiment",
        "Worked with large-scale audio datasets",
        "Built visual dashboards for speech analytics"
      ],
      technologies: ["Python", "SpeechRecognition", "PyDub", "NLTK", "Pandas", "Matplotlib"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "AI/ML Intern",
      company: "Internship Studio",
      location: "Pune, Maharashtra, India",
      period: "August 2024 - October 2024",
      type: "Internship",
      description: "Worked on AI and machine learning projects. Built ML models, performed data preprocessing, and deployed AI solutions for real-world applications.",
      achievements: [
        "Built machine learning models for classification tasks",
        "Implemented AI features using TensorFlow and Scikit-learn",
        "Collaborated with data science teams on projects",
        "Deployed sentiment analysis model as an API"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      color: "from-orange-600 to-orange-700"
    },
    {
      title: "Summer Intern",
      company: "Swecha Telangana",
      location: "Hyderabad, Telangana, India",
      period: "May 2024 - June 2024",
      type: "Internship",
      description: "Worked on socially impactful AI projects. Built ML models for community applications and contributed to open-source AI initiatives.",
      achievements: [
        "Contributed to AI solutions for community-driven applications",
        "Built ML models for image and text classification",
        "Implemented ethical and inclusive AI practices",
        "Participated in AI workshops and hackathons"
      ],
      technologies: ["Python", "Scikit-learn", "TensorFlow", "OpenCV", "Pandas"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Junior Developer Intern | Research Intern",
      company: "RCTS, IIIT-Hyderabad",
      location: "Hyderabad, Telangana, India",
      period: "August 2023 - April 2024",
      type: "Research Internship",
      description: "Started research career at IIIT Hyderabad. Worked on AI/ML projects, learned research methodologies, and contributed to technical solutions.",
      achievements: [
        "Gained hands-on experience with AI/ML research",
        "Contributed to multiple research projects",
        "Developed full-stack applications for research tools",
        "Learned research methodologies and best practices"
      ],
      technologies: ["Python", "Machine Learning", "React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            My professional journey in software development and the impact I've made
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-teal-400 to-purple-400 rounded-full" />
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                } mb-16 lg:mb-24`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-slate-900 z-10"
                  style={{
                    background: `linear-gradient(135deg, ${
                      exp.color.includes('blue') ? '#3b82f6, #1e40af' :
                      exp.color.includes('teal') ? '#14b8a6, #0f766e' :
                      '#9333ea, #7c3aed'
                    })`
                  }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Experience card */}
                <motion.div
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden">
                    {/* Background gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-6">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-blue-400 mb-2">
                            <Building size={18} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              className="flex items-start space-x-2 text-slate-400"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50 hover:bg-slate-600/50 hover:border-blue-400/50 transition-all duration-300"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                degree: "Bachelor of Technology - BTech",
                field: "Computer Science (Artificial Intelligence)",
                institution: "Kakinada Institute of Engineering & Technology (KIET)",
                year: "2021 - 2025",
                grade: "Graduating 2025"
              },
              {
                degree: "Higher Secondary",
                field: "English Medium School",
                institution: "Sasi Junior College",
                year: "2019",
                grade: "Completed 2019"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-teal-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-semibold mb-2">{edu.field}</p>
                  <p className="text-slate-400 mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 text-sm">{edu.year}</span>
                    <span className="text-teal-400 font-semibold text-sm">{edu.grade}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;