import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  GraduationCap,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  accent: string;
  dotColor: string;
}

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences: ExperienceItem[] = [
    {
      title: 'AI/ML/DA/DS Technical Trainer',
      company: 'Innoknowvex',
      location: 'Bangalore, Karnataka, India',
      period: 'July 2026 - Present',
      type: 'Full-time',
      description:
        'Delivering hands-on training across Artificial Intelligence, Machine Learning, Data Analytics, and Data Science. Designing curriculum, conducting workshops, and mentoring learners to build real-world AI/DS projects.',
      achievements: [
        'Designed and delivered training modules for AI, ML, DA, and DS',
        'Mentored learners through end-to-end ML and data science projects',
        'Conducted interactive workshops on Python, NLP, and Computer Vision',
        'Built practical curriculum bridging theory and industry applications',
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Power BI', 'NLP', 'Data Science'],
      accent: 'from-amber-500 to-orange-500',
      dotColor: 'bg-amber-400',
    },
    {
      title: 'Senior Developer Intern | Research Intern',
      company: 'RCTS, IIIT-Hyderabad',
      location: 'Kakinada, Andhra Pradesh, India',
      period: 'August 2024 - April 2025',
      type: 'Research Internship',
      description:
        'Leading ML/NLP research projects at IIIT Hyderabad\'s Research Center. Working on cutting-edge AI solutions, building intelligent systems, and collaborating with research teams on innovative projects.',
      achievements: [
        'Developed ML/NLP models for real-world applications',
        'Collaborated with research teams on AI projects',
        'Built scalable web applications using MERN stack',
        'Contributed to research publications and technical documentation',
      ],
      technologies: ['Python', 'NLP', 'Machine Learning', 'React', 'Node.js', 'MongoDB', 'TensorFlow'],
      accent: 'from-blue-500 to-cyan-500',
      dotColor: 'bg-blue-400',
    },
    {
      title: 'Django Intern',
      company: 'Perpex',
      location: 'Remote, India',
      period: 'July 2025 - September 2025',
      type: 'Internship',
      description:
        'Developed backend applications using Django framework. Built RESTful APIs, implemented database models, and created server-side logic for web applications.',
      achievements: [
        'Built robust backend systems with Django',
        'Designed and implemented RESTful APIs',
        'Optimized database queries for better performance',
        'Integrated third-party services and APIs',
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'Git'],
      accent: 'from-emerald-500 to-green-600',
      dotColor: 'bg-emerald-400',
    },
    {
      title: 'Android Developer',
      company: 'EduSkills Foundation',
      location: 'Hyderabad, Telangana, India',
      period: 'January 2025 - March 2025',
      type: 'Internship',
      description:
        'Developed Android applications using Java and Android SDK. Created user interfaces, implemented app logic, and integrated backend services for mobile apps.',
      achievements: [
        'Built native Android applications from scratch',
        'Implemented modern Android UI/UX patterns',
        'Integrated RESTful APIs and cloud services',
        'Optimized app performance and user experience',
      ],
      technologies: ['Java', 'Android SDK', 'XML', 'REST APIs', 'Git'],
      accent: 'from-teal-500 to-cyan-600',
      dotColor: 'bg-teal-400',
    },
    {
      title: 'Data Analyst',
      company: 'UptoSkills',
      location: 'Remote, India',
      period: 'December 2024 - March 2025',
      type: 'Internship',
      description:
        'Analyzed structured and unstructured data to derive actionable insights. Created dashboards, performed statistical analysis, and automated reporting processes.',
      achievements: [
        'Cleaned and transformed large datasets using Python and Excel',
        'Created interactive dashboards with Power BI and Tableau',
        'Performed exploratory data analysis and statistical summaries',
        'Automated data reports reducing manual work by 30%',
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Excel', 'SQL', 'Matplotlib'],
      accent: 'from-yellow-500 to-amber-600',
      dotColor: 'bg-yellow-400',
    },
    {
      title: 'Cloud Computing Intern',
      company: 'Learnflu',
      location: 'Bengaluru, Karnataka, India',
      period: 'November 2024 - January 2025',
      type: 'Internship',
      description:
        'Worked with cloud platforms and technologies. Deployed applications, managed cloud infrastructure, and implemented cloud-based solutions.',
      achievements: [
        'Deployed applications on Google Cloud Platform',
        'Managed cloud infrastructure and resources',
        'Implemented CI/CD pipelines for automated deployments',
        'Optimized cloud costs and performance',
      ],
      technologies: ['GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Cloud Storage'],
      accent: 'from-sky-500 to-blue-600',
      dotColor: 'bg-sky-400',
    },
    {
      title: 'Java Full Stack Developer',
      company: 'EduSkills Foundation',
      location: 'Hyderabad, Telangana, India',
      period: 'October 2024 - December 2024',
      type: 'Internship',
      description:
        'Worked on full-stack Java applications. Built both frontend and backend components using Java technologies, Spring Boot, and modern web frameworks.',
      achievements: [
        'Developed full-stack applications using Java and Spring Boot',
        'Created responsive web interfaces with modern frameworks',
        'Implemented secure authentication and authorization',
        'Built RESTful web services and microservices',
      ],
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'JavaScript', 'REST APIs'],
      accent: 'from-red-500 to-rose-600',
      dotColor: 'bg-red-400',
    },
    {
      title: 'Speech Processing Intern',
      company: 'Speech Processing Lab, IIITH',
      location: 'Hyderabad, Telangana, India',
      period: 'August 2024 - January 2025',
      type: 'Research Internship',
      description:
        'Worked on speech processing and analytics research. Developed speech-to-text pipelines, extracted conversational features, and built analytics dashboards.',
      achievements: [
        'Developed speech-to-text pipeline using pre-trained models',
        'Extracted conversational features like pitch and sentiment',
        'Worked with large-scale audio datasets',
        'Built visual dashboards for speech analytics',
      ],
      technologies: ['Python', 'SpeechRecognition', 'PyDub', 'NLTK', 'Pandas', 'Matplotlib'],
      accent: 'from-teal-400 to-teal-600',
      dotColor: 'bg-teal-400',
    },
    {
      title: 'Web Development Intern',
      company: 'EduSkills Foundation',
      location: 'Hyderabad, Telangana, India',
      period: 'June 2024 - September 2024',
      type: 'Internship',
      description:
        'Built responsive web applications using modern frontend and backend technologies. Worked on creating user-friendly interfaces and implementing server-side logic.',
      achievements: [
        'Developed responsive websites with HTML, CSS, and JavaScript',
        'Built dynamic web applications using React',
        'Implemented backend APIs with Node.js and Express',
        'Deployed applications to cloud platforms',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
      accent: 'from-blue-400 to-indigo-500',
      dotColor: 'bg-blue-400',
    },
    {
      title: 'AI/ML Intern',
      company: 'Internship Studio',
      location: 'Pune, Maharashtra, India',
      period: 'August 2024 - October 2024',
      type: 'Internship',
      description:
        'Worked on AI and machine learning projects. Built ML models, performed data preprocessing, and deployed AI solutions for real-world applications.',
      achievements: [
        'Built machine learning models for classification tasks',
        'Implemented AI features using TensorFlow and Scikit-learn',
        'Collaborated with data science teams on projects',
        'Deployed sentiment analysis model as an API',
      ],
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
      accent: 'from-orange-500 to-red-500',
      dotColor: 'bg-orange-400',
    },
    {
      title: 'Machine Learning Mentor',
      company: 'K-HUB (KIET)',
      location: 'Kakinada, Andhra Pradesh, India',
      period: 'October 2023 - March 2025',
      type: 'Mentorship',
      description:
        'Mentored students in Machine Learning concepts and projects. Conducted workshops, guided project development, and helped students build ML solutions.',
      achievements: [
        'Mentored 50+ students in ML and AI concepts',
        'Conducted hands-on workshops on ML algorithms',
        'Guided students through real-world ML projects',
        'Helped students prepare for AI/ML careers',
      ],
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter', 'Data Science'],
      accent: 'from-fuchsia-500 to-pink-600',
      dotColor: 'bg-fuchsia-400',
    },
    {
      title: 'Summer Intern',
      company: 'Swecha Telangana',
      location: 'Hyderabad, Telangana, India',
      period: 'May 2024 - June 2024',
      type: 'Internship',
      description:
        'Worked on socially impactful AI projects. Built ML models for community applications and contributed to open-source AI initiatives.',
      achievements: [
        'Contributed to AI solutions for community-driven applications',
        'Built ML models for image and text classification',
        'Implemented ethical and inclusive AI practices',
        'Participated in AI workshops and hackathons',
      ],
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'Pandas'],
      accent: 'from-green-500 to-emerald-600',
      dotColor: 'bg-green-400',
    },
    {
      title: 'Junior Developer Intern | Research Intern',
      company: 'RCTS, IIIT-Hyderabad',
      location: 'Hyderabad, Telangana, India',
      period: 'August 2023 - April 2024',
      type: 'Research Internship',
      description:
        'Started research career at IIIT Hyderabad. Worked on AI/ML projects, learned research methodologies, and contributed to technical solutions.',
      achievements: [
        'Gained hands-on experience with AI/ML research',
        'Contributed to multiple research projects',
        'Developed full-stack applications for research tools',
        'Learned research methodologies and best practices',
      ],
      technologies: ['Python', 'Machine Learning', 'React', 'Node.js', 'MongoDB'],
      accent: 'from-blue-500 to-blue-700',
      dotColor: 'bg-blue-500',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology - BTech',
      field: 'Computer Science (Artificial Intelligence)',
      institution: 'Kakinada Institute of Engineering & Technology (KIET)',
      year: '2021 - 2025',
      grade: 'Graduating 2025',
    },
    {
      degree: 'Higher Secondary',
      field: 'English Medium School',
      institution: 'Sasi Junior College',
      year: '2019',
      grade: 'Completed 2019',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 mb-4">
            <Briefcase size={14} />
            Career Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full" />
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto text-sm md:text-base">
            {experiences.length} roles across research, full-stack, mobile, cloud, and data science — a journey of continuous learning and growth.
          </p>
        </motion.div>

        {/* Experience List — Split Layout */}
        <div className="max-w-5xl mx-auto space-y-3">
          {experiences.map((exp, index) => {
            const isOpen = expandedIndex === index;
            const isCurrent = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
                viewport={{ once: true }}
              >
                <div
                  className={`group rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-blue-400/30 bg-slate-800/50 shadow-xl shadow-blue-500/5'
                      : 'border-slate-700/40 bg-slate-800/20 hover:border-slate-600/50 hover:bg-slate-800/35'
                  }`}
                >
                  {/* Compact Row */}
                  <button
                    onClick={() => setExpandedIndex(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 p-4 md:p-5 text-left"
                  >
                    {/* Accent bar */}
                    <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${exp.accent} flex-shrink-0`} />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full text-white bg-gradient-to-r ${exp.accent}`}>
                          {exp.type}
                        </span>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-400/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white leading-snug truncate">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-0.5 mt-1 text-xs md:text-sm text-slate-400">
                        <span className="flex items-center gap-1.5 text-blue-300 font-medium">
                          <Building2 size={13} />
                          {exp.company}
                        </span>
                        <span className="hidden sm:flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="hidden md:flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Expand arrow */}
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex-shrink-0 p-1.5 rounded-lg bg-slate-700/40 text-slate-400 group-hover:text-slate-200"
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 md:px-5 pb-5 pt-1 space-y-5">
                          {/* Mobile-only meta */}
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 sm:hidden">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={13} />
                              {exp.location}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>

                          {/* Achievements */}
                          <div>
                            <h4 className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-3">
                              <CheckCircle2 size={14} className="text-blue-400" />
                              Key Achievements
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {exp.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-slate-400">
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.accent} mt-2 flex-shrink-0`} />
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider mb-3">
                              <Sparkles size={14} className="text-cyan-400" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 bg-slate-700/40 text-slate-300 rounded-lg text-xs font-medium border border-slate-600/40"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 border border-teal-400/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 mb-4">
              <GraduationCap size={14} />
              Academic Background
            </div>
            <h3 className="text-3xl font-bold">Education</h3>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/55 hover:border-slate-600/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-teal-500/20 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-300" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-blue-300 font-semibold text-sm mb-2">{edu.field}</p>
                <p className="text-slate-400 text-sm mb-3">{edu.institution}</p>
                <div className="flex justify-between items-center pt-3 border-t border-slate-700/40">
                  <span className="text-slate-500 text-sm flex items-center gap-1.5">
                    <Calendar size={14} />
                    {edu.year}
                  </span>
                  <span className="text-teal-300 font-semibold text-sm">{edu.grade}</span>
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
