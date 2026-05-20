import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

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
    <div className="bg-[#000000] min-h-screen text-[#f5f5f7] font-sans overflow-x-hidden selection:bg-[#ff6b00]/40 selection:text-white relative perspective-1000">
      
      {/* Global Dynamic Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#000]">
        {/* Mouse interactive ambient glow */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#ff6b00] to-[#ff4d85] mix-blend-screen filter blur-[150px] opacity-[0.12] -z-10"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 2 }}
        />
        
        {/* Slow moving cinematic aurora blobs - optimized for mobile */}
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#ff6b00] to-transparent mix-blend-screen filter blur-[80px] md:blur-[140px] opacity-[0.2] md:opacity-[0.15] animate-aurora-1"></div>
        
        <div className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-bl from-[#ff4d85] via-[#8a2be2] to-transparent mix-blend-screen filter blur-[90px] md:blur-[160px] opacity-[0.2] md:opacity-[0.12] animate-aurora-2"></div>
        
        <div className="absolute top-[30%] left-[30%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-[#ff9966] to-transparent mix-blend-screen filter blur-[70px] md:blur-[120px] opacity-[0.15] md:opacity-[0.08] animate-aurora-3"></div>
        
        {/* Grain Texture Overlay for that cinematic Apple film feel */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMCAwaDR2NEgweiIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPC9zdmc+')] mix-blend-overlay"></div>
      </div>

      {/* iOS style minimal scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#ff6b00] via-[#ff4d85] to-[#8a2be2] origin-left z-[100]"
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
  );
};
