import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import contentBg from '../assets/content.png';

export const MainLayout = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <div className="bg-[#05070A] min-h-screen text-[#f3f7ff] font-['Inter',_sans-serif] overflow-x-hidden selection:bg-[#00D9FF]/30 selection:text-white relative perspective-1000">
      
      {/* Global Dynamic Aurora Background */}
      <div 
        className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#05070A]"
        style={{
          backgroundImage: `url(${contentBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft vignette overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,10,0.6)_100%)]"></div>

        {/* Mouse interactive ambient glow */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-[#00D9FF] mix-blend-screen filter blur-[150px] opacity-[0.05] -z-10"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 2 }}
        />
        
        {/* Grain Texture Overlay for cinematic feel */}
        <div className="bg-noise mix-blend-overlay opacity-30"></div>
      </div>

      {/* iOS style minimal scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00D9FF] via-[#00FFB2] to-[#6E3BFF] origin-left z-[100] shadow-[0_0_10px_rgba(0,217,255,0.5)]"
        style={{ scaleX }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
    </ReactLenis>
  );
};
