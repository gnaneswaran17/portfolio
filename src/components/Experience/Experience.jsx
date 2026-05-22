import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center relative"
        >
          {/* Cyberpunk Decorative Header Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
            <span className="w-12 h-[1px] bg-[var(--neon-green)]"></span>
            <span className="font-['Share_Tech_Mono'] text-xs text-[var(--neon-green)] tracking-widest">[ TIMELINE_LOG ]</span>
            <span className="w-12 h-[1px] bg-[var(--neon-green)]"></span>
          </div>

          <h2 className="text-fluid-h2 font-['Orbitron',_sans-serif] font-black text-white mb-4 md:mb-6 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-cyan)] drop-shadow-[0_0_15px_rgba(57,255,20,0.5)]">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-fluid-p font-['Share_Tech_Mono'] leading-relaxed tracking-wide">
            &gt; RETRIEVING ARCHIVES...<br/>
            &gt; SUCCESS: Professional trajectory loaded.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Subtle line background */}
          <div className="absolute left-[24px] sm:left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--glass-border)] md:-translate-x-1/2"></div>
          
          {/* Animated Glowing Cyber-Conduit Path */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="absolute left-[24px] sm:left-[30px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[var(--neon-pink)] via-[var(--neon-cyan)] to-[var(--neon-green)] md:-translate-x-1/2 origin-top shadow-[0_0_15px_var(--neon-cyan)]"
          ></motion.div>
          
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="relative pl-12 sm:pl-16 md:pl-0 mb-16 md:mb-20 last:mb-0"
            >
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Cyber Node on Timeline */}
                <div className="absolute left-[24px] sm:left-[30px] md:left-1/2 -translate-x-1/2 mt-6 sm:mt-8 md:mt-0 w-8 h-8 sm:w-12 sm:h-12 bg-[var(--bg-primary)] border-2 border-[var(--neon-cyan)] flex items-center justify-center z-10 shadow-[0_0_20px_var(--neon-cyan-dim)] transform rotate-45">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[var(--neon-pink)] shadow-[0_0_10px_var(--neon-pink)] animate-[pulse_2s_infinite]"></div>
                </div>
                
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="md:w-[45%] cyber-panel p-6 sm:p-8 md:p-10 group"
                >
                  {/* Tactical Timestamp */}
                  <div className="absolute top-0 right-0 bg-[var(--neon-cyan-dim)] text-[var(--neon-cyan)] border-b border-l border-[var(--neon-cyan)] font-['Share_Tech_Mono'] text-[10px] sm:text-xs font-bold px-3 py-1 tracking-widest uppercase">
                    [ {exp.period} ]
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-['Rajdhani',_sans-serif] font-bold text-white mb-1 tracking-wider uppercase group-hover:text-[var(--neon-cyan)] transition-colors duration-300 drop-shadow-sm mt-4">{exp.role}</h3>
                  <h4 className="text-lg sm:text-xl text-[var(--neon-pink)] mb-6 sm:mb-8 font-['Orbitron'] font-bold drop-shadow-[0_0_8px_var(--neon-pink-dim)]">{exp.company}</h4>
                  
                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[var(--text-secondary)] text-sm sm:text-base font-['Share_Tech_Mono'] flex items-start gap-3 sm:gap-4 leading-relaxed">
                        <span className="text-[var(--neon-green)] mt-1">&gt;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
