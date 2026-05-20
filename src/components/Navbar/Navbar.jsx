import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import logo from '../../assets/logo.png';

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
    // Check initial scroll position
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
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 md:px-6 pointer-events-none">
        <motion.div
          initial={false}
          animate={{
            backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.4)" : "rgba(10, 10, 10, 0)",
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0)",
            backdropFilter: isScrolled ? "blur(32px) saturate(180%)" : "blur(0px) saturate(100%)",
            boxShadow: isScrolled ? "0 8px 32px -4px rgba(0,0,0,0.3)" : "0 0px 0px rgba(0,0,0,0)",
            padding: isScrolled ? "10px 24px" : "16px 0px",
            borderRadius: isScrolled ? "9999px" : "24px",
            width: isScrolled ? "auto" : "100%",
            maxWidth: "1280px"
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-between border origin-center transform-gpu will-change-transform pointer-events-auto"
          style={{ WebkitBackdropFilter: isScrolled ? "blur(32px) saturate(180%)" : "blur(0px) saturate(100%)" }}
        >
          {/* Logo */}
          <Link to="home" smooth={true} duration={800} className="cursor-pointer z-50">
            <motion.div 
              whileHover={{ y: -2, scale: 1.02 }} 
              whileTap={{ scale: 0.96 }} 
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3.5 md:gap-4 group relative"
            >
              {/* Premium Ambient Background Glow */}
              <div className="absolute top-1/2 left-6 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-[#ff5f1f]/35 to-[#ff3366]/35 rounded-full blur-[24px] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none z-0"></div>
              
              {/* Premium iOS-Style Glass Container for Logo */}
              <div className="relative w-12 h-12 md:w-[54px] md:h-[54px] flex items-center justify-center rounded-[14px] md:rounded-[16px] bg-gradient-to-b from-[rgba(25,25,25,0.8)] to-[rgba(10,10,10,0.9)] backdrop-blur-xl border border-[rgba(255,255,255,0.12)] shadow-[0_4px_20px_rgba(255,95,31,0.3),_inset_0_1px_1px_rgba(255,255,255,0.2)] group-hover:shadow-[0_8px_30px_rgba(255,95,31,0.5),_inset_0_1px_2px_rgba(255,255,255,0.3)] transition-all duration-500 overflow-hidden flex-shrink-0 z-10">
                {/* iOS Glossy Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[rgba(255,255,255,0.25)] pointer-events-none z-20 mix-blend-overlay"></div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[rgba(255,255,255,0.15)] to-transparent pointer-events-none z-20"></div>
                
                {/* The 3D Logo (Massive Scale inside Container) */}
                <img src={logo} alt="Gnaneswaran Logo" className="relative z-10 w-[85%] h-[85%] md:w-[88%] md:h-[88%] object-contain drop-shadow-[0_2px_10px_rgba(255,95,31,0.5)] group-hover:drop-shadow-[0_4px_16px_rgba(255,95,31,0.8)] group-hover:scale-105 transition-all duration-500" />
              </div>

              {/* Text Area */}
              <AnimatePresence mode="wait">
                {!isScrolled && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="font-['SF_Pro_Display',_system-ui,_-apple-system,_sans-serif] font-semibold tracking-[0.01em] text-[19px] md:text-[22px] whitespace-nowrap overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#f5f5f7] to-[#ffb580] drop-shadow-sm transition-all duration-500 leading-tight"
                  >
                    Gnaneswaran
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 ml-6">
            <AnimatePresence mode="wait">
              {!isScrolled && (
                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="flex-1"
                />
              )}
            </AnimatePresence>

            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                smooth={true}
                duration={800}
                spy={true}
                onSetActive={() => setActiveItem(link.path)}
                offset={-100}
                className={`cursor-pointer px-4 py-2 rounded-full text-[14px] font-medium relative overflow-hidden group ${
                  activeItem === link.path ? 'text-white' : 'text-[#86868b] hover:text-white'
                }`}
              >
                {/* Active Indicator Background */}
                {activeItem === link.path && isScrolled && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[rgba(255,95,31,0.15)] to-[rgba(255,51,102,0.15)] rounded-full -z-10 shadow-[0_0_12px_rgba(255,95,31,0.2)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {/* Underline for non-scrolled state */}
                {!isScrolled && (
                  <span className="absolute -bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-[#ff5f1f] to-[#ff3366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                )}
                <span className="relative z-10 transition-colors duration-300">{link.title}</span>
              </Link>
            ))}

            <motion.div className="ml-4" whileTap={{ scale: 0.95 }}>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-100}
                className="cursor-pointer relative overflow-hidden group px-6 py-2 rounded-full text-[14px] font-semibold flex items-center justify-center bg-[rgba(255,255,255,0.03)] text-white border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] transition-colors duration-500 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,95,31,0.2)] to-[rgba(255,51,102,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <span className="relative z-10 drop-shadow-sm">Hire Me</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-white focus:outline-none z-[101] relative w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="w-6 h-[2px] bg-white rounded-full transform-gpu"
            ></motion.span>
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="w-6 h-[2px] bg-white rounded-full transform-gpu"
            ></motion.span>
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="w-6 h-[2px] bg-white rounded-full transform-gpu"
            ></motion.span>
          </button>
        </motion.div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-[rgba(5,5,5,0.75)] backdrop-blur-xl flex flex-col items-center justify-center transform-gpu will-change-transform"
          >
            <div className="flex flex-col items-center space-y-6 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, transition: { delay: 0, duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full text-center transform-gpu"
                >
                  <Link
                    to={link.path}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#f5f5f7] active:text-[#ff6b00] cursor-pointer text-3xl font-semibold tracking-tight block py-4 transition-colors"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="w-full pt-8 mt-4 border-t border-[rgba(255,255,255,0.05)] transform-gpu"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#ff5f1f] via-[#ff3366] to-[#ff8c42] text-white text-lg font-bold flex items-center justify-center shadow-[0_4px_24px_-1px_rgba(255,95,31,0.4)] active:scale-95 transition-transform transform-gpu"
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
