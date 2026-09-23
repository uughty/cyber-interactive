"use client";


import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Headphones,
  GraduationCap,
  Settings,
  CheckCircle,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const philosophySections = [
  {
    icon: "/assets/biometrics.png", // Fixed path for deployment
    title: "INTERACTIVE DEFENSE",
    accent: "#f7931e",
    border: "rgba(247,147,30,0.25)",
    glow: "rgba(247,147,30,0.08)",
    num: "01",
    points: [
      { subtitle: "Engagement:", text: "Our approach to cybersecurity is not passive. We actively engage with our clients, understanding their unique challenges and integrating our solutions seamlessly into their existing systems." },
      { subtitle: "Customization:", text: "Recognizing that no two organizations are alike, we tailor defense strategies to fit the specific needs of each client. This ensures every aspect of their digital infrastructure is fortified." },
      { subtitle: "Collaboration:", text: "We believe in building strong partnerships with our clients, creating a robust defense framework that combines our expertise with the client's unique insights." },
    ],
  },
  {
    icon: "/assets/fingerprint.png", // Fixed path for deployment
    title: "PROACTIVE SECURITY",
    accent: "#ffffff",
    border: "rgba(255,255,255,0.25)",
    glow: "rgba(255,255,255,0.08)",
    num: "02",
    points: [
      { subtitle: "Prevention:", text: "Our security measures are designed to anticipate and mitigate threats before they can impact our clients." },
      { subtitle: "Innovation:", text: "We continuously invest in cutting-edge technologies and methodologies to stay at the forefront of cybersecurity." },
      { subtitle: "Future-Proofing:", text: "We ensure compliance with current regulations while preparing for future challenges and scalability." },
    ],
  },
  {
    icon: "/assets/artifical.png", // Fixed path for deployment
    title: "CORE BELIEFS AND PRACTICES",
    accent: "#f7931e",
    border: "rgba(247,147,30,0.25)",
    glow: "rgba(247,147,30,0.08)",
    num: "03",
    points: [
      { subtitle: "Tailored Security:", text: "We reject one-size-fits-all solutions. Every service is customized to address specific requirements and vulnerabilities." },
      { subtitle: "Integrated Strategy:", text: "Security is not an add-on; it's integrated into business strategy to support operations rather than hinder them." },
      { subtitle: "Peace of Mind:", text: "We aim to provide our clients with confidence and assurance in an unpredictable digital world." },
    ],
  },
];


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});


