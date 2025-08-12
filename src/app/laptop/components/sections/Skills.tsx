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
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={false}
          className="space-y-12"
        >
          <motion.h2 
            className="text-4xl font-bold text-center text-blue-400 drop-shadow-lg"
            style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.3)' }}
            initial={false}
            animate={{ 
              textShadow: [
                '0 0 8px rgba(59, 130, 246, 0.3)',
                '0 0 12px rgba(59, 130, 246, 0.4)',
                '0 0 8px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Skills
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gradient-to-br from-slate-900/30 to-slate-800/20 border border-slate-700/30 rounded-xl p-6"
                initial={false}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4 drop-shadow-lg" style={{ textShadow: '0 0 4px rgba(34, 211, 238, 0.3)' }}>{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-800/50 text-slate-200 text-sm rounded-full border border-slate-700/50 font-medium drop-shadow-lg"
                      style={{ textShadow: '0 0 2px rgba(255, 255, 255, 0.2)' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
