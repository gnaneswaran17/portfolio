import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const glassButtonVariants = cva(
  "relative isolate inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ease-out tracking-widest uppercase font-['Rajdhani',_sans-serif] disabled:opacity-50 disabled:cursor-not-allowed group",
  {
    variants: {
      size: {
        default: "px-6 py-3.5 text-base font-bold",
        sm: "px-4 py-2 text-sm font-bold",
        lg: "px-8 py-4 text-lg font-bold",
        icon: "h-10 w-10 p-0 gap-0 flex items-center justify-center",
      },
      variant: {
        primary: "text-[var(--neon-cyan)] border-[var(--neon-cyan)]",
        secondary: "text-[var(--neon-pink)] border-[var(--neon-pink)]",
      }
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
);

const GlassButton = forwardRef(
  ({ className, children, size, variant, contentClassName, glassColor, as: Component = "button", ...props }, ref) => {
    
    return (
      <Component
        className={cn(glassButtonVariants({ size, variant }), className)}
        ref={ref}
        style={{ clipPath: 'polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)' }}
        {...props}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-current opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>
        
        {/* Border Overlay */}
        <div className="absolute inset-0 border border-current z-0"></div>
        
        {/* Glowing Shadow under button */}
        <div className="absolute inset-0 shadow-[0_0_15px_currentColor] opacity-30 group-hover:opacity-80 group-hover:shadow-[0_0_30px_currentColor] transition-all duration-300 -z-10"></div>
        
        {/* Decorator Lines */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current"></div>
        
        {/* Scanline Effect */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="w-full h-[2px] bg-current opacity-30 absolute top-[-2px] group-hover:animate-[scanline_1s_ease-in-out_infinite]"></div>
        </div>
        
        {/* TEXT CONTENT */}
        <span className={cn("relative z-10 w-full flex items-center justify-center gap-[inherit] select-none drop-shadow-[0_0_8px_currentColor] glitch-hover", contentClassName)} data-text={typeof children === 'string' ? children : ''}>
          {children}
        </span>
        
        <style>{`
          @keyframes scanline {
            0% { top: -2px; }
            100% { top: 100%; }
          }
        `}</style>
      </Component>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
