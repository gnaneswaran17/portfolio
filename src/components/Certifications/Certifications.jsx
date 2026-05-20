import { motion } from 'framer-motion';
import { certifications } from '../../data/certifications';
import { FaAward } from 'react-icons/fa';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-fluid-h2 font-bold text-[#f5f5f7] mb-4 md:mb-6 tracking-tighter">
            Credentials
          </h2>
          <p className="text-[#86868b] text-fluid-p font-light">
            Continuous learning and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] flex items-center gap-4 sm:gap-5 group hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[#ff6b00] mix-blend-screen filter blur-[40px] opacity-0 md:group-hover:opacity-15 transition-opacity duration-500 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
              
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.05)] text-[#f5f5f7] flex items-center justify-center text-lg sm:text-xl shadow-inner md:group-hover:scale-105 transition-transform duration-300">
                <FaAward className="opacity-90" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-[17px] font-semibold text-[#f5f5f7] mb-1 truncate tracking-tight">{cert.title}</h3>
                <p className="text-[#86868b] text-[11px] sm:text-[13px] font-medium tracking-wide uppercase truncate">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
