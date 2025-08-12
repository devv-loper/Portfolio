'use client';

import { motion } from 'framer-motion';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import MobileGitHubContributionGrid from './components/MobileGitHubContributionGrid';
import MobileModernRobot from './components/MobileModernRobot';
import MobileTerminal from './components/MobileTerminal';

export default function MobilePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Terminal Section - Same as laptop */}
      <section id="terminal">
        <motion.div variants={sectionVariants}>
          <MobileTerminal />
        </motion.div>
      </section>

      {/* Robot Section */}
      <section id="robot">
        <motion.div variants={sectionVariants}>
          <MobileModernRobot />
        </motion.div>
      </section>

      {/* GitHub Contributions Section - Below robot, above about */}
      <section id="github">
        <motion.div variants={sectionVariants}>
          <MobileGitHubContributionGrid />
        </motion.div>
      </section>

      {/* Home/About Section */}
      <section id="home">
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <motion.div variants={sectionVariants}>
          <Projects />
        </motion.div>
      </section>
      
      {/* Skills Section */}
      <section id="skills">
        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
      </section>
    </motion.div>
  );
} 