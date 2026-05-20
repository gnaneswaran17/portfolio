import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

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
            backgroundColor: isScrolled ? "rgba(20, 20, 20, 0.6)" : "rgba(20, 20, 20, 0)",
            borderColor: isScrolled ? "rgba(255, 255, 255, 0.04)" : "rgba(255, 255, 255, 0)",
            backdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(0px) saturate(100%)",
            boxShadow: isScrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "0 0px 0px rgba(0,0,0,0)",
            padding: isScrolled ? "10px 24px" : "16px 0px",
            borderRadius: isScrolled ? "9999px" : "24px",
            width: isScrolled ? "auto" : "100%",
            maxWidth: "1280px"
          }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex items-center justify-between border origin-center transform-gpu will-change-transform pointer-events-auto"
          style={{ WebkitBackdropFilter: isScrolled ? "blur(24px) saturate(180%)" : "blur(0px) saturate(100%)" }}
        >
          {/* Logo */}
          <Link to="home" smooth={true} duration={800} className="cursor-pointer z-50">
            <motion.div whileTap={{ scale: 0.95 }} className="flex items-center gap-2 group">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-[#ff6b00] to-[#ff4d85] flex items-center justify-center text-white font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,107,0,0.4)] transition-transform duration-300">
                G
              </div>
              <AnimatePresence mode="wait">
                {!isScrolled && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="text-white font-semibold tracking-tight text-lg md:text-xl whitespace-nowrap overflow-hidden"
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
                    className="absolute inset-0 bg-[rgba(255,107,0,0.15)] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                {/* Underline for non-scrolled state */}
                {!isScrolled && (
                  <span className="absolute -bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-[#ff6b00] to-[#ff4d85] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
                className="cursor-pointer relative overflow-hidden group px-6 py-2 rounded-full text-[14px] font-semibold flex items-center justify-center bg-[rgba(255,255,255,0.05)] text-white border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.15)] transition-colors duration-300 shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,107,0,0.2)] to-[rgba(255,77,133,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Hire Me</span>
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
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-[90] bg-[rgba(5,5,5,0.7)] backdrop-blur-2xl flex flex-col items-center justify-center transform-gpu will-change-transform"
            style={{ WebkitBackdropFilter: "blur(40px)" }}
          >
            <div className="flex flex-col items-center space-y-6 w-full px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { delay: 0, duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full text-center"
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: navLinks.length * 0.05, ease: [0.25, 1, 0.5, 1] }}
                className="w-full pt-8 mt-4 border-t border-[rgba(255,255,255,0.05)]"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff4d85] text-white text-lg font-bold flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.3)] active:scale-95 transition-transform transform-gpu"
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
