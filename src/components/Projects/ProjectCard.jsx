import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { GlassButton } from '../ui/GlassButton';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
      className="group flex flex-col h-full relative cyber-panel overflow-hidden transition-all duration-500 perspective-1000"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-50"></div>
      
      {/* Immersive Hover Background Glow */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[var(--neon-cyan)] opacity-0 group-hover:opacity-10 filter blur-[100px] transition-opacity duration-700 pointer-events-none z-0"></div>

      {/* Media Container */}
      <div className="relative h-56 sm:h-72 md:h-96 w-full overflow-hidden bg-[var(--bg-primary)] p-4 sm:p-6 pb-0 flex items-end justify-center z-10 border-b border-[var(--glass-border)]">
        
        {/* Tactical Telemetry Interface Mockup */}
        <div className="w-[95%] h-[95%] bg-[#050505] border border-[var(--neon-cyan-dim)] border-b-0 shadow-[0_-10px_30px_var(--neon-cyan-dim)] overflow-hidden relative transform-style-3d transition-all duration-700 ease-out flex flex-col origin-bottom" style={{ clipPath: 'polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)' }}>
           
           {/* Cyber Telemetry Header */}
           <div className="h-6 sm:h-8 border-b border-[var(--neon-cyan-dim)] bg-[var(--bg-elevated)] flex items-center justify-between px-3 sm:px-4 backdrop-blur-md">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--neon-green)] shadow-[0_0_5px_var(--neon-green)] animate-[pulse_1s_infinite]"></span>
                <span className="font-['Share_Tech_Mono'] text-[10px] text-[var(--neon-cyan)] font-bold tracking-widest uppercase">[LINK_ACTIVE]</span>
             </div>
             <div className="font-['Share_Tech_Mono'] text-[10px] text-[var(--text-tertiary)] uppercase">
                // SYS_ADDR: 0x0{index + 1}A
             </div>
           </div>
           
           {/* Immersive Mockup Content */}
           <div className="flex-1 bg-[var(--bg-secondary)] relative flex items-center justify-center overflow-hidden">
             {project.image ? (
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover object-top filter contrast-125 saturate-150 transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-150"
                 loading="lazy"
               />
             ) : (
               <>
                 <div className="absolute inset-0 bg-cyber-grid opacity-50"></div>
                 <div className="text-[var(--neon-cyan)] opacity-20 text-5xl sm:text-7xl font-black font-['Orbitron'] tracking-tighter uppercase">
                   {project.title.substring(0, 4)}
                 </div>
               </>
             )}
             {/* Scanline overlay over image */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,240,255,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
           </div>
        </div>
        
        {/* Floating Action Buttons */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-2 sm:gap-3 z-20 translate-y-0 opacity-100 md:translate-y-[-20px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
          {project.githubLink && (
            <GlassButton 
              as="a"
              href={project.githubLink} 
              target="_blank"
              rel="noopener noreferrer"
              size="icon"
              variant="secondary"
              className="w-10 h-10 sm:w-12 sm:h-12 shadow-[0_0_15px_var(--neon-pink-dim)]"
            >
              <FaGithub size={18} className="sm:w-[20px]" />
            </GlassButton>
          )}
          {project.liveLink && (
            <GlassButton 
              as="a"
              href={project.liveLink} 
              target="_blank"
              rel="noopener noreferrer"
              size="icon"
              variant="primary"
              className="w-10 h-10 sm:w-12 sm:h-12 shadow-[0_0_15px_var(--neon-cyan-dim)]"
            >
              <FaExternalLinkAlt size={16} className="sm:w-[18px]" />
            </GlassButton>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-1 relative z-20 bg-[var(--bg-secondary)]/80 backdrop-blur-md">
        <h3 className="text-2xl sm:text-3xl font-['Orbitron',_sans-serif] font-black text-white mb-3 sm:mb-4 tracking-wider uppercase md:group-hover:text-[var(--neon-cyan)] transition-colors duration-500 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] glitch-hover" data-text={project.title}>{project.title}</h3>
        <p className="text-[var(--text-secondary)] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-['Share_Tech_Mono'] leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-[var(--neon-green)] bg-[var(--bg-elevated)] border border-[var(--neon-green)] uppercase tracking-widest shadow-[0_0_5px_rgba(57,255,20,0.2)]"
              style={{ clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)' }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
