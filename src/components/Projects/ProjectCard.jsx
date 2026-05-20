import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col h-full relative rounded-[24px] sm:rounded-[32px] bg-[rgba(20,20,20,0.4)] border border-[rgba(255,255,255,0.04)] overflow-hidden hover:border-[rgba(255,255,255,0.1)] transition-all duration-700 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] hover:shadow-[0_24px_64px_-8px_rgba(0,0,0,0.6),_0_0_40px_rgba(255,95,31,0.1)]"
    >
      {/* Immersive Hover Background Glow (hidden on mobile for performance) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#ff5f1f]/20 to-[#ff3366]/20 opacity-0 group-hover:opacity-100 mix-blend-screen filter blur-[80px] transition-opacity duration-700 pointer-events-none"></div>

      {/* Media Container */}
      <div className="relative h-56 sm:h-72 md:h-96 w-full overflow-hidden bg-[#050505] p-4 sm:p-6 pb-0 flex items-end justify-center perspective-1000 z-10">
        
        {/* Apple Style Interface Mockup */}
        <div className="w-[95%] h-[95%] rounded-t-2xl bg-[#0a0a0a] border border-[rgba(255,255,255,0.08)] border-b-0 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] overflow-hidden relative md:group-hover:translate-y-2 md:group-hover:rotate-x-12 md:group-hover:scale-105 transform-style-3d transition-all duration-700 ease-[0.16,1,0.3,1] flex flex-col origin-bottom">
           
           {/* iOS/macOS Header */}
           <div className="h-6 sm:h-8 border-b border-[rgba(255,255,255,0.05)] bg-[#111] flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 backdrop-blur-md">
             <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]"></div>
             <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]"></div>
             <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]"></div>
           </div>
           
           {/* Immersive Mockup Content (Renders high-quality project screenshot if available, otherwise falls back to dynamic abstract styling) */}
           <div className="flex-1 bg-gradient-to-br from-[#111] to-[#000] relative flex items-center justify-center overflow-hidden">
             {project.image ? (
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                 loading="lazy"
               />
             ) : (
               <>
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,0,0.1),transparent_60%)]"></div>
                 <div className="text-[rgba(255,255,255,0.1)] text-5xl sm:text-7xl font-bold tracking-tighter">
                   {project.title.substring(0, 4)}
                 </div>
               </>
             )}
           </div>
        </div>
        
        {/* Floating Action Buttons */}
        <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex gap-2 sm:gap-3 z-10 translate-y-0 opacity-100 md:translate-y-[-20px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-500 ease-out">
          {project.githubLink && (
            <motion.a 
              href={project.githubLink} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 glass-pill flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 backdrop-blur-xl shadow-lg"
            >
              <FaGithub size={18} className="sm:w-[20px]" />
            </motion.a>
          )}
          {project.liveLink && (
            <motion.a 
              href={project.liveLink} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 sm:w-12 sm:h-12 glass-pill flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 backdrop-blur-xl shadow-lg"
            >
              <FaExternalLinkAlt size={16} className="sm:w-[18px]" />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-1 relative z-20 backdrop-blur-3xl bg-[rgba(10,10,10,0.6)] border-t border-[rgba(255,255,255,0.03)]">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f7] mb-3 sm:mb-4 tracking-tight md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-[#ffffff] md:group-hover:via-[#f5f5f7] md:group-hover:to-[#ff8c42] transition-colors duration-500 drop-shadow-sm">{project.title}</h3>
        <p className="text-[#86868b] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed font-light">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[#f5f5f7] bg-[rgba(255,255,255,0.05)] rounded-full border border-[rgba(255,255,255,0.05)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
