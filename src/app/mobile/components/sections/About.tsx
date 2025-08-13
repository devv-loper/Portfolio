'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="space-y-8 px-4 py-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-3xl font-bold text-center text-blue-400 drop-shadow-lg"
        style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.4)' }}
      >
        About Me
      </motion.h2>
      
      <div className="space-y-6 text-slate-200 text-center">
        <motion.p 
          className="text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey there! I&apos;m a passionate developer who loves turning ideas into reality. 
          When I&apos;m not coding, you&apos;ll find me listening to music or trying to contribute in open source.
        </motion.p>
        
        <motion.p 
          className="text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I believe in clean code, user-centered design, and building products that make&apos;s a real impact.
        </motion.p>
        
        <motion.p 
          className="text-base leading-relaxed font-medium text-cyan-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          "Even the word Development has my name in it LOL!"
        </motion.p>
      </div>
    </motion.div>
  );
}
