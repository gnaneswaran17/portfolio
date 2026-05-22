import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';
import { FaAward } from 'react-icons/fa';

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-20 text-center relative"
        >
          {/* Cyberpunk Decorative Header Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
            <span className="w-12 h-[1px] bg-[var(--neon-cyan)]"></span>
            <span className="font-['Share_Tech_Mono'] text-xs text-[var(--neon-cyan)] tracking-widest">[ SECURITY_CLEARANCE ]</span>
            <span className="w-12 h-[1px] bg-[var(--neon-cyan)]"></span>
          </div>

          <h2 className="text-fluid-h2 font-['Orbitron',_sans-serif] font-black text-white mb-4 md:mb-6 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] drop-shadow-[0_0_15px_var(--neon-cyan-dim)]">Credentials</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-fluid-p font-['Share_Tech_Mono'] leading-relaxed tracking-wide">
            &gt; VALIDATING_CERTIFICATES...<br/>
            &gt; ACCESS_GRANTED.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cyber-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-5 group hover:border-[var(--neon-pink)] transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-[var(--bg-primary)] border border-[var(--neon-cyan)] text-[var(--neon-cyan)] flex items-center justify-center text-lg sm:text-xl shadow-[0_0_10px_var(--neon-cyan-dim)] group-hover:bg-[var(--neon-pink)] group-hover:text-black group-hover:border-[var(--neon-pink)] transition-colors duration-300 transform rotate-45">
                <FaAward className="opacity-90 transform -rotate-45" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-['Rajdhani',_sans-serif] font-bold text-white mb-1 truncate tracking-wider uppercase">{cert.title}</h3>
                <p className="text-[var(--text-secondary)] text-xs font-['Share_Tech_Mono'] tracking-widest uppercase truncate border-l-2 border-[var(--neon-cyan)] pl-2">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
