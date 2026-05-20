import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../data/projects';

export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-16 md:mb-20 text-center flex flex-col items-center"
        >
          <div className="relative inline-block mb-4 md:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f1f]/30 to-[#ff3366]/30 blur-[40px] rounded-full opacity-60"></div>
            <h2 className="text-fluid-h2 font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#a0a0a5] tracking-tighter relative z-10 drop-shadow-sm">
              Selected Work
            </h2>
          </div>
          <p className="text-[#86868b] max-w-2xl text-fluid-p font-light px-4">
            A showcase of my recent engineering projects. Built with precision, focusing on scalable backends and seamless user interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 md:mt-24 text-center">
          <motion.a
            href="https://github.com/gnaneswaran17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-flex items-center gap-2 glass-pill px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-[15px] font-semibold text-white hover:bg-[rgba(255,255,255,0.06)] transition-all duration-500 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.4)] hover:border-[rgba(255,255,255,0.2)]"
          >
            View More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};
