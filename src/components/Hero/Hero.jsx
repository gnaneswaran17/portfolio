import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GlassButton } from '../ui/GlassButton';

export const Hero = () => {
  const roles = ["Full stack developer", "problem solver", "UI/UX Enthusiast", "Trader"];
  const [currentRole, setCurrentRole] = useState(0);
  const [bootText, setBootText] = useState("");
  const fullBootText = "INITIALIZING SYSTEM_CORE... [OK]\nLOADING CYBER_ASSETS... [OK]\nESTABLISHING SECURE_LINK... [OK]\nWELCOME, USER.";

  useEffect(() => {
    let currentText = "";
    let i = 0;
    const typeWriter = setInterval(() => {
      if (i < fullBootText.length) {
        currentText += fullBootText.charAt(i);
        setBootText(currentText);
        i++;
      } else {
        clearInterval(typeWriter);
      }
    }, 30);
    return () => clearInterval(typeWriter);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Gnaneswaran_A_Resume.pdf";
    link.download = "Gnaneswaran_A_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative section-padding overflow-hidden">
      
      {/* Immersive Cyber Background elements specific to Hero */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[var(--neon-cyan)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-[pulse_4s_infinite_alternate]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[var(--neon-pink)] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none animate-[pulse_5s_infinite_alternate-reverse]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col items-center justify-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full max-w-5xl mx-auto flex flex-col items-center relative"
        >
          {/* Terminal Boot Sequence Display */}
          <div className="w-full max-w-md h-[80px] mb-8 flex justify-center text-left">
             <pre className="font-['Share_Tech_Mono',_monospace] text-[var(--neon-cyan)] text-xs md:text-sm drop-shadow-[0_0_5px_var(--neon-cyan)] whitespace-pre-wrap leading-tight">
                {bootText}
                <span className="animate-pulse">_</span>
             </pre>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.2 }}
            className="inline-flex items-center gap-2 px-6 py-2 border border-[var(--neon-green)] bg-[var(--neon-green)]/10 mb-6 md:mb-8 shadow-[0_0_15px_rgba(57,255,20,0.2)]"
            style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
          >
            <span className="w-2 h-2 bg-[var(--neon-green)] shadow-[0_0_8px_var(--neon-green)] animate-[pulse_2s_infinite]"></span>
            <span className="text-[var(--neon-green)] text-xs font-['Share_Tech_Mono',_monospace] font-bold tracking-widest uppercase">CONNECTION_ESTABLISHED</span>
          </motion.div>

          <div className="relative w-full overflow-hidden flex justify-center">
            <h1 className="text-fluid-hero font-['Orbitron',_sans-serif] font-black mb-2 tracking-tighter leading-none px-2 text-transparent bg-clip-text bg-gradient-to-b from-white via-[var(--neon-cyan)] to-[var(--bg-primary)] drop-shadow-[0_0_20px_var(--neon-cyan-dim)] glitch-hover whitespace-nowrap" data-text="GNANESWARAN A.">
              GNANESWARAN A.
            </h1>
          </div>
          
          <div className="text-fluid-subtitle font-['Rajdhani',_sans-serif] font-bold tracking-[0.2em] h-[40px] sm:h-[50px] md:h-[60px] overflow-hidden flex items-center justify-center w-full mb-6 px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, x: -50, skewX: 20 }}
                animate={{ opacity: 1, x: 0, skewX: 0 }}
                exit={{ opacity: 0, x: 50, skewX: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-gradient-pink whitespace-nowrap py-2 uppercase drop-shadow-[0_0_15px_var(--neon-pink-dim)]"
              >
                [ {roles[currentRole]} ]
              </motion.div>
            </AnimatePresence>
          </div>
          
          <p className="text-[var(--text-secondary)] text-fluid-p font-['Share_Tech_Mono',_monospace] max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed tracking-tight px-4 border-l-2 border-[var(--neon-cyan)] pl-4 text-left">
            &gt; EXECUTING PROTOCOL: ARCHITECT_DIGITAL_EXPERIENCES<br/>
            &gt; SCALING_BACKEND_INFRASTRUCTURE: TRUE<br/>
            &gt; ENGINEERING_THE_FUTURE // PIXEL_BY_PIXEL
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full px-6 sm:px-0 mt-4">
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-100}
              className="w-full sm:w-auto"
            >
              <GlassButton 
                className="w-full sm:w-48" 
                size="lg" 
                variant="primary"
              >
                INITIALIZE_WORK
              </GlassButton>
            </Link>
            
            <GlassButton
              onClick={handleResumeDownload}
              className="w-full sm:w-48"
              size="lg"
              variant="secondary"
            >
              DOWNLOAD_DATA
            </GlassButton>
          </div>

          {/* Social Links - Cyber Decals */}
          <div className="flex items-center gap-10 mt-16 md:mt-20 justify-center border-t border-[var(--glass-border)] pt-8 relative w-full max-w-md">
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--neon-cyan)]"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--neon-cyan)]"></div>
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-[var(--bg-primary)] px-2 text-[10px] font-['Share_Tech_Mono'] text-[var(--neon-cyan)]">SYS_COMMS</div>
            
            <motion.a 
              href="https://github.com/gnaneswaran17" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-all duration-300 text-3xl md:text-4xl drop-shadow-[0_0_10px_var(--neon-cyan-dim)]"
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/gnaneswarana/" 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-all duration-300 text-3xl md:text-4xl drop-shadow-[0_0_10px_var(--neon-cyan-dim)]"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
