import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

export const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t border-[rgba(255,255,255,0.05)] py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,107,0,0.3)] to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10">
        
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b00] to-[#ff4d85] flex items-center justify-center text-white font-bold text-lg mb-8 opacity-80 shadow-[0_0_20px_rgba(255,107,0,0.3)]">
          G
        </div>

        <div className="flex items-center justify-center gap-4 text-[#86868b] text-sm mb-10 font-medium">
          <span>Designed & Built with</span>
          <div className="flex items-center gap-1.5 glass-pill px-4 py-1.5 hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-default">
            <FaReact className="text-white text-sm animate-[spin_10s_linear_infinite]" />
            <span className="text-[#f5f5f7]">React</span>
          </div>
          <span className="text-[#515154]">&</span>
          <div className="flex items-center gap-1.5 glass-pill px-4 py-1.5 hover:bg-[rgba(255,255,255,0.08)] transition-colors cursor-default">
            <SiTailwindcss className="text-white text-sm" />
            <span className="text-[#f5f5f7]">Tailwind</span>
          </div>
        </div>
        
        <p className="text-[#515154] text-xs font-medium tracking-wide uppercase">
          &copy; {new Date().getFullYear()} Gnaneswaran A. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
