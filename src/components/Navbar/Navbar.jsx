import { useState, useEffect, useId } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const navLinks = [
  { title: 'Home', path: 'home' },
  { title: 'About', path: 'about' },
  { title: 'Skills', path: 'skills' },
  { title: 'Projects', path: 'projects' },
  { title: 'Experience', path: 'experience' },
  { title: 'Contact', path: 'contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 md:px-8 py-4 transition-all duration-300 ${isScrolled ? 'bg-[var(--bg-secondary)]/80 backdrop-blur-md border-b border-[var(--glass-border-hover)] shadow-[var(--shadow-cyan)]' : 'bg-transparent'}`}>
        <div className="w-full max-w-7xl flex items-center justify-between">
          
          {/* Cyber Logo Decal */}
          <Link to="home" smooth={true} duration={800} className="cursor-pointer z-50">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 group relative"
            >
              <div className="flex flex-col">
                <span className="font-['Rajdhani',_sans-serif] font-bold text-lg md:text-xl text-[var(--neon-cyan)] leading-none tracking-widest uppercase glitch-hover" data-text="GNANESWARAN">GNANESWARAN</span>
                <span className="font-['Share_Tech_Mono',_monospace] text-[10px] text-[var(--neon-pink)] tracking-widest">[ SYS_ONLINE // 0x01 ]</span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop HUD Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                smooth={true}
                duration={800}
                spy={true}
                onSetActive={() => setActiveItem(link.path)}
                offset={-100}
                className={`relative px-3 py-1 cursor-pointer font-['Rajdhani',_sans-serif] text-sm font-semibold tracking-widest uppercase group transition-all duration-300 ${
                  activeItem === link.path ? 'text-[var(--neon-cyan)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="relative z-10 glitch-hover" data-text={link.title}>{link.title}</span>
                {activeItem === link.path && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 border-b-2 border-[var(--neon-cyan)] -z-10 bg-[var(--neon-cyan-dim)] shadow-[0_0_10px_var(--neon-cyan)]"
                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {/* Cyber Brackets on hover */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 text-[var(--neon-pink)] opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">[</span>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 text-[var(--neon-pink)] opacity-0 group-hover:opacity-100 transition-all duration-300 text-xs">]</span>
              </Link>
            ))}

            {/* Hire Me Tactical Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-100}
                className="relative flex items-center justify-center px-6 py-2 bg-[var(--bg-elevated)] border border-[var(--neon-pink)] text-[var(--neon-pink)] font-['Rajdhani',_sans-serif] font-bold tracking-widest uppercase cursor-pointer group hover:bg-[var(--neon-pink-dim)] shadow-[0_0_10px_var(--neon-pink-dim)] hover:shadow-[var(--shadow-pink-glow)] transition-all duration-300"
                style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
              >
                <span className="glitch-hover" data-text="HIRE_ME">HIRE_ME</span>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[var(--neon-pink)]"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[var(--neon-pink)]"></div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger (HUD Style) */}
          <button
            className="md:hidden text-[var(--neon-cyan)] focus:outline-none z-[101] relative w-10 h-10 flex flex-col justify-center items-end gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
              className="h-[2px] bg-[var(--neon-cyan)] shadow-[0_0_5px_var(--neon-cyan)]"
            ></motion.span>
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '75%' }}
              className="h-[2px] bg-[var(--neon-cyan)] shadow-[0_0_5px_var(--neon-cyan)]"
            ></motion.span>
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '50%' }}
              className="h-[2px] bg-[var(--neon-pink)] shadow-[0_0_5px_var(--neon-pink)]"
            ></motion.span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen HUD */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3 } }}
            className="fixed inset-0 z-[90] bg-[var(--bg-primary)]/90 flex flex-col items-center justify-center"
          >
            {/* Cyber Grid Background for Menu */}
            <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-8 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-['Rajdhani',_sans-serif] text-3xl font-bold tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--neon-cyan)] transition-colors flex items-center gap-4"
                  >
                    <span className="text-[var(--neon-pink)] text-sm font-['Share_Tech_Mono',_monospace]">0{i+1}.</span>
                    <span className="glitch-hover" data-text={link.title}>{link.title}</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-3 bg-[var(--neon-pink-dim)] border border-[var(--neon-pink)] text-[var(--neon-pink)] font-['Rajdhani',_sans-serif] text-xl font-bold tracking-widest uppercase shadow-[0_0_15px_var(--neon-pink-dim)]"
                  style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}
                >
                  [ HIRE_ME ]
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
