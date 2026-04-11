"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Lock, Globe, Cpu } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Active Cyber Defense",
    desc: "Always-on, intelligent protection powered by adaptive algorithms and deep visibility into every endpoint and network node.",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "01",
  },
  {
    icon: Zap,
    title: "Threat Anticipation",
    desc: "Harness predictive analytics and behavioral AI to detect, isolate, and neutralize risks before they manifest.",
    accent: "#85C441",
    border: "rgba(133,196,65,0.25)",
    glow: "rgba(133,196,65,0.08)",
    num: "02",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    desc: "Build a perimeterless infrastructure that validates every action and identity in real-time—no exceptions.",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "03",
  },
  {
    icon: Cpu,
    title: "AI-Driven Response",
    desc: "Autonomous incident response frameworks with deep learning models that evolve with every threat vector.",
    accent: "#85C441",
    border: "rgba(133,196,65,0.25)",
    glow: "rgba(133,196,65,0.08)",
    num: "04",
  },
  {
    icon: Globe,
    title: "Global Threat Intelligence",
    desc: "Integrated intelligence feeds from across the world to ensure rapid defense against emerging global cyberattacks.",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "05",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const DefenseSection = () => {
  return (
    <section
      id="defence"
      className="relative font-sans antialiased overflow-hidden py-28 px-6 md:px-12"
      style={{ background: "#111928" }}
    >
      {/* Circuit grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 70 H120 M70 20 V120' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='20' cy='70' r='1.5' fill='%2385C441'/%3E%3Ccircle cx='120' cy='70' r='1.5' fill='%2300B6D5'/%3E%3Ccircle cx='70' cy='20' r='1.5' fill='%2385C441'/%3E%3Ccircle cx='70' cy='120' r='1.5' fill='%2300B6D5'/%3E%3C/svg%3E")`,
          backgroundSize: "140px 140px",
          opacity: 0.06,
        }}
      />

      {/* Ambient glows */}
      <div className="absolute pointer-events-none z-0" style={{ width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,182,213,0.07) 0%, transparent 70%)", top: -140, left: -100 }} />
      <div className="absolute pointer-events-none z-0" style={{ width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(133,196,65,0.05) 0%, transparent 70%)", bottom: 0, right: -60 }} />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{ left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,182,213,0.12), transparent)" }}
        animate={{ top: ["8%", "92%", "8%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{
              background: "rgba(0,182,213,0.08)",
              border: "0.5px solid rgba(0,182,213,0.3)",
              borderRadius: 999,
              padding: "5px 18px",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 3px rgba(0,182,213,0.2)" }} />
            <span style={{ fontSize: "0.7rem", color: "#00B6D5", letterSpacing: "0.08em", fontWeight: 600 }}>
              HOW WE PROTECT YOU
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-extrabold mb-4"
            style={{ color: "#FBF9F9", lineHeight: 1.15 }}
          >
            Interactive Defense,{" "}
            <span style={{ color: "#00B6D5" }}>Proactive Security</span>
          </h2>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#6D7482" }}>
            The CyberTrove Africa Difference
          </p>
        </motion.div>

        {/* ── Cards grid — 3 + 2 centered ── */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {highlights.slice(0, 3).map((item, idx) => (
              <HighlightCard key={idx} item={item} idx={idx} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {highlights.slice(3).map((item, idx) => (
              <HighlightCard key={idx + 3} item={item} idx={idx + 3} />
            ))}
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-20 max-w-5xl mx-auto text-center"
          style={{
            background: "rgba(17,25,40,0.85)",
            border: "0.5px solid rgba(0,182,213,0.2)",
            borderRadius: 16,
            overflow: "hidden",
            backdropFilter: "blur(14px)",
            position: "relative",
          }}
        >
          <div style={{ height: 3, background: "linear-gradient(90deg, #00B6D5, #85C441, transparent)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center top, rgba(0,182,213,0.06), transparent 60%)", pointerEvents: "none" }} />

          <div style={{ padding: "3rem 2rem", position: "relative", zIndex: 1 }}>
            <div style={{ width: 48, height: 3, borderRadius: 999, background: "linear-gradient(90deg, #00B6D5, #85C441)", margin: "0 auto 1.5rem" }} />

            <h3 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "#FBF9F9" }}>
              Your Defense{" "}
              <span style={{ color: "#00B6D5" }}>Never Sleeps</span>
            </h3>

            <p className="mb-8 max-w-3xl mx-auto" style={{ color: "#6D7482", lineHeight: 1.75 }}>
              Our integrated systems monitor, analyze, and adapt to emerging cyber
              threats in real time ensuring your digital environment stays resilient,
              compliant, and unbreakable.
            </p>
          </div>
        </motion.div>

        {/* ── Decorative divider ── */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to right, transparent, rgba(0,182,213,0.35))" }} />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,182,213,0.4)", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 3px rgba(0,182,213,0.15)" }} />
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(133,196,65,0.4)", display: "inline-block" }} />
          </div>
          <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to left, transparent, rgba(133,196,65,0.35))" }} />
        </div>

      </div>
    </section>
  );
};

const HighlightCard = ({ item, idx }) => {
  const Icon = item.icon;
  return (
    <motion.div
      {...fadeUp(idx * 0.12)}
      style={{
        background: "rgba(17,25,40,0.75)",
        border: `0.5px solid ${item.border}`,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        backdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
      }}
      whileHover={{ y: -7, boxShadow: `0 24px 56px ${item.glow}` }}
    >
      <div style={{ height: 3, background: `linear-gradient(90deg, ${item.accent}, transparent)`, flexShrink: 0 }} />
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top left, ${item.glow}, transparent 60%)`, pointerEvents: "none" }} />

      <div style={{ padding: "1.75rem 2rem 2rem", position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="flex items-center justify-between mb-5">
          <span style={{ fontSize: "2rem", fontWeight: 800, color: item.accent, opacity: 0.18, lineHeight: 1, letterSpacing: "-0.05em" }}>
            {item.num}
          </span>
          <div style={{ width: 50, height: 50, borderRadius: 12, background: item.glow, border: `0.5px solid ${item.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={22} strokeWidth={1.8} style={{ color: item.accent }} />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-3" style={{ color: "#FBF9F9" }}>{item.title}</h3>
        <div style={{ height: "0.5px", background: item.border, marginBottom: "1rem" }} />
        <p style={{ color: "#9aa3b0", fontSize: "0.9rem", lineHeight: 1.7, marginTop: "auto" }}>{item.desc}</p>
      </div>
    </motion.div>
  );
};

export default DefenseSection;