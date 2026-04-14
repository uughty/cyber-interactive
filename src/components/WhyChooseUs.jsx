import React from "react";
import { Award, Users, Shield, Clock, Zap, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "ISO 27001 Certified",
    description: "Our team holds international certifications and follows industry best practices to ensure the highest security standards.",
    stats: "100% Certified Team",
    accent: "#F97316",
    border: "rgba(249,115,22,0.25)",
    glow: "rgba(249,115,22,0.08)",
    num: "01",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "15+ years of combined experience in cybersecurity, risk management, and compliance across multiple industries.",
    stats: "15+ Years Experience",
    accent: "#FFFFFF",
    border: "rgba(255,255,255,0.18)",
    glow: "rgba(255,255,255,0.06)",
    num: "02",
  },
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "Successfully protected 10+ organizations from cyber threats with zero major security incidents.",
    stats: "10+ Clients Protected",
    accent: "#F97316",
    border: "rgba(249,115,22,0.25)",
    glow: "rgba(249,115,22,0.08)",
    num: "03",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support ensures your business is always protected, even outside business hours.",
    stats: "24/7 Availability",
    accent: "#FFFFFF",
    border: "rgba(255,255,255,0.18)",
    glow: "rgba(255,255,255,0.06)",
    num: "04",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Our incident response team can be deployed within minutes, minimizing potential damage and downtime.",
    stats: "<5 Min Response",
    accent: "#F97316",
    border: "rgba(249,115,22,0.25)",
    glow: "rgba(249,115,22,0.08)",
    num: "05",
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Solutions",
    description: "From risk assessments to full security implementations, we provide end-to-end cybersecurity solutions.",
    stats: "360° Protection",
    accent: "#FFFFFF",
    border: "rgba(255,255,255,0.18)",
    glow: "rgba(255,255,255,0.06)",
    num: "06",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative py-28 px-6 md:px-12 overflow-hidden"
      style={{ background: "#111928" }}
    >
      {/* Circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 0 60 L 60 60 L 60 0' stroke='%23F97316' stroke-width='0.3' fill='none'/%3E%3Cpath d='M 60 120 L 60 60 L 120 60' stroke='%23F97316' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%23FFFFFF'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          opacity: 0.06,
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 560,
          height: 560,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
          top: -140,
          right: -100,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          bottom: 0,
          left: 0,
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{
              background: "rgba(249,115,22,0.08)",
              border: "0.5px solid rgba(249,115,22,0.3)",
              borderRadius: 999,
              padding: "5px 18px",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#F97316",
                display: "inline-block",
                boxShadow: "0 0 0 3px rgba(249,115,22,0.2)",
              }}
            />
            <span style={{ fontSize: "0.7rem", color: "#F97316", letterSpacing: "0.08em", fontWeight: 600 }}>
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold mb-5" style={{ color: "#FBF9F9", lineHeight: 1.15 }}>
            Why Choose{" "}
            <span style={{ color: "#F97316" }}>CyberTrove Africa</span>
          </h2>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#9CA3AF", lineHeight: 1.75 }}>
            Discover what sets us apart in the cybersecurity landscape and why
            leading organizations trust us with their security.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                style={{
                  background: "rgba(17,25,40,0.75)",
                  border: `0.5px solid ${reason.border}`,
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
                  e.currentTarget.style.boxShadow = `0 24px 56px ${reason.glow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Top accent bar */}
                <div
                  style={{
                    height: 3,
                    background: `linear-gradient(90deg, ${reason.accent}, transparent)`,
                    flexShrink: 0,
                  }}
                />

                {/* Card glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at top left, ${reason.glow}, transparent 60%)`,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    padding: "1.75rem 2rem 2rem",
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Number + Icon row */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: reason.accent,
                        opacity: 0.18,
                        lineHeight: 1,
                        letterSpacing: "-0.05em",
                      }}
                    >
                      {reason.num}
                    </span>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: reason.glow,
                        border: `0.5px solid ${reason.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} style={{ color: reason.accent }} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#FBF9F9" }}>
                    {reason.title}
                  </h3>

                  {/* Stat pill */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignSelf: "flex-start",
                      background: reason.glow,
                      border: `0.5px solid ${reason.border}`,
                      borderRadius: 999,
                      padding: "3px 12px",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: reason.accent,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {reason.stats}
                    </span>
                  </div>

                  {/* Divider */}
                  <div style={{ height: "0.5px", background: reason.border, marginBottom: "1rem" }} />

                  {/* Description */}
                  <p style={{ color: "#9CA3AF", lineHeight: 1.7, fontSize: "0.9rem", marginTop: "auto" }}>
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <div
            style={{
              flex: 1,
              maxWidth: 220,
              height: "0.5px",
              background: "linear-gradient(to right, transparent, rgba(249,115,22,0.35))",
            }}
          />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(249,115,22,0.4)", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#F97316", display: "inline-block", boxShadow: "0 0 0 3px rgba(249,115,22,0.15)" }} />
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.3)", display: "inline-block" }} />
          </div>
          <div
            style={{
              flex: 1,
              maxWidth: 220,
              height: "0.5px",
              background: "linear-gradient(to left, transparent, rgba(255,255,255,0.2))",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;