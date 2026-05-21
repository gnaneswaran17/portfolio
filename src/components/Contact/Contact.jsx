import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[#00D9FF] to-[#6E3BFF] rounded-full mix-blend-screen filter blur-[150px] md:blur-[200px] opacity-[0.12] md:opacity-[0.08] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <h2 className="text-fluid-h2 font-['Space_Grotesk',_sans-serif] font-extrabold text-[#f3f7ff] mb-4 md:mb-6 tracking-tighter drop-shadow-sm">Get In Touch</h2>
          <p className="text-[#86868b] text-fluid-p leading-relaxed font-light px-4">
            I'm currently exploring new opportunities. Whether you have a visionary project or just want to connect, my inbox is always open.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="lg:w-5/12 flex flex-col gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 sm:p-6 rounded-[24px] sm:rounded-3xl flex items-center gap-4 sm:gap-6 group transition-all cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(0,255,255,0.1)] rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl group-hover:bg-[#00D9FF] group-hover:text-black transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-[#86868b] font-medium text-[10px] sm:text-xs mb-1 uppercase tracking-widest">Email</h4>
                <a href="mailto:gnaneswaran2004@gmail.com" className="text-[#f3f7ff] text-sm sm:text-[17px] font-semibold hover:text-[#00D9FF] transition-colors tracking-tight">gnaneswaran2004@gmail.com</a>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 sm:p-6 rounded-[24px] sm:rounded-3xl flex items-center gap-4 sm:gap-6 group transition-all cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(0,255,255,0.1)] rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl group-hover:bg-[#00D9FF] group-hover:text-black transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]">
                <FaLinkedin />
              </div>
              <div>
                <h4 className="text-[#86868b] font-medium text-[10px] sm:text-xs mb-1 uppercase tracking-widest">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/gnaneswarana/" target="_blank" rel="noopener noreferrer" className="text-[#f3f7ff] text-sm sm:text-[17px] font-semibold hover:text-[#00D9FF] transition-colors tracking-tight">/in/gnaneswarana</a>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 sm:p-6 rounded-[24px] sm:rounded-3xl flex items-center gap-4 sm:gap-6 group transition-all cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(0,255,255,0.1)] rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl group-hover:bg-[#00D9FF] group-hover:text-black transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]">
                <FaGithub />
              </div>
              <div>
                <h4 className="text-[#86868b] font-medium text-[10px] sm:text-xs mb-1 uppercase tracking-widest">GitHub</h4>
                <a href="https://github.com/gnaneswaran17" target="_blank" rel="noopener noreferrer" className="text-[#f3f7ff] text-sm sm:text-[17px] font-semibold hover:text-[#00D9FF] transition-colors tracking-tight">/gnaneswaran17</a>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-5 sm:p-6 rounded-[24px] sm:rounded-3xl flex items-center gap-4 sm:gap-6 group transition-all cursor-default">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.01)] border border-[rgba(0,255,255,0.1)] rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl group-hover:bg-[#00D9FF] group-hover:text-black transition-all duration-300 shadow-inner group-hover:shadow-[0_0_15px_rgba(0,217,255,0.4)]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-[#86868b] font-medium text-[10px] sm:text-xs mb-1 uppercase tracking-widest">Location</h4>
                <span className="text-[#f3f7ff] text-sm sm:text-[17px] font-semibold tracking-tight">Chennai, India</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="lg:w-7/12 glass-card p-6 sm:p-8 md:p-12 rounded-[32px] md:rounded-[40px] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-transparent pointer-events-none"></div>
            
            <form className="flex flex-col gap-4 sm:gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1 group">
                  <input type="text" id="name" required className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[16px] sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-[#f3f7ff] focus:outline-none focus:bg-[rgba(255,255,255,0.04)] focus:border-[#00D9FF]/50 focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all duration-300 placeholder:text-[#86868b] font-medium text-[15px]" placeholder="Name" />
                </div>
                <div className="flex-1 group">
                  <input type="email" id="email" required className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[16px] sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-[#f3f7ff] focus:outline-none focus:bg-[rgba(255,255,255,0.04)] focus:border-[#00D9FF]/50 focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all duration-300 placeholder:text-[#86868b] font-medium text-[15px]" placeholder="Email" />
                </div>
              </div>
              
              <div className="group">
                <input type="text" id="subject" required className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[16px] sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-[#f3f7ff] focus:outline-none focus:bg-[rgba(255,255,255,0.04)] focus:border-[#00D9FF]/50 focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all duration-300 placeholder:text-[#86868b] font-medium text-[15px]" placeholder="Subject" />
              </div>
              
              <div className="group">
                <textarea id="message" rows="5" required className="w-full bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-[16px] sm:rounded-2xl px-4 sm:px-5 py-3.5 sm:py-4 text-[#f3f7ff] focus:outline-none focus:bg-[rgba(255,255,255,0.04)] focus:border-[#00D9FF]/50 focus:shadow-[0_0_15px_rgba(0,217,255,0.2)] transition-all duration-300 resize-none placeholder:text-[#86868b] font-medium text-[15px]" placeholder="Your message..."></textarea>
              </div>
              
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative overflow-hidden bg-[rgba(0,217,255,0.1)] border border-[#00D9FF] text-[#00D9FF] py-4 px-8 sm:px-10 rounded-full font-bold tracking-tight w-full sm:w-auto self-start mt-2 shadow-[0_0_20px_rgba(0,217,255,0.15)] hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] text-[15px] transition-all duration-500 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <span className="relative z-10 group-hover:text-[#05070A] transition-colors duration-500">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
