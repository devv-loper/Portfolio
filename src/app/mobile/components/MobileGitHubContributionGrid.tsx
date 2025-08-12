'use client';

import { motion } from 'framer-motion';

export default function MobileGitHubContributionGrid() {
  // Better pattern for "DEVELOPER" - more readable
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
    if (value === 0) return 'bg-slate-800 border-slate-700';
    return 'bg-green-500 border-green-400 shadow-sm shadow-green-500/30';
  };

  const handleGridClick = () => {
    window.open('https://github.com/devvsonii', '_blank');
  };

  return (
    <motion.div
      className="w-full px-4 py-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="space-y-4">
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-blue-400 drop-shadow-lg">
            GitHub Contributions
          </h3>
          <p className="text-sm text-slate-300">
            My coding journey spelled out in commits
          </p>
        </motion.div>
        
        <div className="flex justify-center px-2">
          <div 
            className="grid gap-0.5 p-3 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-slate-600/50 shadow-xl w-full max-w-sm cursor-pointer hover:border-blue-400/50 transition-all duration-300" 
            style={{ gridTemplateColumns: 'repeat(45, minmax(0, 1fr))' }}
            onClick={handleGridClick}
            title="Click to visit my GitHub profile"
          >
            {developerPattern.map((row, rowIndex) =>
              row.map((value, colIndex) => (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-1.5 h-1.5 rounded border ${getContributionLevel(value)}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (rowIndex * row.length + colIndex) * 0.003,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.3 }}
                />
              ))
            )}
          </div>
        </div>
        
        <div className="flex justify-center items-center space-x-3 text-xs text-slate-400">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-1.5 h-1.5 bg-slate-800 border border-slate-700 rounded"></div>
            <div className="w-1.5 h-1.5 bg-green-200 border border-green-300 rounded"></div>
            <div className="w-1.5 h-1.5 bg-green-400 border border-green-500 rounded"></div>
            <div className="w-1.5 h-1.5 bg-green-500 border border-green-600 rounded"></div>
            <div className="w-1.5 h-1.5 bg-green-600 border border-green-700 rounded"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </motion.div>
  );
}
