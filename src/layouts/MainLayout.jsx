import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ReactLenis } from 'lenis/react';

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
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#05070A]">
        {/* Animated Thin Grid */}
        <div 
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0v1H0V0h40zM0 40V0h1v40H0z' fill='rgba(0,255,255,0.06)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        >
          {/* Soft vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070A] via-transparent to-[#05070A] opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-transparent to-[#05070A] opacity-90"></div>
        </div>

        {/* Mouse interactive ambient glow */}
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-[#00D9FF] mix-blend-screen filter blur-[150px] opacity-[0.08] -z-10"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 2 }}
        />
        
        {/* Slow moving cinematic aurora blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-[#00D9FF] mix-blend-screen filter blur-[120px] md:blur-[160px] opacity-[0.10] animate-aurora-1"></div>
        
        <div className="absolute bottom-[-10%] right-[-10%] w-[90vw] h-[90vw] md:w-[70vw] md:h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-[#6E3BFF] mix-blend-screen filter blur-[130px] md:blur-[180px] opacity-[0.10] animate-aurora-2"></div>
        
        <div className="absolute top-[30%] left-[30%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#00FFB2] mix-blend-screen filter blur-[100px] md:blur-[150px] opacity-[0.06] animate-aurora-3"></div>
        
        {/* Grain Texture Overlay */}
        <div className="bg-noise mix-blend-overlay"></div>
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
