import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import logo from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-[#05070A] border-t border-[rgba(255,255,255,0.05)] py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,217,255,0.3)] to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10">
        
        <div className="w-14 h-14 md:w-16 md:h-16 mb-6 relative transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(0,217,255,0.6)] drop-shadow-[0_0_15px_rgba(0,217,255,0.3)]">
          <img src={logo} alt="Gnaneswaran Logo" className="w-full h-full object-contain" />
        </div>

        <div className="flex items-center justify-center gap-4 text-[#86868b] text-sm mb-10 font-medium">
          <span>Designed & Built with</span>
          <div className="flex items-center gap-1.5 rounded-full bg-[rgba(8,12,18,0.72)] border border-[rgba(0,255,255,0.1)] px-4 py-1.5 hover:bg-[rgba(0,217,255,0.05)] hover:border-[rgba(0,255,255,0.3)] transition-all cursor-default shadow-[0_0_15px_rgba(0,255,255,0.05)] backdrop-blur-md">
            <FaReact className="text-[#00D9FF] text-sm animate-[spin_10s_linear_infinite]" />
            <span className="text-[#f3f7ff]">React</span>
          </div>
          <span className="text-[#515154]">&</span>
          <div className="flex items-center gap-1.5 rounded-full bg-[rgba(8,12,18,0.72)] border border-[rgba(0,255,255,0.1)] px-4 py-1.5 hover:bg-[rgba(0,217,255,0.05)] hover:border-[rgba(0,255,255,0.3)] transition-all cursor-default shadow-[0_0_15px_rgba(0,255,255,0.05)] backdrop-blur-md">
            <SiTailwindcss className="text-[#00D9FF] text-sm" />
            <span className="text-[#f3f7ff]">Tailwind</span>
          </div>
        </div>
        
        <p className="text-[#515154] text-xs font-medium tracking-wide uppercase">
          &copy; {new Date().getFullYear()} Gnaneswaran A. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
