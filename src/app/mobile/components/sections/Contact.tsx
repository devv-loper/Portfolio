'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      icon: '📧',
      href: 'mailto:dev.work.2906@gmail.com',
      label: 'dev.work.2906@gmail.com'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      href: 'https://github.com/devv-loper',
      label: '@devvsonii'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      href: 'https://linkedin.com/in/devsoni3',
      label: '/in/devvsonii'
    },
    {
      name: 'X (Twitter)',
      icon: '🐦',
      href: 'https://x.com/devv_sonii',
      label: '@devvsonii'
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
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-blue-400 drop-shadow-lg"
          style={{ textShadow: '0 0 10px rgba(59, 130, 246, 0.4)' }}
          animate={{ 
            textShadow: [
              '0 0 10px rgba(59, 130, 246, 0.4)',
              '0 0 15px rgba(59, 130, 246, 0.5)',
              '0 0 10px rgba(59, 130, 246, 0.4)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          Let&apos;s Connect!
        </motion.h2>
      </motion.div>

      {/* Contact Methods */}
      <div className="grid grid-cols-2 gap-3">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.name}
            href={method.href}
            target={method.name !== 'Email' ? '_blank' : '_self'}
            rel={method.name !== 'Email' ? 'noopener noreferrer' : undefined}
            className="block bg-gradient-to-r from-slate-900/80 to-slate-800/60 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm hover:border-blue-400/30 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ y: -2, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <motion.div
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
              >
                {method.icon}
              </motion.div>
              
              <h3 className="text-sm font-bold text-cyan-400">
                {method.name}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        className="text-center pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-slate-400 text-xs">
          Usually respond within 24 hours ⚡
        </p>
      </motion.div>
    </motion.div>
  );
}
