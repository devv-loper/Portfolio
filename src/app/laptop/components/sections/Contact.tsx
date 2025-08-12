'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={false}
          className="space-y-12"
        >
          <motion.h2 
            className="text-6xl font-bold text-blue-400 drop-shadow-lg"
            style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.4)' }}
            initial={false}
            animate={{ 
              textShadow: [
                '0 0 10px rgba(59, 130, 246, 0.4)',
                '0 0 15px rgba(59, 130, 246, 0.5)',
                '0 0 10px rgba(59, 130, 246, 0.4)'
              ]
            }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            Let&apos;s build.
          </motion.h2>
          
          <p className="text-xl text-slate-200 max-w-2xl mx-auto font-medium drop-shadow-lg" style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.2)' }}>
            Available for new opportunities and collaborations!
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:dev.work.2906@gmail.com"
              className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-slate-200 px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-blue-500/20 hover:scale-105 border border-slate-600/50 font-medium drop-shadow-lg"
              style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.2)' }}
            >
              <span className="text-xl">📧</span>
              <span>Email</span>
            </a>
            <a
              href="https://github.com/devv-loper"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-slate-200 px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-blue-500/20 hover:scale-105 border border-slate-600/50 font-medium drop-shadow-lg"
              style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.2)' }}
            >
              <span className="text-xl">🐙</span>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/devsoni3"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-slate-200 px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-blue-500/20 hover:scale-105 border border-slate-600/50 font-medium drop-shadow-lg"
              style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.2)' }}
            >
              <span className="text-xl">💼</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://x.com/devv_sonii"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-slate-200 px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-blue-500/20 hover:scale-105 border border-slate-600/50 font-medium drop-shadow-lg"
              style={{ textShadow: '0 0 3px rgba(255, 255, 255, 0.2)' }}
            >
              <span className="text-xl">🐦</span>
              <span>X (Twitter)</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
