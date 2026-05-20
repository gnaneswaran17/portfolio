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
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    }
  };

  return (
    <section id="skills" className="py-20 md:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12 md:mb-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-fluid-h2 font-bold text-[#f5f5f7] mb-4 md:mb-6 tracking-tighter">
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
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 md:p-8 relative overflow-hidden"
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
                    className="flex items-center gap-2 glass-pill px-3 md:px-4 py-1.5 md:py-2 hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-300 cursor-default"
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
