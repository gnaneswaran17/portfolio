import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#05070A] font-['Space_Grotesk',_sans-serif]">
      {/* Background Engine */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Thin Grid */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0v1H0V0h40zM0 40V0h1v40H0z' fill='%2300D9FF' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        >
          {/* Vignettes for cinematic edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070A] via-transparent to-[#05070A] opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-transparent to-[#05070A] opacity-90"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#00D9FF] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.12] pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#6E3BFF] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15] pointer-events-none animate-[pulse_8s_ease-in-out_infinite_reverse]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[rgba(0,255,255,0.15)] bg-gradient-to-r from-[rgba(0,255,255,0.05)] to-transparent backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,217,255,0.1)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFB2] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FFB2] shadow-[0_0_8px_#00FFB2]"></span>
          </span>
          <span className="text-[#00D9FF] text-xs font-bold tracking-[0.1em] uppercase drop-shadow-[0_0_5px_rgba(0,217,255,0.5)]">System Active: V 4.0.9</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="max-w-[1000px] mx-auto"
        >
          <h1 className="text-[54px] sm:text-[70px] md:text-[90px] lg:text-[110px] font-extrabold leading-[0.95] tracking-tighter text-white mb-6">
            Elite Security for <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#00FFB2] drop-shadow-[0_0_30px_rgba(0,255,178,0.25)]">
              The Future.
            </span>
          </h1>
          
          <p className="text-[#86868b] text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed tracking-tight font-medium">
            Military-grade threat detection and AI-driven telemetry. Monitor, analyze, and neutralize vulnerabilities before they happen.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-24 w-full"
        >
          <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#00D9FF] text-black font-bold text-[16px] shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_45px_rgba(0,217,255,0.5)] hover:bg-[#20e3ff] transition-all duration-300 transform hover:-translate-y-1">
            Start Free Trial
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[rgba(255,255,255,0.02)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] text-white font-semibold text-[16px] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            View Documentation
          </button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl mx-auto relative group"
        >
          {/* Ambient Glow behind dashboard */}
          <div className="absolute inset-0 bg-[#00D9FF]/20 blur-[100px] md:blur-[140px] rounded-full group-hover:bg-[#00D9FF]/25 transition-all duration-1000 pointer-events-none z-0"></div>
          
          <div className="relative z-10 w-full rounded-2xl md:rounded-[32px] border border-[rgba(0,255,255,0.12)] bg-gradient-to-b from-[rgba(0,255,255,0.06)] to-[rgba(255,255,255,0.01)] backdrop-blur-2xl p-3 md:p-5 shadow-[0_30px_80px_rgba(0,0,0,0.6),_inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden transform-gpu hover:scale-[1.01] transition-transform duration-700">
            {/* Dashboard Mockup Header */}
            <div className="flex items-center gap-2 mb-5 px-4 pt-2">
              <div className="w-3 h-3 rounded-full bg-[#ff3366]/70 border border-[#ff3366]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffb580]/70 border border-[#ffb580]"></div>
              <div className="w-3 h-3 rounded-full bg-[#00FFB2]/70 border border-[#00FFB2]"></div>
              <div className="ml-4 h-6 w-48 bg-white/5 rounded-md border border-white/5"></div>
              <div className="ml-auto h-6 w-20 bg-[rgba(0,217,255,0.1)] rounded-md border border-[rgba(0,217,255,0.2)]"></div>
            </div>
            
            {/* Mockup Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 h-[350px] md:h-[500px]">
              {/* Main Chart Area */}
              <div className="col-span-1 md:col-span-2 bg-[#05070A]/80 rounded-xl border border-[rgba(255,255,255,0.03)] flex flex-col p-6 relative overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]">
                <div className="h-6 w-40 bg-white/10 rounded mb-8"></div>
                {/* Fake Chart Lines */}
                <div className="flex-1 w-full flex items-end gap-2 px-2 mt-auto">
                  <div className="w-1/6 h-[30%] bg-gradient-to-t from-[#00D9FF]/20 to-[#00D9FF]/5 rounded-t-sm border-t border-[#00D9FF]/40"></div>
                  <div className="w-1/6 h-[50%] bg-gradient-to-t from-[#00D9FF]/20 to-[#00D9FF]/5 rounded-t-sm border-t border-[#00D9FF]/40"></div>
                  <div className="w-1/6 h-[40%] bg-gradient-to-t from-[#00D9FF]/20 to-[#00D9FF]/5 rounded-t-sm border-t border-[#00D9FF]/40"></div>
                  <div className="w-1/6 h-[70%] bg-gradient-to-t from-[#00D9FF]/30 to-[#00D9FF]/10 rounded-t-sm border-t border-[#00D9FF]/60 relative">
                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00D9FF] rounded-full shadow-[0_0_15px_#00D9FF]"></div>
                  </div>
                  <div className="w-1/6 h-[60%] bg-gradient-to-t from-[#00D9FF]/20 to-[#00D9FF]/5 rounded-t-sm border-t border-[#00D9FF]/40"></div>
                  <div className="w-1/6 h-[85%] bg-gradient-to-t from-[#00FFB2]/30 to-[#00FFB2]/10 rounded-t-sm border-t border-[#00FFB2]/60 relative">
                     <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00FFB2] rounded-full shadow-[0_0_15px_#00FFB2]"></div>
                  </div>
                </div>
              </div>
              
              {/* Side Metric Cards */}
              <div className="flex flex-col gap-5">
                <div className="flex-1 bg-[#05070A]/80 rounded-xl border border-[#00FFB2]/20 p-6 shadow-[inset_0_0_30px_rgba(0,255,178,0.05)] relative overflow-hidden flex flex-col justify-center">
                  <div className="h-5 w-28 bg-white/10 rounded mb-4 z-10 relative"></div>
                  <div className="text-[40px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#00FFB2] to-[#00D9FF] z-10 relative drop-shadow-[0_0_10px_rgba(0,255,178,0.3)]">99.99%</div>
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#00FFB2]/20 blur-[40px] rounded-full pointer-events-none"></div>
                </div>
                <div className="flex-1 bg-[#05070A]/80 rounded-xl border border-[#6E3BFF]/20 p-6 shadow-[inset_0_0_30px_rgba(110,59,255,0.05)] relative overflow-hidden flex flex-col justify-center">
                  <div className="h-5 w-24 bg-white/10 rounded mb-4 z-10 relative"></div>
                  <div className="text-[40px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#6E3BFF] to-[#00D9FF] z-10 relative drop-shadow-[0_0_10px_rgba(110,59,255,0.3)]">12.4M</div>
                  <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#6E3BFF]/20 blur-[40px] rounded-full pointer-events-none"></div>
                </div>
              </div>
            </div>
            
            {/* Glossy Edge Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(0,255,255,0.4)] to-transparent opacity-50"></div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
