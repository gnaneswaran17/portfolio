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
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20 text-center max-w-3xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff5f1f]/20 to-[#ff3366]/20 blur-[60px] rounded-full opacity-40 inline-block w-48 h-16 left-1/2 -translate-x-1/2 -top-4 pointer-events-none"></div>
          <h2 className="text-fluid-h2 font-bold text-[#f5f5f7] mb-4 md:mb-6 tracking-tighter drop-shadow-sm">
            Technical Toolkit
          </h2>
          <p className="text-[#86868b] text-fluid-p font-light">
            A comprehensive overview of my technical expertise, architected for performance, scalability, and seamless user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden group hover:border-[rgba(255,255,255,0.15)] transition-all duration-700"
            >
              <h3 className="text-lg md:text-xl font-bold text-[#f5f5f7] mb-6 md:mb-8 tracking-tight border-b border-[rgba(255,255,255,0.05)] pb-3 md:pb-4">
                {skillGroup.category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap gap-2.5 md:gap-3"
              >
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 glass-pill px-3 md:px-4 py-1.5 md:py-2 hover:bg-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.2)] transition-all duration-300 cursor-default shadow-[0_2px_10px_-1px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_16px_-2px_rgba(0,0,0,0.3)]"
                  >
                    <skill.icon className="text-base md:text-lg opacity-90 drop-shadow-md" style={{ color: skill.color }} />
                    <span className="text-xs md:text-sm font-medium text-[#f5f5f7]">{skill.name}</span>
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
