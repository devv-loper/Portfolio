'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-4 py-3 max-w-md mx-auto">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <motion.div
            className="w-8 h-8 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/ds-logo-character.png" 
              alt="Dev Soni Logo" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.h1 
            className="text-lg font-bold text-white drop-shadow-lg"
            style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' }}
          >
            Dev Soni
          </motion.h1>
        </div>

        {/* Hamburger Menu */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col space-y-1 p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-6 h-0.5 bg-white rounded"
            animate={{ 
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 6 : 0
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white rounded"
            animate={{ 
              opacity: isMenuOpen ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white rounded"
            animate={{ 
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -6 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-gray-900/98 backdrop-blur-sm border-b border-gray-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-md mx-auto py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-white hover:text-blue-400 hover:bg-gray-800/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
