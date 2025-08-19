'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'C', 'Java', 'C++', 'HTML/CSS']
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'Node.js', 'Next.js', 'Express.js', 'Tailwind CSS']
    },
    {
      title: 'Tech Tools',
      skills: ['Git/GitHub', 'VS Code']
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
          transition={{ duration: 3.5, repeat: Infinity }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.div>

      {/* Skills Categories */}
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-gradient-to-br from-slate-900/70 to-slate-800/50 border border-slate-700/40 rounded-2xl p-6 backdrop-blur-sm"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -3 }}
          >
            {/* Category Header */}
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.8, type: "tween" }}
              >
                {index === 0 ? '💻' : index === 1 ? '⚡' : '🛠️'}
              </motion.div>
              
              <h3 className="text-xl font-bold text-cyan-400 drop-shadow-lg">
                {category.title}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="px-3 py-2 bg-slate-800/60 text-slate-200 text-sm rounded-lg border border-slate-600/40 font-medium backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5 + index * 0.1 + skillIndex * 0.05 
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                    borderColor: "rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
