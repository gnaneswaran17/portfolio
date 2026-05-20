import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#000000] border-t border-[rgba(255,255,255,0.05)] py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,107,0,0.3)] to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10">
        
        <div className="w-10 h-10 md:w-12 md:h-12 mb-8 relative rounded-[12px] shadow-[0_0_20px_rgba(255,95,31,0.3)] overflow-hidden hover:shadow-[0_0_30px_rgba(255,95,31,0.5)] transition-shadow duration-500">
          <img src={logo} alt="Gnaneswaran Logo" className="w-full h-full object-cover" />
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
