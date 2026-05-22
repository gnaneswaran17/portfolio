import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--glass-border)] py-16 relative overflow-hidden">
      {/* Cyberpunk Top Accent Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[var(--neon-cyan)] to-transparent opacity-50 shadow-[0_0_10px_var(--neon-cyan)]"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Terminal decorative element instead of logo */}
        <div className="mb-8 flex items-center justify-center gap-2">
           <span className="w-1.5 h-1.5 bg-[var(--neon-pink)] animate-pulse"></span>
           <span className="w-1.5 h-1.5 bg-[var(--neon-cyan)] animate-[pulse_1.5s_infinite]"></span>
           <span className="w-1.5 h-1.5 bg-[var(--neon-green)] animate-[pulse_2s_infinite]"></span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-[var(--text-secondary)] font-['Share_Tech_Mono'] text-xs sm:text-sm mb-10 tracking-widest uppercase">
          <span>&gt; BUILT_WITH</span>
          <div 
            className="flex items-center gap-2 bg-[var(--bg-elevated)] border border-[var(--neon-cyan)] px-4 py-1.5 hover:bg-[var(--neon-cyan)] hover:text-black transition-all duration-300 cursor-default shadow-[0_0_10px_var(--neon-cyan-dim)] text-[var(--neon-cyan)]"
            style={{ clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)' }}
          >
            <FaReact className="animate-[spin_10s_linear_infinite]" />
            <span className="font-bold">React</span>
          </div>
          <span className="text-[var(--text-tertiary)]">//</span>
          <div 
            className="flex items-center gap-2 bg-[var(--bg-elevated)] border border-[var(--neon-cyan)] px-4 py-1.5 hover:bg-[var(--neon-cyan)] hover:text-black transition-all duration-300 cursor-default shadow-[0_0_10px_var(--neon-cyan-dim)] text-[var(--neon-cyan)]"
            style={{ clipPath: 'polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px)' }}
          >
            <SiTailwindcss />
            <span className="font-bold">Tailwind</span>
          </div>
        </div>
        
        <p className="text-[var(--text-tertiary)] text-xs font-['Share_Tech_Mono'] tracking-widest uppercase flex items-center gap-2 justify-center">
          <span className="text-[var(--neon-pink)]">&copy;</span> {new Date().getFullYear()} GNANESWARAN A. // ALL_RIGHTS_RESERVED.
        </p>
      </div>
    </footer>
  );
};
