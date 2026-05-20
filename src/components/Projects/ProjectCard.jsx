import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-[24px] sm:rounded-[32px] bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] overflow-hidden hover:border-[rgba(255,255,255,0.1)] transition-colors duration-500"
    >
      {/* Immersive Hover Background Glow (hidden on mobile for performance) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-[#ff6b00] to-[#ff4d85] opacity-0 group-hover:opacity-10 mix-blend-screen filter blur-[100px] transition-opacity duration-700 pointer-events-none"></div>

      {/* Media Container */}
      <div className="relative h-56 sm:h-72 md:h-96 w-full overflow-hidden bg-[#000000] p-4 sm:p-6 pb-0 flex items-end justify-center perspective-1000">
        
        {/* Apple Style Interface Mockup */}
        <div className="w-[95%] h-[95%] rounded-t-2xl bg-[#0a0a0a] border border-[rgba(255,255,255,0.1)] border-b-0 shadow-2xl overflow-hidden relative md:group-hover:translate-y-4 md:group-hover:rotate-x-12 transform-style-3d transition-transform duration-700 ease-[0.25,1,0.5,1] flex flex-col origin-bottom">
           
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
          <motion.a 
            href={project.githubLink} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 glass-pill flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 backdrop-blur-xl shadow-lg"
          >
            <FaGithub size={18} className="sm:w-[20px]" />
          </motion.a>
          <motion.a 
            href={project.liveLink} 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 sm:w-12 sm:h-12 glass-pill flex items-center justify-center text-white hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300 backdrop-blur-xl shadow-lg"
          >
            <FaExternalLinkAlt size={16} className="sm:w-[18px]" />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 md:p-10 flex flex-col relative z-10 backdrop-blur-3xl bg-[rgba(10,10,10,0.8)] border-t border-[rgba(255,255,255,0.05)]">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f7] mb-3 sm:mb-4 tracking-tight md:group-hover:text-transparent md:group-hover:bg-clip-text md:group-hover:bg-gradient-to-r md:group-hover:from-[#ff6b00] md:group-hover:to-[#ff4d85] transition-colors duration-300">{project.title}</h3>
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
