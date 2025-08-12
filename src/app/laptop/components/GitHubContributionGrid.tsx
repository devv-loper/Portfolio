'use client';

import { motion } from 'framer-motion';

export default function GitHubContributionGrid() {
  // Better pattern for "DEVELOPER" - cleaner and more readable
  const developerPattern = [
    // D    E    V    E    L    O    P    E    R
    [1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0],
    [1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1],
    [1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0],
    [1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1],
    [1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1],
    [1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1],
    [1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1],
  ];

  const getContributionLevel = (value: number) => {
    if (value === 0) return 'bg-slate-800 border-slate-700/50';
    return 'bg-green-500 border-green-400 shadow-sm shadow-green-500/40';
  };

  const handleGridClick = () => {
    window.open('https://github.com/devv-loper', '_blank');
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-6">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="text-4xl font-bold text-blue-400 drop-shadow-lg"
            style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.3)' }}
            animate={{ 
              textShadow: [
                '0 0 8px rgba(59, 130, 246, 0.3)',
                '0 0 12px rgba(59, 130, 246, 0.4)',
                '0 0 8px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            GitHub Contributions
          </motion.h3>
          {/* <p className="text-lg text-slate-300 font-medium">
            My coding journey spelled out in commits
          </p> */}
        </motion.div>
        
        <div className="flex justify-center">
          <div 
            className="grid gap-1 p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-600/50 shadow-2xl backdrop-blur-sm cursor-pointer hover:border-blue-400/50 transition-all duration-300" 
            style={{ gridTemplateColumns: 'repeat(45, 1fr)' }}
            onClick={handleGridClick}
            title="Click to visit my GitHub profile"
          >
            {developerPattern.map((row, rowIndex) =>
              row.map((value, colIndex) => (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-3 h-3 rounded border ${getContributionLevel(value)}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (rowIndex * row.length + colIndex) * 0.002,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                />
              ))
            )}
          </div>
        </div>
        
        <div className="flex justify-center items-center space-x-4 text-sm text-slate-400">
          <span className="font-medium">Less</span>
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 bg-slate-800 border border-slate-700 rounded"></div>
            <div className="w-3 h-3 bg-green-200 border border-green-300 rounded"></div>
            <div className="w-3 h-3 bg-green-400 border border-green-500 rounded"></div>
            <div className="w-3 h-3 bg-green-500 border border-green-600 rounded"></div>
            <div className="w-3 h-3 bg-green-600 border border-green-700 rounded"></div>
          </div>
          <span className="font-medium">More</span>
        </div>
      </div>
    </motion.div>
  );
}
