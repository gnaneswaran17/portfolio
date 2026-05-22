import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';
import { GlassButton } from '../ui/GlassButton';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 md:mb-20 text-center flex flex-col items-center relative"
        >
          {/* Cyberpunk Decorative Header Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
            <span className="w-12 h-[1px] bg-[var(--neon-cyan)]"></span>
            <span className="font-['Share_Tech_Mono'] text-xs text-[var(--neon-cyan)] tracking-widest uppercase">[ PROJECT_DATABASE ]</span>
            <span className="w-12 h-[1px] bg-[var(--neon-cyan)]"></span>
          </div>

          <h2 className="text-fluid-h2 font-['Orbitron',_sans-serif] font-black text-white tracking-tighter relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.2)] uppercase mb-4 md:mb-6">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-pink)] drop-shadow-[0_0_15px_var(--neon-cyan-dim)]">Work</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-fluid-p font-['Share_Tech_Mono'] px-4 leading-relaxed tracking-wide">
            &gt; ACCESSING RECENT ENGINEERING LOGS...<br/>
            &gt; BUILT WITH PRECISION. SCALABLE BACKENDS. SEAMLESS INTERFACES.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center flex justify-center">
          <GlassButton
            as="a"
            href="https://github.com/gnaneswaran17"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="primary"
          >
            ACCESS_FULL_REPO
          </GlassButton>
        </div>
      </div>
    </section>
  );
};
