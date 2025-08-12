'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={false}
          className="text-center space-y-8"
        >
          <motion.h2 
            className="text-5xl font-bold text-blue-400 drop-shadow-lg"
            style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.3)' }}
            initial={false}
            animate={{ 
              textShadow: [
                '0 0 8px rgba(59, 130, 246, 0.3)',
                '0 0 12px rgba(59, 130, 246, 0.4)',
                '0 0 8px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            About
          </motion.h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl text-slate-200 leading-relaxed font-medium drop-shadow-lg" style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.1)' }}>
              Hey there! I'm a passionate full-stack developer who loves turning ideas into reality. 
              When I'm not coding, you'll find me listening to music or trying to contribute in open source.
            </p>
            <p className="text-xl text-slate-200 leading-relaxed font-medium drop-shadow-lg" style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.1)' }}>
              I believe in clean code, user-centered design, and building products that make a real impact. 
              Always excited to learn something new and take on challenging projects!
            </p>
            <p className="text-xl text-slate-200 leading-relaxed font-medium drop-shadow-lg" style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.1)' }}>
              "Even the word Development has my name in it LOL!"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
