import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  const roles = ["Full Stack Developer.", "Problem Solver.", "UI/UX Enthusiast."];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 md:pt-24 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
          className="w-full max-w-5xl mx-auto flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6 md:mb-8 hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></span>
            <span className="text-[#f5f5f7] text-[10px] md:text-xs font-semibold uppercase tracking-widest">Available for new opportunities</span>
          </motion.div>

          <h1 className="text-fluid-hero font-bold text-white mb-2 tracking-tighter leading-none px-2">
            Gnaneswaran A.
          </h1>
          
          <div className="text-fluid-h3 font-bold tracking-tighter h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px] overflow-hidden flex items-center justify-center w-full mb-6 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -50, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="text-gradient-aurora whitespace-nowrap py-2"
              >
                {roles[currentRole]}
              </motion.div>
            </AnimatePresence>
          </div>
          
          <p className="text-[#86868b] text-fluid-p max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-normal tracking-tight px-4">
            I craft cinematic digital experiences and scalable backend architectures. Engineering the future, one pixel at a time.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center w-full px-6 sm:px-0">
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-100}
              className="w-full sm:w-auto"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="cursor-pointer relative group overflow-hidden rounded-full w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b00] via-[#ff4d85] to-[#ff9966] transition-transform duration-500"></div>
                <div className="relative px-8 py-4 bg-transparent text-white font-semibold text-[15px] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                  View My Work
                </div>
              </motion.div>
            </Link>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto cursor-pointer glass-pill px-8 py-4 text-[15px] font-semibold text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Download Resume
            </motion.a>
          </div>

          <div className="flex items-center gap-8 mt-12 md:mt-16 justify-center">
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-[#86868b] hover:text-white transition-colors text-2xl md:text-3xl"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-[#86868b] hover:text-white transition-colors text-2xl md:text-3xl"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - hidden on very small screens */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#515154]"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#515154] to-transparent"></div>
      </motion.div>
    </section>
  );
};
