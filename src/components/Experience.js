import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Full Stack Developer",
      company: "RCTS LAB",
      location: "Hyderabad, India",
      period: "2023 - 2024",
      type: "Internship",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.",
      achievements: [
        "Improved application performance by 40% through optimization",
        "Led a team of 5 developers on multiple projects",
        "Built microservices architecture serving 100K+ users"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL", "Redis"],
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Senior Full Stack Developer",
      company: "RCTS LAB",
      location: "Hyderabad, India",
      period: "2024 - 2025",
      type: "Internship",
      description: "Developed and maintained multiple web applications for HackStad Website. Collaborated with cross-functional teams to deliver high-quality products on time.",
      achievements: [
        "Built responsive web applications with 99.9% uptime",
        "Integrated third-party APIs and payment gateways",
        "Reduced load times by 50% through code optimization",
        "Maintained legacy codebases and upgraded technologies"
      ],
      technologies: ["React", "Express.js", "MongoDB", "Python", "Django"],
      color: "from-teal-600 to-teal-700"
    },
    {
      title: "Artificial Intelligence Intern",
      company: "Internship Studio",
      location: "Pune, India",
      period: "2024 - 2024",
      type: "Internship",
      description: "Worked on real-world AI and machine learning projects, focusing on data preprocessing, model development, and deployment. Gained practical experience in building intelligent solutions and integrating AI models into applications.",
      achievements: [
        "Built and fine-tuned machine learning models for classification and prediction tasks",
        "Collaborated with the data science team to clean and analyze datasets",
        "Implemented AI features using Python libraries such as Scikit-learn and TensorFlow",
        "Contributed to the deployment of a sentiment analysis model as an API"
      ],
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Jupyter", "Git"],

      color: "from-purple-600 to-purple-700"
    },
    {
  title: "Speech Analytics Intern",
  company: "LRCT LAB",
  location: "Hyderabad, India",
  period: "2024 - 2025",
  type: "Internship",
  description: "Contributed to research and development in speech processing and analytics. Focused on audio data preprocessing, speech-to-text conversion, and extraction of meaningful insights from conversational data.",
  achievements: [
    "Developed a speech-to-text pipeline using pre-trained models",
    "Extracted key conversational features such as pitch, sentiment, and keywords",
    "Worked with large-scale audio datasets and improved preprocessing efficiency",
    "Built visual dashboards to display analytics from speech data"
  ],
  technologies: ["Python", "SpeechRecognition", "PyDub", "NLTK", "Pandas", "Matplotlib", "Git"],
  color: "from-blue-600 to-blue-700"
},
{
  title: "Swecha AI Intern",
  company: "Swecha IIIT-H",
  location: "Hyderabad, India",
  period: "2024 - 2024",
  type: "Internship",
  description: "Worked on socially impactful AI projects involving machine learning and data analysis. Gained hands-on experience with open-source tools, model training, and real-world data challenges in collaborative tech environments.",
  achievements: [
    "Contributed to AI solutions for community-driven applications",
    "Built machine learning models for image and text classification tasks",
    "Collaborated with mentors to implement ethical and inclusive AI practices",
    "Participated in AI workshops and hackathons organized by Swecha"
  ],
  technologies: ["Python", "Scikit-learn", "TensorFlow", "OpenCV", "Pandas", "Matplotlib", "Git"],
  color: "from-green-600 to-green-700"
},{
  title: "Data Analytics Intern",
  company: "Uptoskills",
  location: "Remote / India",
  period: "2024 - 2025",
  type: "Internship",
  description: "Worked on analyzing structured and unstructured data to derive actionable insights. Assisted in data cleaning, exploratory data analysis, and dashboard creation to support business decision-making.",
  achievements: [
    "Cleaned and transformed large datasets for analysis using Python and Excel",
    "Created interactive dashboards using Power BI and Tableau",
    "Performed exploratory data analysis and statistical summaries",
    "Automated data reports to reduce manual work by 30%"
  ],
  technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel", "SQL"],
  color: "from-yellow-600 to-yellow-700"
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
                degree: "Bachelor of Technology",
                field: "Computer Science Engineering",
                institution: "ABC University",
                year: "2018-2022",
                grade: "CGPA: 8.5/10"
              },
              {
                degree: "Higher Secondary",
                field: "Science (PCM)",
                institution: "XYZ School",
                year: "2016-2018",
                grade: "Percentage: 92%"
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
