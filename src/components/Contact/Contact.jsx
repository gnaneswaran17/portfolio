import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { GlassButton } from '../ui/GlassButton';

export const Contact = () => {
  const [status, setStatus] = useState('TRANSMIT_DATA');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('TRANSMITTING...');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/gnaneswaran2004@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('TRANSMISSION_SUCCESSFUL');
        e.target.reset();
        setTimeout(() => setStatus('TRANSMIT_DATA'), 3000);
      } else {
        setStatus('TRANSMISSION_FAILED');
        setTimeout(() => setStatus('TRANSMIT_DATA'), 3000);
      }
    } catch (error) {
      setStatus('TRANSMISSION_FAILED');
      setTimeout(() => setStatus('TRANSMIT_DATA'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      
      {/* Background cyber glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[var(--neon-pink)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.05] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20 relative"
        >
          {/* Cyberpunk Decorative Header Elements */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-50">
            <span className="w-12 h-[1px] bg-[var(--neon-pink)]"></span>
            <span className="font-['Share_Tech_Mono'] text-xs text-[var(--neon-pink)] tracking-widest">[ INCOMING_TRANSMISSION ]</span>
            <span className="w-12 h-[1px] bg-[var(--neon-pink)]"></span>
          </div>

          <h2 className="text-fluid-h2 font-['Orbitron',_sans-serif] font-black text-white mb-4 md:mb-6 tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Establish <span className="text-[var(--neon-pink)] drop-shadow-[0_0_15px_var(--neon-pink-dim)]">Link</span></h2>
          <p className="text-[var(--text-secondary)] text-fluid-p font-['Share_Tech_Mono'] leading-relaxed tracking-wide">
            &gt; SYSTEM READY FOR NEW CONNECTIONS.<br/>
            &gt; ENTER YOUR TRANSMISSION DETAILS BELOW.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:w-5/12 flex flex-col gap-4"
          >
            <div className="cyber-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-6 group transition-all">
              <div className="w-12 h-12 bg-[var(--bg-primary)] border border-[var(--neon-cyan)] flex items-center justify-center text-xl text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-black transition-colors" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-[var(--text-tertiary)] font-['Share_Tech_Mono'] font-bold text-[10px] sm:text-xs mb-1 uppercase tracking-widest">COMMS_CHANNEL</h4>
                <a href="mailto:gnaneswaran2004@gmail.com" className="text-white font-['Rajdhani'] text-sm sm:text-lg font-bold hover:text-[var(--neon-cyan)] transition-colors tracking-widest uppercase">gnaneswaran2004@gmail.com</a>
              </div>
            </div>

            <div className="cyber-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-6 group transition-all">
              <div className="w-12 h-12 bg-[var(--bg-primary)] border border-[var(--neon-cyan)] flex items-center justify-center text-xl text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-black transition-colors" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                <FaLinkedin />
              </div>
              <div>
                <h4 className="text-[var(--text-tertiary)] font-['Share_Tech_Mono'] font-bold text-[10px] sm:text-xs mb-1 uppercase tracking-widest">NETWORK_NODE</h4>
                <a href="https://www.linkedin.com/in/gnaneswarana/" target="_blank" rel="noopener noreferrer" className="text-white font-['Rajdhani'] text-sm sm:text-lg font-bold hover:text-[var(--neon-cyan)] transition-colors tracking-widest uppercase">/in/gnaneswarana</a>
              </div>
            </div>

            <div className="cyber-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-6 group transition-all">
              <div className="w-12 h-12 bg-[var(--bg-primary)] border border-[var(--neon-cyan)] flex items-center justify-center text-xl text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-black transition-colors" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                <FaGithub />
              </div>
              <div>
                <h4 className="text-[var(--text-tertiary)] font-['Share_Tech_Mono'] font-bold text-[10px] sm:text-xs mb-1 uppercase tracking-widest">DATABANK_ACCESS</h4>
                <a href="https://github.com/gnaneswaran17" target="_blank" rel="noopener noreferrer" className="text-white font-['Rajdhani'] text-sm sm:text-lg font-bold hover:text-[var(--neon-cyan)] transition-colors tracking-widest uppercase">/gnaneswaran17</a>
              </div>
            </div>

            <div className="cyber-panel p-5 sm:p-6 flex items-center gap-4 sm:gap-6 group transition-all">
              <div className="w-12 h-12 bg-[var(--bg-primary)] border border-[var(--neon-cyan)] flex items-center justify-center text-xl text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-black transition-colors" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-[var(--text-tertiary)] font-['Share_Tech_Mono'] font-bold text-[10px] sm:text-xs mb-1 uppercase tracking-widest">PHYSICAL_LOC</h4>
                <span className="text-white font-['Rajdhani'] text-sm sm:text-lg font-bold tracking-widest uppercase">Chennai, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-7/12 cyber-panel p-6 sm:p-8 md:p-12 relative overflow-hidden"
            style={{ clipPath: 'polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px)' }}
          >
            {/* Hazard Stripe Decorator */}
            <div className="absolute top-0 right-0 w-32 h-2 bg-[repeating-linear-gradient(45deg,var(--neon-pink),var(--neon-pink)_10px,#000_10px,#000_20px)]"></div>
            
            <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New transmission from your portfolio!" />
              
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 relative group">
                  <span className="absolute left-4 top-4 text-[var(--neon-cyan)] font-['Share_Tech_Mono']">&gt;</span>
                  <input type="text" id="name" name="name" required className="w-full bg-[var(--bg-primary)] border border-[var(--glass-border)] px-8 sm:px-10 py-3.5 sm:py-4 text-white font-['Share_Tech_Mono'] focus:outline-none focus:border-[var(--neon-cyan)] focus:shadow-[0_0_15px_var(--neon-cyan-dim)] transition-all duration-300 placeholder:text-[var(--text-tertiary)]" placeholder="USER_NAME" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }} />
                </div>
                <div className="flex-1 relative group">
                  <span className="absolute left-4 top-4 text-[var(--neon-cyan)] font-['Share_Tech_Mono']">&gt;</span>
                  <input type="email" id="email" name="email" required className="w-full bg-[var(--bg-primary)] border border-[var(--glass-border)] px-8 sm:px-10 py-3.5 sm:py-4 text-white font-['Share_Tech_Mono'] focus:outline-none focus:border-[var(--neon-cyan)] focus:shadow-[0_0_15px_var(--neon-cyan-dim)] transition-all duration-300 placeholder:text-[var(--text-tertiary)]" placeholder="USER_EMAIL" style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }} />
                </div>
              </div>
              
              <div className="relative group flex-1">
                <span className="absolute left-4 top-4 text-[var(--neon-cyan)] font-['Share_Tech_Mono']">&gt;</span>
                <textarea id="message" name="message" rows="5" required className="w-full bg-[var(--bg-primary)] border border-[var(--glass-border)] px-8 sm:px-10 py-3.5 sm:py-4 text-white font-['Share_Tech_Mono'] focus:outline-none focus:border-[var(--neon-cyan)] focus:shadow-[0_0_15px_var(--neon-cyan-dim)] transition-all duration-300 resize-none placeholder:text-[var(--text-tertiary)]" placeholder="DATA_PAYLOAD..." style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}></textarea>
              </div>
              
              <GlassButton 
                type="submit" 
                className="w-full sm:w-auto self-end mt-2 min-w-[200px]"
                size="lg"
                variant={status.includes('FAILED') ? 'primary' : 'secondary'}
                disabled={status === 'TRANSMITTING...'}
              >
                {status}
              </GlassButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
