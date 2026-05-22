import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20 text-center max-w-3xl mx-auto relative"
        >
          {/* Cyberpunk Decorative Header Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
            <span className="w-12 h-[1px] bg-[var(--neon-pink)]"></span>
            <span className="font-['Share_Tech_Mono'] text-xs text-[var(--neon-pink)] tracking-widest">[ TECH_STACK ]</span>
            <span className="w-12 h-[1px] bg-[var(--neon-pink)]"></span>
          </div>

          <h2 className="text-fluid-h2 font-['Orbitron',_sans-serif] font-black text-white mb-4 md:mb-6 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-pink)] to-[#ff8c42] drop-shadow-[0_0_15px_var(--neon-pink-dim)]">Toolkit</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-fluid-p font-['Share_Tech_Mono'] leading-relaxed tracking-wide">
            &gt; SCANNING DATABASE...<br/>
            &gt; FOUND: Architected modules for performance & scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="cyber-panel p-6 md:p-8 relative overflow-hidden group hover:border-[var(--neon-cyan)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[var(--neon-cyan)] opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[var(--neon-cyan)] opacity-50 group-hover:opacity-100 transition-opacity"></div>

              <h3 className="text-xl md:text-2xl font-['Rajdhani',_sans-serif] font-bold text-white mb-6 md:mb-8 tracking-widest uppercase border-b-2 border-[var(--glass-border)] pb-2 flex items-center gap-3">
                <span className="text-[var(--neon-cyan)] text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                {skillGroup.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-3 md:gap-4"
              >
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[var(--bg-secondary)] border border-[var(--glass-border)] px-3 py-1.5 hover:bg-[var(--neon-cyan-dim)] hover:border-[var(--neon-cyan)] transition-all duration-300 cursor-default"
                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                  >
                    <skill.icon className="text-base md:text-lg opacity-90 drop-shadow-[0_0_5px_currentColor]" style={{ color: skill.color }} />
                    <span className="text-xs md:text-sm font-['Share_Tech_Mono'] font-bold text-white uppercase tracking-wider">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
