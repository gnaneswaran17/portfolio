import { motion } from 'framer-motion';
import { FaTerminal, FaServer, FaCode } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
        >
          <h2 className="text-fluid-h2 font-bold text-[#f5f5f7] mb-6 md:mb-8 tracking-tighter">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] to-[#ff4d85]">Digital Future</span>
          </h2>
          <p className="text-[#86868b] text-fluid-p leading-relaxed font-light">
            I'm a Computer Science graduate driven by a passion for scalable systems and AI-powered solutions. I don't just write code; I craft high-performance architectures that power modern digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-card p-6 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-6 relative overflow-hidden group col-span-1 md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#ff6b00] mix-blend-screen filter blur-[60px] opacity-[0.05] md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-700 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] text-[#f5f5f7] flex items-center justify-center text-xl sm:text-2xl shadow-inner md:group-hover:scale-110 transition-transform duration-500 ease-out">
              <FaServer />
            </div>
            <div>
              <h3 className="text-[#f5f5f7] font-semibold text-xl sm:text-2xl mb-2 sm:mb-3 tracking-tight">Robust Backend</h3>
              <p className="text-[#86868b] text-sm sm:text-base font-light leading-relaxed">
                Specializing in Java and Spring Boot, I build secure, highly scalable REST APIs and engineer databases with PostgreSQL and MongoDB.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-card p-6 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#ff4d85] mix-blend-screen filter blur-[60px] opacity-[0.05] md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-700 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] text-[#f5f5f7] flex items-center justify-center text-xl sm:text-2xl shadow-inner md:group-hover:scale-110 transition-transform duration-500 ease-out">
              <FaCode />
            </div>
            <div>
              <h3 className="text-[#f5f5f7] font-semibold text-xl sm:text-2xl mb-2 sm:mb-3 tracking-tight">Cinematic UI</h3>
              <p className="text-[#86868b] text-sm sm:text-base font-light leading-relaxed">
                Crafting pixel-perfect, responsive interfaces in React.js that blur the lines between web applications and native desktop software.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-card p-6 sm:p-8 md:p-10 flex flex-col gap-5 md:gap-6 relative overflow-hidden group md:col-span-2 lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#8a2be2] mix-blend-screen filter blur-[60px] opacity-[0.05] md:opacity-0 md:group-hover:opacity-20 transition-opacity duration-700 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] text-[#f5f5f7] flex items-center justify-center text-lg sm:text-xl shadow-inner md:group-hover:scale-110 transition-transform duration-500 ease-out">
              <FaTerminal />
            </div>
            <div>
              <h3 className="text-[#f5f5f7] font-semibold text-xl sm:text-2xl mb-2 sm:mb-3 tracking-tight">AI & Automation</h3>
              <p className="text-[#86868b] text-sm sm:text-base font-light leading-relaxed">
                Integrating cutting-edge AI APIs to build intelligent automation tools, streamlining workflows, and creating next-generation software.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
