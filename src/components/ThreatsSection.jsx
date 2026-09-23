import React from "react";
import { ShieldAlert, ClipboardCheck, Users } from "lucide-react";
import { motion } from "framer-motion";

const threats = [
  {
    icon: ShieldAlert,
    title: "Cyber Attacks",
    stat: "83% of businesses hit by security incidents",
    points: [
      "Ransomware, phishing & zero-day exploits",
      "Average breach cost: $4.45M globally",
    ],
    accent: "#F97316",
    glow: "rgba(249,115,22,0.12)",
    border: "rgba(249,115,22,0.25)",
    topBorder: "#F97316",
    badge: "HIGH RISK",
    badgeBg: "rgba(249,115,22,0.12)",
    badgeColor: "#F97316",
    num: "01",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Pressure",
    stat: "NIST · PCI DSS · HIPAA · ISO 27001",
    points: [
      "Severe penalties for non-compliance",
      "Complex, ever-changing requirements",
    ],
    accent: "#FFFFFF",
    glow: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.15)",
    topBorder: "#FFFFFF",
    badge: "REGULATORY",
    badgeBg: "rgba(255,255,255,0.08)",
    badgeColor: "#FFFFFF",
    num: "02",
  },
  {
    icon: Users,
    title: "Resource Gaps",
    stat: "Limited internal security expertise",
    points: [
      "Budget & staffing constraints",
      "24/7 monitoring challenges",
    ],
    accent: "#F97316",
    glow: "rgba(249,115,22,0.10)",
    border: "rgba(249,115,22,0.2)",
    topBorder: "#F97316",
    badge: "CRITICAL",
    badgeBg: "rgba(249,115,22,0.1)",
    badgeColor: "#F97316",
    num: "03",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const ThreatsSection = () => {
  return (
    <section
      id="threats"
      style={{ background: "#111928" }}
      className="relative py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 L60 60 L60 0' stroke='%23F97316' stroke-width='0.3' fill='none'/%3E%3Cpath d='M60 120 L60 60 L120 60' stroke='%23F97316' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          opacity: 0.06,
        }}
      />

      {/* Ambient globs */}
      <div className="absolute pointer-events-none" style={{ width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", top: -160, left: -120 }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)", bottom: 0, right: 0 }} />

      {/* Horizontal scan line */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.15), transparent)" }}
        animate={{ top: ["10%", "90%", "10%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 container mx-auto max-w-6xl">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              background: "rgba(249,115,22,0.08)",
              border: "0.5px solid rgba(249,115,22,0.3)",
              borderRadius: 999,
              padding: "5px 18px",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F97316", display: "inline-block", boxShadow: "0 0 0 3px rgba(249,115,22,0.2)" }} />
            <span style={{ fontSize: "0.7rem", color: "#F97316", letterSpacing: "0.08em", fontWeight: 600 }}>
              THREAT LANDSCAPE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ color: "#FBF9F9" }}>
            The Digital Threats Keeping{" "}
            <span style={{ color: "#F97316" }}>Business Leaders</span> Awake
          </h2>

          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6D7482", lineHeight: 1.75 }}>
            Modern cyber threats move fast. Without the right defences, your business is exposed  here's what you're up against.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {threats.map((threat, i) => {
            const Icon = threat.icon;
            return (
              <motion.div
                key={i}
                {...fadeUp(i * 0.15)}
                whileHover={{ y: -8, boxShadow: `0 24px 60px ${threat.glow}` }}
                style={{
                  background: "rgba(17,25,40,0.75)",
                  border: `0.5px solid ${threat.border}`,
                  borderRadius: 16,
                  overflow: "hidden",
                  position: "relative",
                  backdropFilter: "blur(14px)",
                  transition: "transform 0.28s ease, box-shadow 0.28s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Top accent bar */}
                <div style={{ height: 3, background: `linear-gradient(90deg, ${threat.topBorder}, transparent)`, flexShrink: 0 }} />

                {/* Card ambient glow */}
                <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top left, ${threat.glow}, transparent 60%)`, pointerEvents: "none" }} />

                <div style={{ padding: "1.75rem 2rem 2rem", position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>

                  {/* Number + Badge row */}
                  <div className="flex items-center justify-between mb-5">
                    <span style={{ fontSize: "2rem", fontWeight: 800, color: threat.accent, opacity: 0.18, lineHeight: 1, letterSpacing: "-0.05em" }}>
                      {threat.num}
                    </span>
                    <span style={{
                      fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em",
                      color: threat.badgeColor,
                      background: threat.badgeBg,
                      border: `0.5px solid ${threat.border}`,
                      borderRadius: 999, padding: "3px 12px",
                    }}>
                      {threat.badge}
                    </span>
                  </div>

                  {/* Icon + Title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{
                      width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                      background: threat.glow,
                      border: `0.5px solid ${threat.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <Icon size={20} strokeWidth={1.8} style={{ color: threat.accent }} />
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: "#FBF9F9" }}>
                      {threat.title}
                    </h3>
                  </div>

                  {/* Stat */}
                  <div
                    className="mb-5"
                    style={{
                      background: threat.badgeBg,
                      border: `0.5px solid ${threat.border}`,
                      borderRadius: 8,
                      padding: "8px 12px",
                    }}
                  >
                    <p className="text-xs font-semibold" style={{ color: threat.accent }}>
                      {threat.stat}
                    </p>
                  </div>

                  {/* Divider */}
                  <div style={{ height: "0.5px", background: threat.border, marginBottom: "1rem" }} />

                  {/* Points */}
                  <ul className="space-y-2.5" style={{ marginTop: "auto" }}>
                    {threat.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm" style={{ color: "#9aa3b0", lineHeight: 1.6 }}>
                        <span style={{
                          width: 16, height: 16, borderRadius: 4, flexShrink: 0, marginTop: 1,
                          background: threat.badgeBg,
                          border: `0.5px solid ${threat.border}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                        }}>
                          <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                            <path d="M1.5 4L3.5 6L6.5 2" stroke={threat.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Decorative divider ── */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to right, transparent, rgba(249,115,22,0.35))" }} />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(249,115,22,0.4)", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#F97316", display: "inline-block", boxShadow: "0 0 0 3px rgba(249,115,22,0.15)" }} />
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "inline-block" }} />
          </div>
          <div style={{ flex: 1, maxWidth: 220, height: "0.5px", background: "linear-gradient(to left, transparent, rgba(255,255,255,0.2))" }} />
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          {...fadeUp(0.3)}
          style={{
            background: "rgba(17,25,40,0.8)",
            border: "0.5px solid rgba(249,115,22,0.2)",
            borderRadius: 16,
            overflow: "hidden",
            backdropFilter: "blur(14px)",
            position: "relative",
          }}
        >
          {/* Banner top accent */}
          <div style={{ height: 2, background: "linear-gradient(90deg, #F97316, #FFFFFF, transparent)" }} />

          {/* Banner inner glow */}
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center top, rgba(249,115,22,0.06), transparent 60%)", pointerEvents: "none" }} />

          <div style={{ padding: "2.5rem 2rem", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem", textAlign: "center" }}>
            <div style={{ width: 48, height: 3, borderRadius: 999, background: "linear-gradient(90deg, #F97316, #FFFFFF)" }} />

            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: "#FBF9F9" }}>
              We Protect You From{" "}
              <span style={{ color: "#F97316" }}>All of This</span>
            </h3>

            <p style={{ color: "#6D7482", maxWidth: 480, lineHeight: 1.7 }}>
              Our team monitors, detects, and responds to threats before they become incidents — so you can focus on running your business.
            </p>

            <a
              href="#defence"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#F97316", color: "#111928",
                fontWeight: 700, fontSize: "0.9rem",
                borderRadius: 999, padding: "12px 28px",
                textDecoration: "none", transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ea580c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#F97316")}
            >
              Discover How We Protect You
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#111928" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ThreatsSection;