'use client';

import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  emoji: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 'phishshield',
      title: 'PhishShield',
      description: 'Hackathon project - AI-powered phishing detection tool that analyzes URLs and emails to identify potential security threats.',
      tech: ['Python', 'Machine Learning','express', 'Flask', 'React'],
      github: 'https://github.com/devv-loper/PhishShield',
      live: '',
      emoji: '🛡️'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Personal portfolio website with device-specific experiences. Features smooth animations, interactive elements, and responsive design.',
      tech: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/devv-loper/vibe-portfolio',
      live: '',
      emoji: '🎨'
    },
    {
      id: 'devtasks',
      title: 'DevTasks',
      description: 'Modern task management application for developers. Currently in development with real-time collaboration and GitHub integration planned.',
      tech: ['React', 'Javacript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/devv-loper/DevTasks',
      live: '',
      emoji: '🚧'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={false}
          className="space-y-16"
        >
          <motion.h2 
            className="text-5xl font-bold text-center text-blue-400 drop-shadow-lg"
            style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.3)' }}
            initial={false}
            animate={{ 
              textShadow: [
                '0 0 8px rgba(59, 130, 246, 0.3)',
                '0 0 12px rgba(59, 130, 246, 0.4)',
                '0 0 8px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            Featured Projects
          </motion.h2>
          
          {/* Project Timeline Layout */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 opacity-30"></div>
            
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={false}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <motion.div
                      className="relative bg-gradient-to-br from-slate-900/70 to-slate-800/50 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-500 group"
                      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)" }}
                    >
                      {/* Project Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      {/* In Development Badge for DevTasks */}
                      {project.id === 'devtasks' && (
                        <div className="absolute -top-2 -left-2 px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                          🚀 IN DEVELOPMENT
                        </div>
                      )}
                      
                      {/* Project Content */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <span className="text-5xl">{project.emoji}</span>
                          <div>
                            <h3 className="text-3xl font-bold text-cyan-400 drop-shadow-lg" style={{ textShadow: '0 0 6px rgba(34, 211, 238, 0.3)' }}>
                              {project.title}
                              {project.id === 'devtasks' && (
                                <span className="ml-3 text-lg text-orange-400 font-medium">(Work in Progress)</span>
                              )}
                            </h3>
                            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mt-2 rounded-full"></div>
                          </div>
                        </div>
                        
                        <p className="text-lg text-slate-200 leading-relaxed font-medium" style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.1)' }}>
                          {project.description}
                        </p>
                        
                        {/* Tech Stack with Modern Design */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Tech Stack</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-4 py-2 bg-gradient-to-r from-slate-800/80 to-slate-700/80 text-slate-100 text-sm rounded-xl border border-slate-600/30 font-medium backdrop-blur-sm"
                                style={{ textShadow: '0 0 2px rgba(255, 255, 255, 0.2)' }}
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                                transition={{ duration: 0.2 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Button */}
                        <div className="pt-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg backdrop-blur-sm group/btn ${
                              project.id === 'devtasks' 
                                ? 'bg-gradient-to-r from-orange-600/80 to-yellow-600/80 hover:from-orange-500 hover:to-yellow-500 text-white hover:shadow-orange-500/25' 
                                : 'bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white hover:shadow-blue-500/25'
                            }`}
                          >
                            <span className="font-medium">
                              {project.id === 'devtasks' ? 'View Progress' : 'View Source Code'}
                            </span>
                            <motion.span 
                              className="text-lg group-hover/btn:translate-x-1 transition-transform duration-300"
                            >
                              →
                            </motion.span>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-4 border-slate-900 shadow-lg z-10">
                    <div className="w-full h-full bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="text-center pt-12"
            initial={false}
            whileHover={{ scale: 1.02 }}
          >
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl border border-slate-600/30 backdrop-blur-sm">
              <p className="text-slate-200 font-medium mb-2" style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.1)' }}>
                More projects coming soon...
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
