import React from "react";
import { Map, Building, ClipboardCheck, RotateCcw, Puzzle } from "lucide-react";

const valueProps = [
  {
    icon: Map,
    title: "Strategic Roadmap & Business Continuity",
    description: "We develop tailored strategies to identify and address security gaps, ensuring a robust security posture and uninterrupted business functionality.",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "01",
  },
  {
    icon: Building,
    title: "Business Resilience",
    description: "We strengthen your operations against cyber disruptions, ensuring continuity, minimizing downtime, and protecting your reputation.",
    accent: "#85C441",
    border: "rgba(133,196,65,0.25)",
    glow: "rgba(133,196,65,0.08)",
    num: "02",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Assurance",
    description: "Expert guidance to ensure your business meets and exceeds industry standards and regulations such as NIST, PCI/DSS, DPIA, HIPAA & ISO 27001.",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "03",
  },
  {
    icon: RotateCcw,
    title: "Continuous Improvement & Risk Mitigation",
    description: "Ongoing monitoring and adaptive strategies to stay ahead of evolving cyber threats, identifying vulnerabilities before exploitation.",
    accent: "#85C441",
    border: "rgba(133,196,65,0.25)",
    glow: "rgba(133,196,65,0.08)",
    num: "04",
  },
  {
    icon: Puzzle,
    title: "Integrated Solutions",
    description: "A holistic approach to cybersecurity, integrating our solutions seamlessly with your existing systems to enhance efficiency and performance.",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "05",
  },
];

const ValueProposition = () => {
  return (
    <div
      id="value-proposition"
      className="min-h-screen font-sans antialiased relative scroll-mt-24 overflow-hidden"
      style={{ background: "#0b1120" }}
    >
      {/* Circuit grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 60 L 60 60 L 60 0' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Cpath d='M 60 120 L 60 60 L 120 60' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%2385C441'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          opacity: 0.06,
        }}
      />

      {/* Ambient glows */}
      <div className="absolute pointer-events-none z-0" style={{ width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,182,213,0.07) 0%, transparent 70%)", top: -120, right: -80 }} />
      <div className="absolute pointer-events-none z-0" style={{ width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(133,196,65,0.05) 0%, transparent 70%)", bottom: 0, left: 0 }} />

      <section className="relative z-10 py-28 px-6 md:px-12">

        {/* ── Header ── */}
        <div className="text-center mb-20">
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
              WHY WE EXIST
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-6" style={{ color: "#FBF9F9", lineHeight: 1.15 }}>
            Our <span style={{ color: "#00B6D5" }}>Value Proposition</span>
          </h2>

          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: "#6D7482" }}>
            At{" "}
            <span style={{ fontWeight: 600, color: "#85C441" }}>Cybertrove Africa</span>
            , we believe in a digital world where{" "}
            <span style={{ fontWeight: 600, color: "#00B6D5" }}>security</span> is
            proactive, integrated, and future-ready. Our comprehensive approach
            ensures resilience, compliance, and peace of mind.
          </p>
        </div>

        {/* ── Cards grid ── */}
        {/* 5 cards: row of 3 + row of 2 centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {valueProps.slice(0, 3).map((prop, idx) => (
            <ValueCard key={idx} prop={prop} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {valueProps.slice(3).map((prop, idx) => (
            <ValueCard key={idx + 3} prop={prop} />
          ))}
        </div>

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

      </section>
    </div>
  );
};

const ValueCard = ({ prop }) => {
  const Icon = prop.icon;
  return (
    <div
      style={{
        background: "rgba(17,25,40,0.75)",
        border: `0.5px solid ${prop.border}`,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
        backdropFilter: "blur(14px)",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.28s ease, box-shadow 0.28s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-7px)";
        e.currentTarget.style.boxShadow = `0 24px 56px ${prop.glow}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${prop.accent}, transparent)`, flexShrink: 0 }} />

      {/* Card ambient glow */}
      <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse at top left, ${prop.glow}, transparent 60%)`, pointerEvents: "none" }} />

      <div style={{ padding: "1.75rem 2rem 2rem", position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Number + Icon row */}
        <div className="flex items-center justify-between mb-6">
          <span style={{ fontSize: "2rem", fontWeight: 800, color: prop.accent, opacity: 0.18, lineHeight: 1, letterSpacing: "-0.05em" }}>
            {prop.num}
          </span>
          <div style={{
            width: 52, height: 52, borderRadius: 12,
            background: prop.glow,
            border: `0.5px solid ${prop.border}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.28s ease",
          }}>
            <Icon size={24} strokeWidth={1.8} style={{ color: prop.accent }} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3" style={{ color: "#FBF9F9" }}>
          {prop.title}
        </h3>

        {/* Divider */}
        <div style={{ height: "0.5px", background: prop.border, marginBottom: "1rem" }} />

        {/* Description */}
        <p style={{ color: "#9aa3b0", lineHeight: 1.7, fontSize: "0.9rem" }}>
          {prop.description}
        </p>
      </div>
    </div>
  );
};

export default ValueProposition;