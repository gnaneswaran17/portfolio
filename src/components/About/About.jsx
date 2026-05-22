import { motion } from 'framer-motion';
import { FaTerminal, FaServer, FaCode } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24 relative"
        >
          {/* Cyberpunk Decorative Header Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
            <span className="w-12 h-[1px] bg-[var(--neon-cyan)]"></span>
            <span className="font-['Share_Tech_Mono'] text-xs text-[var(--neon-cyan)] tracking-widest">[ SYSTEM_OVERVIEW ]</span>
            <span className="w-12 h-[1px] bg-[var(--neon-cyan)]"></span>
          </div>

          <h2 className="text-fluid-h2 font-['Orbitron',_sans-serif] font-black text-white mb-6 md:mb-8 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-green)] drop-shadow-[0_0_20px_var(--neon-cyan-dim)]">Digital Future</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-fluid-p leading-relaxed font-['Rajdhani',_sans-serif] font-medium tracking-wide">
            I'm a Computer Science graduate driven by a passion for scalable systems and AI-powered solutions. I don't just write code; I craft high-performance architectures that power modern digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -50, skewX: 10 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.1 }}
            className="cyber-panel p-6 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-6 relative group col-span-1 md:col-span-2 lg:col-span-1"
          >
            {/* Tactical Tag */}
            <div className="absolute top-0 right-0 bg-[var(--neon-cyan)] text-black font-['Share_Tech_Mono'] text-[10px] font-bold px-2 py-1 tracking-widest" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10px 100%)' }}>
              [01 // BACKEND]
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--neon-cyan-dim)] border border-[var(--neon-cyan)] text-[var(--neon-cyan)] flex items-center justify-center text-xl sm:text-2xl shadow-[0_0_15px_var(--neon-cyan-dim)] group-hover:scale-110 group-hover:bg-[var(--neon-cyan)] group-hover:text-black transition-all duration-300" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)' }}>
              <FaServer />
            </div>
            <div>
              <h3 className="text-white font-['Rajdhani',_sans-serif] font-bold text-2xl sm:text-3xl mb-2 tracking-wide uppercase">Robust Backend</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-['Share_Tech_Mono'] leading-relaxed">
                &gt; Specializing in Java and Spring Boot.<br/>
                &gt; Building secure, REST APIs.<br/>
                &gt; PostgreSQL & MongoDB integration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.2 }}
            className="cyber-panel p-6 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-6 relative group"
          >
            {/* Tactical Tag */}
            <div className="absolute top-0 right-0 bg-[var(--neon-green)] text-black font-['Share_Tech_Mono'] text-[10px] font-bold px-2 py-1 tracking-widest" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10px 100%)' }}>
              [02 // FRONTEND]
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[rgba(57,255,20,0.1)] border border-[var(--neon-green)] text-[var(--neon-green)] flex items-center justify-center text-xl sm:text-2xl shadow-[0_0_15px_rgba(57,255,20,0.2)] group-hover:scale-110 group-hover:bg-[var(--neon-green)] group-hover:text-black transition-all duration-300" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)' }}>
              <FaCode />
            </div>
            <div>
              <h3 className="text-white font-['Rajdhani',_sans-serif] font-bold text-2xl sm:text-3xl mb-2 tracking-wide uppercase">Cinematic UI</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-['Share_Tech_Mono'] leading-relaxed">
                &gt; Crafting pixel-perfect React.js interfaces.<br/>
                &gt; Blurring lines between web apps & native software.<br/>
                &gt; Immersive animations & layouts.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50, skewX: -10 }}
            whileInView={{ opacity: 1, x: 0, skewX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.3 }}
            className="cyber-panel p-6 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-6 relative group md:col-span-2 lg:col-span-1"
          >
            {/* Tactical Tag */}
            <div className="absolute top-0 right-0 bg-[var(--neon-pink)] text-black font-['Share_Tech_Mono'] text-[10px] font-bold px-2 py-1 tracking-widest" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 10px 100%)' }}>
              [03 // SYSTEMS]
            </div>

            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[var(--neon-pink-dim)] border border-[var(--neon-pink)] text-[var(--neon-pink)] flex items-center justify-center text-xl sm:text-2xl shadow-[0_0_15px_var(--neon-pink-dim)] group-hover:scale-110 group-hover:bg-[var(--neon-pink)] group-hover:text-black transition-all duration-300" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)' }}>
              <FaTerminal />
            </div>
            <div>
              <h3 className="text-white font-['Rajdhani',_sans-serif] font-bold text-2xl sm:text-3xl mb-2 tracking-wide uppercase">AI & Automation</h3>
              <p className="text-[var(--text-secondary)] text-sm sm:text-base font-['Share_Tech_Mono'] leading-relaxed">
                &gt; Integrating cutting-edge AI APIs.<br/>
                &gt; Building intelligent automation tools.<br/>
                &gt; Streamlining enterprise workflows.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
