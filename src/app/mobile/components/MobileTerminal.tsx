'use client';

import { motion } from 'framer-motion';

export default function MobileTerminal() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="space-y-6 px-4 py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Terminal - Exact same as laptop */}
      <div className="bg-black/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 font-mono text-left">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-slate-400 text-sm ml-2">terminal</span>
        </div>
        <div className="space-y-2">
          <div className="text-green-400 text-sm">
            <span className="text-blue-400">devv_sonii@dev_lopper</span>
            <span className="text-slate-200">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-200">$ whoami</span>
          </div>
          <motion.div 
            className="text-slate-200 min-h-[1.5rem] relative text-sm"
            key="terminal-output"
          >
            <motion.span
              className="absolute"
              animate={{
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                times: [0, 0.1, 0.8, 1],
              }}
            >
              web developer
            </motion.span>
            <motion.span
              className="absolute"
              animate={{
                opacity: [0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                times: [0, 0.33, 0.43, 0.8, 1],
                delay: 6,
              }}
            >
              backend developer
            </motion.span>
            <motion.span
              className="absolute"
              animate={{
                opacity: [0, 0, 1, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatDelay: 12,
                times: [0, 0.66, 0.76, 0.8, 1],
                delay: 12,
              }}
            >
              DSA enthusiast
            </motion.span>
          </motion.div>
        </div>
      </div>
      
      {/* Explore Portfolio Button */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          onClick={() => scrollToSection('home')}
          className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-full text-sm transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore Portfolio</span>
          <motion.span 
            className="ml-2"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, type: "tween" }}
          >
            ↓
          </motion.span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
