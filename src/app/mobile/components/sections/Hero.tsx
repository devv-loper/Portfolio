'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center space-y-8 max-w-lg">
        {/* Animated Logo/Avatar */}
        <motion.div
          className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full flex items-center justify-center text-8xl border-4 border-blue-400/20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            👨‍💻
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold text-blue-400 drop-shadow-lg">
            Dev Soni
          </h1>
          
          {/* Terminal-style subheading */}
          <div className="bg-black/60 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 font-mono text-left">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-400 text-sm ml-2">terminal</span>
            </div>
            
            <div className="space-y-2">
              <div className="text-green-400 text-sm">
                <span className="text-blue-400">dev@portfolio</span>
                <span className="text-slate-200">:</span>
                <span className="text-cyan-400">~</span>
                <span className="text-slate-200">$ whoami</span>
              </div>
              
              <motion.div 
                className="text-slate-200 text-sm min-h-[1.2rem] relative"
              >
                <motion.span
                  className="absolute"
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 8,
                    times: [0, 0.1, 0.8, 1],
                    type: "tween"
                  }}
                >
                  web developer
                </motion.span>
                <motion.span
                  className="absolute"
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 8,
                    times: [0, 0.33, 0.43, 0.8, 1],
                    delay: 4,
                    type: "tween"
                  }}
                >
                  backend developer
                </motion.span>
                <motion.span
                  className="absolute"
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 8,
                    times: [0, 0.66, 0.76, 0.8, 1],
                    delay: 8,
                    type: "tween"
                  }}
                >
                  DSA enthusiast
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-full shadow-lg text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Explore Portfolio</span>
              <motion.span 
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, type: "tween" }}
              >
                ↓
              </motion.span>
            </span>
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="flex justify-center space-x-8 pt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {['💡', '⚡', '🚀', '🎯'].map((icon, index) => (
            <motion.div
              key={index}
              className="text-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 3 + index * 0.5, 
                repeat: Infinity,
                delay: index * 0.4
              }}
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
