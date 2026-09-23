import React from "react";
import { ArrowRight, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ onAboutClick, onServicesClick }) => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  });

  const fadeInRight = (delay = 0) => ({
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-24 bg-[#030712]"
    >
      {/* Animated Ambient Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-cyan-600/20 blur-[100px] md:blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-600/20 blur-[100px] md:blur-[120px] pointer-events-none"
      />
      
      {/* Elegant Dot Matrix Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #64748b 1px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Vignette Depth Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, #030712 100%)'
        }} 
      />

      {}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
          
          {/* Card Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16">
            
            {}
            <div className="flex flex-col justify-center">
              {/* Badge */}
              <motion.div {...fadeUp(0.1)} className="w-fit mb-8">
                <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 shadow-inner shadow-orange-500/10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                    AI-Powered Security
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.2)}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
              >
                Cyber threats are evolving
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  Is your business ready?
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                {...fadeUp(0.3)}
                className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl"
              >
                Protecting your business continuity, customer trust, and bottom line through Interactive Defense and Proactive Security. 24/7 monitoring with compliance automation.
              </motion.p>

              {}
              <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 mb-12">
                <button
                  onClick={onAboutClick}
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Security Assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button
                  onClick={onServicesClick}
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-orange-500/50 hover:bg-orange-500/10 rounded-xl text-slate-300 hover:text-orange-400 font-semibold text-base transition-all duration-300"
                >
                  Explore Solutions
                </button>
              </motion.div>

              {}
              <motion.div {...fadeUp(0.5)} className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4",
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=c0aede",
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Nala&backgroundColor=ffdfbf"
                    ].map((src, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden"
                      >
                        <img src={src} alt="User Avatar" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Trusted by 500+ Security Teams
                    </div>
                    <div className="text-sm font-medium text-amber-500 flex items-center gap-1 mt-0.5">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-1 text-slate-300">4.9 rating</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {}
            <motion.div
              {...fadeInRight(0.3)}
              className="flex flex-col justify-center"
            >
              {/* Feature Image/Graphic */}
              <div className="relative mb-8 rounded-2xl overflow-hidden h-64 lg:h-80 group border border-white/10 shadow-2xl bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center p-8">
                {/* Logo */}
                <img 
                  src="/assets/logo.png" 
                  alt="Cybertrove Logo" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay FX - Lightened and blur removed to keep logo crystal clear */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none opacity-50" />
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 z-20 bg-slate-900/50 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg">
                  <Shield className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Threat Detection", value: "99.7%", accent: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
                  { label: "Compliance Rate", value: "100%", accent: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                  { label: "Response Time", value: "<1m", accent: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
                  { label: "Uptime", value: "24/7", accent: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                    className={`relative p-5 rounded-xl border ${metric.border} ${metric.bg} backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1`}
                  >
                    <div className={`text-2xl lg:text-3xl font-bold ${metric.accent} mb-1 tracking-tight`}>
                      {metric.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-400">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {}
          <motion.div
            {...fadeUp(0.6)}
            className="border-t border-white/5 bg-slate-950/30 px-6 py-8 text-center"
          >
            <div className="text-xs font-semibold text-slate-500 mb-6 uppercase tracking-[0.2em]">
              Trusted by innovative companies
            </div>
            <div className="flex justify-center items-center flex-wrap gap-8 md:gap-16 opacity-70">
              {["Microsoft", "AWS", "Google Cloud", "Azure", "IBM"].map((company) => (
                <span
                  key={company}
                  className="text-base md:text-lg font-bold text-slate-400 transition-colors duration-300 hover:text-white cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;