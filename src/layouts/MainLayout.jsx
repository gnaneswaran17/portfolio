import { Navbar } from '../components/Navbar/Navbar';
import { Footer } from '../components/Footer/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState, lazy, Suspense } from 'react';
import { ReactLenis } from 'lenis/react';

const ClickSpark = lazy(() => import('../components/ui/ClickSpark'));

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
      <div className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] font-['Inter',_sans-serif] overflow-x-hidden relative perspective-1000">
      
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 overflow-hidden z-0 bg-cyber-grid"></div>
      
      {/* CRT Scanline Overlay */}
      <div className="crt-scanlines"></div>

      {/* Cyberpunk Neon Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-[var(--neon-pink)] origin-left z-[100] shadow-[0_0_15px_var(--neon-pink)]"
        style={{ scaleX }}
      />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>

      {/* Global click spark effect */}
      <Suspense fallback={null}>
        <ClickSpark
          sparkColor="#ff0000"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          easing="ease-out"
          extraScale={1}
        />
      </Suspense>
    </div>
    </ReactLenis>
  );
};
