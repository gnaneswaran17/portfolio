import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Hero = () => {
  const roles = ["Full Stack Developer.", "Problem Solver.", "UI/UX Enthusiast.", "Trader."];
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
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full max-w-5xl mx-auto flex flex-col items-center relative"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6 md:mb-8 hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-default border-[rgba(255,255,255,0.15)] shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5f1f] animate-[pulse_3s_cubic-bezier(0.16,1,0.3,1)_infinite] shadow-[0_0_10px_rgba(255,95,31,0.8)]"></span>
            <span className="text-[#f5f5f7] text-[10px] md:text-xs font-semibold uppercase tracking-widest opacity-90">Available for new opportunities</span>
          </motion.div>

          <div className="relative">
            {/* Cinematic text bloom behind headline */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f1f]/30 via-[#ff3366]/30 to-[#ff8c42]/30 blur-[60px] md:blur-[100px] rounded-full opacity-60 pointer-events-none -z-10"></div>
            <h1 className="text-fluid-hero font-bold mb-2 tracking-tighter leading-none px-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f5f5f7] to-[#a0a0a5] drop-shadow-sm">
              Gnaneswaran A.
            </h1>
          </div>
          
          <div className="text-fluid-h3 font-bold tracking-tighter h-[50px] sm:h-[60px] md:h-[80px] lg:h-[100px] overflow-hidden flex items-center justify-center w-full mb-6 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ y: 50, opacity: 0, filter: "blur(12px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -50, opacity: 0, filter: "blur(12px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-gradient-aurora whitespace-nowrap py-2 drop-shadow-sm"
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
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="cursor-pointer relative group overflow-hidden rounded-full w-full shadow-[0_8px_32px_-4px_rgba(255,95,31,0.4)] hover:shadow-[0_16px_48px_-8px_rgba(255,95,31,0.6)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f1f] via-[#ff3366] to-[#ff8c42] transition-transform duration-700 ease-out group-hover:scale-105"></div>
                {/* Subtle shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative px-8 py-4 bg-transparent text-white font-semibold text-[15px] flex items-center justify-center gap-2 tracking-tight">
                  View My Work
                </div>
              </motion.div>
            </Link>
            
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full sm:w-auto cursor-pointer glass-pill px-8 py-4 text-[15px] font-semibold text-white hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-500 flex items-center justify-center gap-2 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4)] tracking-tight"
            >
              Download Resume
            </motion.a>
          </div>

          <div className="flex items-center gap-8 mt-12 md:mt-16 justify-center">
            <motion.a 
              href="https://github.com/gnaneswaran17" 
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
              href="https://www.linkedin.com/in/gnaneswarana/" 
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
    </section>
  );
};
