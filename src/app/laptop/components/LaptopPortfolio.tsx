'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import GitHubContributionGrid from './GitHubContributionGrid';

// Deterministic random function to avoid hydration issues
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Sleek Modern Robot with Black + Silver Theme
const ModernRobot = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const maxDistance = 300;
        const normalizedX = Math.max(-1, Math.min(1, deltaX / maxDistance));
        const normalizedY = Math.max(-1, Math.min(1, deltaY / maxDistance));
        
        setMousePosition({ x: normalizedX, y: normalizedY });
      }
    };

    // Typing animation intervals
    const typingInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }, 4000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(typingInterval);
    };
  }, []);

  const handleRobotClick = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <div ref={robotRef} className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative cursor-pointer"
        onClick={handleRobotClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotateY: mousePosition.x * 8,
          rotateX: -mousePosition.y * 5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      >
        {/* Robot Head */}
        <motion.div
          className="relative w-24 h-24 mx-auto mb-3"
          animate={{
            rotateY: mousePosition.x * 15,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 30 }}
        >
          {/* Head Base - Sleek Black with Silver Accents */}
          <div className="w-24 h-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border-2 border-gray-400 shadow-2xl relative overflow-hidden">
            {/* Silver Metal Strips */}
            <div className="absolute top-1 left-1 right-1 h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
            <div className="absolute bottom-1 left-1 right-1 h-1 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
            
            {/* Main Face Screen */}
            <div className="absolute inset-3 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-600 flex items-center justify-center">
              {/* Eyes - Glowing Blue */}
              <div className="flex space-x-3">
                <motion.div
                  className="relative"
                  animate={{
                    x: mousePosition.x * 2,
                    y: mousePosition.y * 2,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                >
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/60 relative">
                    <div className="absolute inset-0.5 bg-white rounded-full opacity-90"></div>
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-cyan-300 rounded-full"></div>
                  </div>
                </motion.div>
                <motion.div
                  className="relative"
                  animate={{
                    x: mousePosition.x * 2,
                    y: mousePosition.y * 2,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                >
                  <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/60 relative">
                    <div className="absolute inset-0.5 bg-white rounded-full opacity-90"></div>
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-cyan-300 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Head Antenna */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <motion.div
                className="w-0.5 h-4 bg-gray-400 rounded-full"
                animate={{ rotateZ: [0, 3, 0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
              </motion.div>
            </div>
            
            {/* Status LEDs */}
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </motion.div>

        {/* Robot Body - Sleek Black Chassis */}
        <motion.div
          className="w-32 h-28 mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border-2 border-gray-400 shadow-2xl relative mb-3"
          animate={{
            scale: [1, 1.01, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {/* Silver Chest Panel */}
          <div className="absolute inset-3 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl border border-gray-600 p-2">
            <div className="flex flex-col items-center justify-center h-full space-y-1">
              {/* Power Core - Glowing Blue */}
              <motion.div
                className="w-4 h-4 bg-blue-500 rounded-full border border-cyan-400 relative"
                animate={{ 
                  boxShadow: ["0 0 8px #3b82f6", "0 0 16px #06b6d4", "0 0 8px #3b82f6"],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="absolute inset-1 bg-cyan-300 rounded-full opacity-70"></div>
              </motion.div>
              
              {/* Status Grid */}
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 h-1 bg-green-400 rounded-sm"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Side Vents - Silver */}
          <div className="absolute left-0.5 top-3 space-y-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-0.5 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="absolute right-0.5 top-3 space-y-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-1.5 h-0.5 bg-gray-400 rounded-full"></div>
            ))}
          </div>
        </motion.div>

        {/* Robot Arms - Articulated Black/Silver */}
        <div className="flex justify-between absolute top-12 -left-10 -right-10">
          {/* Left Arm */}
          <motion.div
            className="relative"
            animate={{
              rotateZ: isTyping ? [
                mousePosition.x * -6, 
                mousePosition.x * -6 - 12, 
                mousePosition.x * -6
              ] : mousePosition.x * -6,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
          >
            <div className="w-4 h-16 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-500 relative">
              {/* Shoulder Joint */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full border border-gray-600"></div>
              {/* Forearm */}
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full border border-gray-600"
                animate={{
                  rotateZ: isTyping ? [0, 15, -8, 12, 0] : 0,
                }}
                transition={{ duration: 0.6, repeat: isTyping ? Infinity : 0 }}
              >
                {/* Hand */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded border border-gray-600"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Arm */}
          <motion.div
            className="relative"
            animate={{
              rotateZ: isTyping ? [
                mousePosition.x * 6, 
                mousePosition.x * 6 + 12, 
                mousePosition.x * 6
              ] : mousePosition.x * 6,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
          >
            <div className="w-4 h-16 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-500 relative">
              {/* Shoulder Joint */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full border border-gray-600"></div>
              {/* Forearm */}
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3 h-12 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full border border-gray-600"
                animate={{
                  rotateZ: isTyping ? [0, -15, 8, -12, 0] : 0,
                }}
                transition={{ duration: 0.8, repeat: isTyping ? Infinity : 0, type: "tween" }}
              >
                {/* Hand */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-500 rounded border border-gray-600"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Robot Legs - Sleek Design */}
        <div className="flex justify-center space-x-4 absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="w-3 h-12 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-600 relative">
            {/* Knee Joint */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full border border-gray-600"></div>
            {/* Foot */}
            <div className="absolute -bottom-0.5 -left-0.5 w-4 h-2 bg-gray-700 rounded-full border border-gray-600"></div>
          </div>
          <div className="w-3 h-12 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-600 relative">
            {/* Knee Joint */}
            <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full border border-gray-600"></div>
            {/* Foot */}
            <div className="absolute -bottom-0.5 -left-0.5 w-4 h-2 bg-gray-700 rounded-full border border-gray-600"></div>
          </div>
        </div>

        {/* Ambient Glow Effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-2xl scale-150"
          animate={{
            scale: [1.4, 1.6, 1.4],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Tech Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${25 + i * 12}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  emoji: string;
}

export default function LaptopPortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollY } = useScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden antialiased">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0f172a] via-black to-[#1e293b] opacity-50" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${seededRandom(i) * 100}%`,
              top: `${seededRandom(i + 1000) * 100}%`,
            }}
            initial={false}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + seededRandom(i + 2000) * 2,
              repeat: Infinity,
              delay: seededRandom(i + 3000) * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="w-full py-4">
          <div className="flex items-center justify-between w-full px-6">
            <div className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/ds-logo-character.png" 
                  alt="Dev Soni Logo" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.h1
                className="text-3xl font-bold text-slate-100 drop-shadow-lg"
                style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.4)' }}
                animate={{ 
                  textShadow: [
                    '0 0 8px rgba(255, 255, 255, 0.4)',
                    '0 0 12px rgba(255, 255, 255, 0.5)',
                    '0 0 8px rgba(255, 255, 255, 0.4)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                initial={false}
              >
                Dev Soni
              </motion.h1>
            </div>
            <div className="flex space-x-8">
              {['about', 'projects', 'skills', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-base font-semibold transition-all duration-300 capitalize relative drop-shadow-lg ${
                    activeSection === section 
                      ? 'text-blue-400' 
                      : 'text-slate-200 hover:text-slate-100'
                  }`}
                  style={{ textShadow: '0 0 4px rgba(255, 255, 255, 0.2)' }}
                  initial={false}
                  whileHover={{ scale: 1.05 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left Side - Terminal */}
            <motion.div
              initial={false}
              className="space-y-8"
            >
              {/* Terminal Style Animation */}
              <div className="bg-black/80 backdrop-blur-sm border border-slate-700/50 rounded-lg p-8 font-mono text-left max-w-2xl">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-base ml-4">terminal</span>
                </div>
                <div className="space-y-3">
                  <div className="text-green-400 text-lg">
                    <span className="text-blue-400">devv_sonii@dev_lopper</span>
                    <span className="text-slate-200">:</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-slate-200">$ whoami</span>
                  </div>
                  <motion.div 
                    className="text-slate-200 min-h-[2rem] relative text-lg"
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
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Portfolio</span>
                <motion.span 
                  className="ml-2 text-xl"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Right Side - 3D Robot Character */}
            <motion.div 
              className="flex justify-center lg:justify-end"
              initial={false}
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Modern Robot Container */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                  <ModernRobot />
                </div>

                {/* Floating Tech Elements */}
                <motion.div
                  className="absolute -top-4 -left-8 text-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: 0.5
                  }}
                >
                  💡
                </motion.div>
                
                <motion.div
                  className="absolute -top-2 -right-8 text-xl"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -15, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    delay: 1
                  }}
                >
                  ⚡
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-6 text-2xl"
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 20, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity,
                    delay: 1.5,
                    type: "tween"
                  }}
                >
                  🚀
                </motion.div>

                {/* Interactive Arrow */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-4xl"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span
                    className="inline-block text-blue-400"
                    whileHover={{ 
                      rotate: 180,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    ↗️
                  </motion.span>
                </motion.div>

                {/* Background Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform scale-150 group-hover:scale-175 transition-transform duration-500"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GitHub Contributions Section */}
      <section id="github" className="flex items-center py-8">
        <div className="max-w-6xl mx-auto px-8">
          <GitHubContributionGrid />
        </div>
      </section>

  <About />

  <Projects />

      {/* Skills Section */}
  <Skills />

      {/* Contact Section */}
  <Contact />
    </div>
  );
} 