const Philosophy = () => {
  return (
    <TooltipProvider>
      <section
        id="about"
        className="relative font-sans antialiased overflow-hidden py-28 bg-gray-900" // Tailwind fallback
        style={{ background: "#07131f" }}
      >
        <style jsx>{`
          /* Deployment-safe circuit grid */
          .circuit-grid {
            background-image: url("data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 70 H120 M70 20 V120' stroke='%23f7931e' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='20' cy='70' r='1.5' fill='%23ffffff'/%3E%3Ccircle cx='120' cy='70' r='1.5' fill='%23f7931e'/%3E%3Ccircle cx='70' cy='20' r='1.5' fill='%23ffffff'/%3E%3Ccircle cx='70' cy='120' r='1.5' fill='%23f7931e'/%3E%3C/svg%3E");
            background-size: 140px 140px;
            opacity: 0.06;
          }
        `}</style>


        {/* Circuit grid */}
        <div className="absolute inset-0 z-0 pointer-events-none circuit-grid" />


        {/* Ambient glows */}
        <div 
          className="absolute pointer-events-none z-0" 
          style={{ 
            width: 560, 
            height: 560, 
            borderRadius: "50%", 
            background: "radial-gradient(circle, rgba(247,147,30,0.07) 0%, transparent 70%)", 
            top: -120, 
            left: -100 
          }} 
        />
        <div 
          className="absolute pointer-events-none z-0" 
          style={{ 
            width: 400, 
            height: 400, 
            borderRadius: "50%", 
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)", 
            bottom: 0, 
            right: 0 
          }} 
        />


        {/* Scan line */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{ left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(247,147,30,0.12), transparent)" }}
          animate={{ top: ["8%", "92%", "8%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />


        <div className="relative z-10 container mx-auto px-6">
          {/* ── Header ── */}
          <motion.div {...fadeUp()} className="text-center mb-24 opacity-100">
            <div
              className="inline-flex items-center gap-2 mb-5"
              style={{
                background: "rgba(247,147,30,0.08)",
                border: "0.5px solid rgba(247,147,30,0.3)",
                borderRadius: 999,
                padding: "5px 18px",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#f7931e", display: "inline-block", boxShadow: "0 0 0 3px rgba(247,147,30,0.2)" }} />
              <span style={{ fontSize: "0.7rem", color: "#f7931e", letterSpacing: "0.08em", fontWeight: 600 }}>
                OUR PHILOSOPHY
              </span>
            </div>


            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: "#FFFFFF", lineHeight: 1.15 }}
            >
              Rooted in{" "}
              <span style={{ color: "#f7931e" }}>Cyber Excellence</span>
            </h2>
          </motion.div>


          {/* ── Sections ── */}
          <div className="space-y-20">
            {philosophySections.map((section, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  {...fadeUp(index * 0.1)}
                  className="grid md:grid-cols-2 gap-12 items-center"
                  style={{ direction: isReversed ? "rtl" : "ltr" }}
                >
                  {/* ── Icon panel ── */}
                  <div className="flex justify-center" style={{ direction: "ltr" }}>
                    <div style={{ position: "relative" }}>
                      <div style={{ position: "absolute", inset: -16, borderRadius: "50%", background: `radial-gradient(circle, ${section.glow}, transparent 70%)`, pointerEvents: "none" }} />


                      <div style={{ position: "absolute", top: -10, right: -10, width: 32, height: 32, borderRadius: "50%", background: "#07131f", border: `0.5px solid ${section.border}`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 2 }}>
                        <span style={{ fontSize: "0.65rem", fontWeight: 800, color: section.accent, letterSpacing: "0.05em" }}>
                          {section.num}
                        </span>
                      </div>


                      <div style={{ width: 160, height: 160, borderRadius: "50%", background: "rgba(17,25,40,0.85)", border: `0.5px solid ${section.border}`, backdropFilter: "blur(14px)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 1, boxShadow: `0 0 0 1px ${section.border}, 0 0 40px ${section.glow}` }}>
                        <div style={{ position: "absolute", inset: 12, borderRadius: "50%", border: `0.5px solid ${section.border}`, opacity: 0.5 }} />
                        <img 
                          src={section.icon} 
                          alt={section.title} 
                          style={{ width: 72, height: 72, objectFit: "contain", position: "relative", zIndex: 1 }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div style={{ display: 'none', width: 72, height: 72, alignItems: 'center', justifyContent: 'center', color: section.accent, fontSize: '24px' }}>
                          🔒
                        </div>
                      </div>


                      <div style={{ position: "absolute", bottom: -32, left: "50%", transform: "translateX(-50%)", width: "0.5px", height: 24, background: `linear-gradient(to bottom, ${section.accent}, transparent)` }} />
                    </div>
                  </div>


                  {/* ── Content card ── */}
                  <div
                    style={{ 
                      direction: "ltr", 
                      background: "rgba(17,25,40,0.95)", 
                      border: `0.5px solid ${section.border}`, 
                      borderRadius: 16, 
                      overflow: "hidden", 
                      backdropFilter: "blur(14px)", 
                      position: "relative", 
                      transition: "transform 0.28s ease, box-shadow 0.28s ease",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = "translateY(-6px)"; 
                      e.currentTarget.style.boxShadow = `0 24px 56px ${section.glow}`; 
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = "translateY(0)"; 
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)"; 
                    }}
                  >
                    <div style={{ height: 3, background: `linear-gradient(90deg, ${section.accent}, transparent)` }} />
                    <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top left, ${section.glow}, transparent 60%)`, pointerEvents: "none" }} />


                    <div style={{ padding: "2rem", position: "relative", zIndex: 1 }}>
                      <div className="flex items-center gap-3 mb-6">
                        <span style={{ fontSize: "1.75rem", fontWeight: 800, color: section.accent, opacity: 0.18, lineHeight: 1, letterSpacing: "-0.04em", flexShrink: 0 }}>
                          {section.num}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "#FFFFFF" }}>
                          {section.title}
                        </h3>
                      </div>


                      <div style={{ height: "0.5px", background: section.border, marginBottom: "1.5rem" }} />


                      <ul className="space-y-5">
                        {section.points.map((point, idx) => (
                          <Tooltip key={idx}>
                            <TooltipTrigger asChild>
                              <li className="flex items-start gap-3 cursor-pointer hover:text-[#f7931e] transition-colors">
                                <span style={{ 
                                  width: 20, 
                                  height: 20, 
                                  borderRadius: 6, 
                                  flexShrink: 0, 
                                  marginTop: 2, 
                                  background: section.glow, 
                                  border: `0.5px solid ${section.border}`, 
                                  display: "flex", 
                                  alignItems: "center", 
                                  justifyContent: "center" 
                                }}>
                                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                                    <path d="M2 5L4.5 7.5L8 2.5" stroke={section.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </span>
                                <p style={{ color: "#d7dce3", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                  <span style={{ fontWeight: 600, color: section.accent }}>{point.subtitle}</span>{" "}
                                  {point.text}
                                </p>
                              </li>
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#0a1522]/95 border border-[#f7931e]/30 text-white backdrop-blur-sm text-sm max-w-md">
                              {point.text}
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>


          {/* ── Decorative divider ── */}
          <div className="flex items-center justify-center gap-3 mt-24">
            <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to right, transparent, rgba(247,147,30,0.35))" }} />
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(247,147,30,0.4)", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#f7931e", display: "inline-block", boxShadow: "0 0 0 3px rgba(247,147,30,0.15)" }} />
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.4)", display: "inline-block" }} />
            </div>
            <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to left, transparent, rgba(255,255,255,0.35))" }} />
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};


export default Philosophy;