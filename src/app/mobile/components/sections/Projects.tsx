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
      tech: ['Python', 'Machine Learning', 'express','Flask', 'React'],
      github: 'https://github.com/devvsonii/phishshield',
      live: '',
      emoji: '🛡️'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'Personal portfolio website with device-specific experiences. Features smooth animations, interactive elements, and responsive design.',
      tech: ['Next.js', 'Framer Motion', 'TypeScript', 'Tailwind'],
      github: 'https://github.com/devvsonii/vibe-portfolio',
      live: '',
      emoji: '🎨'
    },
    {
      id: 'devtasks',
      title: 'DevTasks',
      description: 'Modern task management application for developers. Currently in development with real-time collaboration and GitHub integration planned.',
      tech: ['React', 'Javascript', 'Node.js', 'MongoDB'],
      github: 'https://github.com/devvsonii/devtasks',
      live: '',
      emoji: '🚧'
    }
  ];

  return (
    <motion.div
      className="space-y-8 px-4 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2 
          className="text-3xl font-bold text-blue-400 drop-shadow-lg"
          style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.4)' }}
          animate={{ 
            textShadow: [
              '0 0 8px rgba(59, 130, 246, 0.4)',
              '0 0 12px rgba(59, 130, 246, 0.5)',
              '0 0 8px rgba(59, 130, 246, 0.4)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.1)" }}
          >
            {/* Project Header */}
            <div className="flex items-start space-x-4 mb-4">
              <motion.div
                className="text-4xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                {project.emoji}
              </motion.div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-cyan-400">
                    {project.title}
                  </h3>
                  
                  {/* Project Number Badge */}
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {/* In Development Badge for DevTasks */}
                {project.id === 'devtasks' && (
                  <div className="inline-block px-2 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold rounded-full mb-2 animate-pulse">
                    🚀 IN DEVELOPMENT
                  </div>
                )}
              </div>
            </div>

            {/* Project Description */}
            <p className="text-slate-200 text-sm leading-relaxed mb-4">
              {project.description}
              {project.id === 'devtasks' && (
                <span className="text-orange-400 font-medium"> (Work in Progress)</span>
              )}
            </p>

            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-slate-800/70 text-slate-200 text-xs rounded-full border border-slate-600/50 font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md ${
                project.id === 'devtasks' 
                  ? 'bg-gradient-to-r from-orange-600/80 to-yellow-600/80 hover:from-orange-500 hover:to-yellow-500 text-white' 
                  : 'bg-gradient-to-r from-blue-600/80 to-cyan-600/80 hover:from-blue-500 hover:to-cyan-500 text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{project.id === 'devtasks' ? 'View Progress' : 'View Code'}</span>
              <motion.span 
                className="text-sm"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div 
        className="text-center pt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-slate-800/60 to-slate-700/60 rounded-xl border border-slate-600/40 backdrop-blur-sm">
          <p className="text-slate-200 font-medium text-sm mb-2">
            More projects coming soon...
          </p>
          <div className="flex justify-center space-x-1">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
