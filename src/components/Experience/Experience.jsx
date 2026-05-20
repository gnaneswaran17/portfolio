import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f1f]/20 to-[#ff3366]/20 blur-[60px] rounded-full opacity-40 inline-block w-48 h-16 left-1/2 -translate-x-1/2 -top-4 pointer-events-none"></div>
          <h2 className="text-fluid-h2 font-bold text-[#f5f5f7] mb-4 md:mb-6 tracking-tighter">
            Career Journey
          </h2>
          <p className="text-[#86868b] text-fluid-p font-light">
            My professional path in software engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Subtle line */}
          <div className="absolute left-[24px] sm:left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[rgba(255,255,255,0.1)] md:-translate-x-1/2"></div>
          
          {/* Animated Glowing Liquid Path */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[24px] sm:left-[30px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#ff5f1f] via-[#ff3366] to-transparent md:-translate-x-1/2 origin-top shadow-[0_0_20px_rgba(255,95,31,0.6)]"
          ></motion.div>
          
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="relative pl-12 sm:pl-16 md:pl-0 mb-16 md:mb-20 last:mb-0"
            >
              <div className={`md:flex items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Glow Dot */}
                <div className="absolute left-[24px] sm:left-[30px] md:left-1/2 -translate-x-1/2 mt-6 sm:mt-8 md:mt-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[rgba(255,95,31,0.1)] border border-[rgba(255,95,31,0.3)] flex items-center justify-center z-10 backdrop-blur-md shadow-[0_0_20px_rgba(255,95,31,0.2)]">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f1f] shadow-[0_0_12px_rgba(255,95,31,1)]"></div>
                </div>
                
                <motion.div 
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="md:w-[45%] glass-card p-6 sm:p-8 md:p-10 group hover:border-[rgba(255,255,255,0.15)] transition-all duration-700 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-[#ff5f1f] to-transparent mix-blend-screen filter blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

                  <span className="text-[#86868b] font-mono text-xs sm:text-sm tracking-widest font-semibold block mb-3 sm:mb-4 uppercase">{exp.period}</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f5f7] mb-2 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ffffff] group-hover:to-[#ff8c42] transition-all duration-500 drop-shadow-sm">{exp.role}</h3>
                  <h4 className="text-lg sm:text-xl text-[#ff8c42] mb-6 sm:mb-8 font-medium drop-shadow-sm">{exp.company}</h4>
                  
                  <ul className="space-y-3 sm:space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-[#b3b3b3] text-sm sm:text-base flex items-start gap-3 sm:gap-4 leading-relaxed font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[rgba(255,255,255,0.2)] mt-2 sm:mt-2.5 flex-shrink-0 group-hover:bg-[#ff6b00] transition-colors duration-300"></span>
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
