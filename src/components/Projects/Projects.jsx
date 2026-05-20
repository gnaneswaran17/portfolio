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
          <h2 className="text-fluid-h2 font-bold text-[#f5f5f7] mb-4 md:mb-6 tracking-tighter">
            Selected Work
          </h2>
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
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 glass-pill px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-[15px] font-semibold text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300"
          >
            View More on GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
};
