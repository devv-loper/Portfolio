'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function MobileModernRobot() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (robotRef.current && e.touches[0]) {
        const rect = robotRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.touches[0].clientX - centerX;
        const deltaY = e.touches[0].clientY - centerY;
        
        const maxDistance = 200;
        const normalizedX = Math.max(-1, Math.min(1, deltaX / maxDistance));
        const normalizedY = Math.max(-1, Math.min(1, deltaY / maxDistance));
        
        setMousePosition({ x: normalizedX, y: normalizedY });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (robotRef.current) {
        const rect = robotRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const maxDistance = 200;
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
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      clearInterval(typingInterval);
    };
  }, []);

  const handleRobotClick = () => {
    window.open('/Dev_CV', '_blank');
  };

  return (
    <motion.div
      className="flex flex-col items-center space-y-4 py-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Robot */}
      <div ref={robotRef} className="relative w-full h-48 flex items-center justify-center">
        {/* Tooltip */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity pointer-events-none z-10">
          Tap to view resume
        </div>
        
        <motion.div
          className="relative cursor-pointer group scale-75"
          onClick={handleRobotClick}
          whileHover={{ scale: 0.8 }}
          whileTap={{ scale: 0.7 }}
          animate={{
            rotateY: mousePosition.x * 6,
            rotateX: -mousePosition.y * 4,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        >
          {/* Robot Head */}
          <motion.div
            className="relative w-16 h-16 mx-auto mb-2"
            animate={{
              rotateY: mousePosition.x * 12,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 30 }}
          >
            {/* Head Base */}
            <div className="w-16 h-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl border-2 border-gray-400 shadow-xl relative overflow-hidden">
              {/* Silver Strips */}
              <div className="absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
              <div className="absolute bottom-0.5 left-0.5 right-0.5 h-0.5 bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"></div>
              
              {/* Face Screen */}
              <div className="absolute inset-2 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-gray-600 flex items-center justify-center">
                {/* Eyes */}
                <div className="flex space-x-2">
                  <motion.div
                    className="relative"
                    animate={{
                      x: mousePosition.x * 1.5,
                      y: mousePosition.y * 1.5,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400/60 relative">
                      <div className="absolute inset-0.5 bg-white rounded-full opacity-90"></div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="relative"
                    animate={{
                      x: mousePosition.x * 1.5,
                      y: mousePosition.y * 1.5,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400/60 relative">
                      <div className="absolute inset-0.5 bg-white rounded-full opacity-90"></div>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Antenna */}
              <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2">
                <motion.div
                  className="w-0.5 h-3 bg-gray-400 rounded-full"
                  animate={{ rotateZ: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-red-500 rounded-full animate-pulse shadow-sm shadow-red-500/50"></div>
                </motion.div>
              </div>
              
              {/* Status LEDs */}
              <div className="absolute top-1 left-1 w-1 h-1 bg-green-400 rounded-full animate-pulse shadow-sm shadow-green-400/50"></div>
              <div className="absolute top-1 right-1 w-1 h-1 bg-blue-400 rounded-full animate-pulse shadow-sm shadow-blue-400/50" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </motion.div>

          {/* Robot Body */}
          <motion.div
            className="w-20 h-18 mx-auto bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-xl border-2 border-gray-400 shadow-xl relative mb-2"
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Chest Panel */}
            <div className="absolute inset-2 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg border border-gray-600 p-1">
              <div className="flex flex-col items-center justify-center h-full space-y-1">
                {/* Power Core */}
                <motion.div
                  className="w-3 h-3 bg-blue-500 rounded-full border border-cyan-400 relative"
                  animate={{ 
                    boxShadow: ["0 0 6px #3b82f6", "0 0 12px #06b6d4", "0 0 6px #3b82f6"],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="absolute inset-0.5 bg-cyan-300 rounded-full opacity-70"></div>
                </motion.div>
                
                {/* Status Grid */}
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 h-0.5 bg-green-400 rounded-sm"
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
            
            {/* Side Vents */}
            <div className="absolute left-0.5 top-2 space-y-0.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-0.5 bg-gray-400 rounded-full"></div>
              ))}
            </div>
            <div className="absolute right-0.5 top-2 space-y-0.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-0.5 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </motion.div>

          {/* Robot Arms */}
          <div className="flex justify-between absolute top-8 -left-6 -right-6">
            {/* Left Arm */}
            <motion.div
              className="relative"
              animate={{
                rotateZ: isTyping ? [
                  mousePosition.x * -4, 
                  mousePosition.x * -4 - 8, 
                  mousePosition.x * -4
                ] : mousePosition.x * -4,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
            >
              <div className="w-3 h-10 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-500 relative">
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full border border-gray-600"></div>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full border border-gray-600"
                  animate={{
                    rotateZ: isTyping ? [0, 12, -6, 9, 0] : 0,
                  }}
                  transition={{ duration: 0.6, repeat: isTyping ? Infinity : 0 }}
                >
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-500 rounded border border-gray-600"></div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Arm */}
            <motion.div
              className="relative"
              animate={{
                rotateZ: isTyping ? [
                  mousePosition.x * 4, 
                  mousePosition.x * 4 + 8, 
                  mousePosition.x * 4
                ] : mousePosition.x * 4,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
            >
              <div className="w-3 h-10 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-500 relative">
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full border border-gray-600"></div>
                <motion.div
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full border border-gray-600"
                  animate={{
                    rotateZ: isTyping ? [0, -12, 6, -9, 0] : 0,
                  }}
                  transition={{ duration: 0.8, repeat: isTyping ? Infinity : 0 }}
                >
                  <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-500 rounded border border-gray-600"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Robot Legs */}
          <div className="flex justify-center space-x-2 absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-8 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-600 relative">
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full border border-gray-600"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-3 h-1.5 bg-gray-700 rounded-full border border-gray-600"></div>
            </div>
            <div className="w-2 h-8 bg-gradient-to-b from-gray-800 to-black rounded-full border border-gray-600 relative">
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full border border-gray-600"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-3 h-1.5 bg-gray-700 rounded-full border border-gray-600"></div>
            </div>
          </div>

          {/* Ambient Glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl scale-125"
            animate={{
              scale: [1.2, 1.4, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
