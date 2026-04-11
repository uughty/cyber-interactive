import React, { useState } from "react";
import { Users, Headphones, GraduationCap, Settings } from "lucide-react";

const serviceCategories = [
  {
    icon: Users,
    title: "Consulting and Advisory Services",
    image: "/assets/kev.jpeg",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "01",
    services: [
      { name: "Project Management (PMP Methodology)", description: "End-to-end project management following PMI's PMP framework, ensuring delivery on time, within budget, and aligned with business goals." },
      { name: "IT Security and Systems Audit", description: "Thorough review of IT systems and security controls to identify vulnerabilities, ensure compliance, and strengthen defenses." },
      { name: "Gap Analysis and Risk Profiling", description: "Identify gaps between current security posture and industry standards, with risk profiling to prioritize remediation." },
      { name: "IT Strategic Planning & Policy Development", description: "Tailored IT strategies and policies aligned with regulatory requirements and business objectives for long-term resilience." },
      { name: "Business Continuity Management", description: "Plans and frameworks to guarantee uninterrupted operations during crises, disasters, or cyber incidents." },
      { name: "Data Protection Impact Assessment (DPIA)", description: "Privacy-first evaluations to reduce data protection risks and align with GDPR and global compliance standards." },
    ],
  },
  {
    icon: Headphones,
    title: "Managed Security Services",
    image: "/assets/app1.jpeg",
    accent: "#85C441",
    border: "rgba(133,196,65,0.25)",
    glow: "rgba(133,196,65,0.08)",
    num: "02",
    services: [
      { name: "Proactive Monitoring & Incident Response", description: "24/7 security monitoring with real-time threat detection, response, and remediation to safeguard business operations." },
      { name: "Vulnerability & Patch Management", description: "Continuous vulnerability scans and automated patching to keep systems hardened against cyber exploits." },
      { name: "Threat Hunting", description: "Advanced analytics and intelligence-driven investigations to uncover hidden threats before they cause damage." },
    ],
  },
  {
    icon: GraduationCap,
    title: "Training and Awareness Programs",
    image: "/assets/app3.jpeg",
    accent: "#00B6D5",
    border: "rgba(0,182,213,0.25)",
    glow: "rgba(0,182,213,0.08)",
    num: "03",
    services: [
      { name: "Cybersecurity Essentials Training", description: "Hands-on training covering phishing awareness, social engineering, password security, and digital hygiene." },
      { name: "Data Protection & Compliance Training", description: "In-depth workshops on data privacy laws (GDPR, HIPAA) and compliance best practices for employees and executives." },
      { name: "IT Governance, Risk & Compliance (GRC)", description: "Advanced training in governance frameworks, regulatory standards, and enterprise risk management." },
    ],
  },
  {
    icon: Settings,
    title: "Customized Cybersecurity Solutions",
    image: "/assets/app4.jpeg",
    accent: "#85C441",
    border: "rgba(133,196,65,0.25)",
    glow: "rgba(133,196,65,0.08)",
    num: "04",
    services: [
      { name: "Security Operations Center (SOC)", description: "Design and deployment of full-scale SOCs with incident response, SIEM integration, and continuous monitoring." },
      { name: "Network & Application Protection", description: "Multi-layer defenses including firewalls, intrusion prevention, and penetration testing for apps and networks." },
      { name: "Identity & Access Management", description: "Implementation of MFA, single sign-on, and zero-trust frameworks for secure access control." },
      { name: "Privileged Access Management (PAM)", description: "Advanced monitoring and controls for high-risk admin accounts to prevent insider threats." },
      { name: "Database Activity Monitoring (DAM)", description: "Continuous monitoring of critical databases to detect anomalies and prevent data breaches." },
      { name: "AI-Powered Data Loss Prevention (DLP)", description: "Intelligent protection against data leaks across email, cloud, and endpoints." },
      { name: "Financial Crime Risk Management (FCRM)", description: "Solutions to detect and prevent fraud, money laundering, and other financial crimes." },
      { name: "Operational Technology (OT) Security", description: "Defense solutions for SCADA, ICS, and industrial systems to prevent operational disruption." },
      { name: "Email & Communication Security", description: "Protection against phishing, malware, and email impersonation with advanced encryption." },
      { name: "Cyber Threat Intelligence & Brand Monitoring", description: "Early warning systems with intelligence feeds and brand monitoring across the dark web." },
      { name: "Compromise Assessment", description: "Forensic-level assessments to detect past breaches and measure impact on your systems." },
      { name: "Enterprise Archiving Solutions", description: "Long-term, compliant archiving with fast search and retrieval capabilities for critical records." },
    ],
  },
];

const Tooltip = ({ children, content, border }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span style={{ position: "relative", display: "block" }}>
      <span
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </span>
      {visible && (
        <span style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: 0,
          zIndex: 9999,
          background: "#0a0a0a",
          border: `1px solid ${border}`,
          borderRadius: 10,
          padding: "10px 14px",
          fontSize: 13,
          color: "#9aa3b0",
          maxWidth: 300,
          lineHeight: 1.6,
          pointerEvents: "none",
          whiteSpace: "normal",
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        }}>
          {content}
        </span>
      )}
    </span>
  );
};

const ServiceCard = ({ category, isEven }) => {
  const IconComponent = category.icon;
  const [imgError, setImgError] = useState(false);

  if (!category) return null;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      alignItems: "center",
      gap: "3rem",
    }}>
      <div style={{
        order: isEven ? 2 : 1,
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${category.border}`,
        borderRadius: 16,
        overflow: "hidden",
        position: "relative",
      }}>
        <div style={{ height: 3, background: `linear-gradient(90deg, ${category.accent}, transparent)` }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at top left, ${category.glow}, transparent 60%)`,
          pointerEvents: "none",
        }} />
        <div style={{ padding: "2rem", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{
              fontSize: "2.5rem", fontWeight: 800,
              color: category.accent, opacity: 0.15,
              lineHeight: 1, flexShrink: 0,
            }}>
              {category.num}
            </span>
            <div style={{
              width: 48, height: 48, flexShrink: 0,
              borderRadius: 12, background: category.glow,
              border: `1px solid ${category.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <IconComponent size={22} strokeWidth={1.8} style={{ color: category.accent }} />
            </div>
            <h3 style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              fontWeight: 700, color: "#FBF9F9",
              lineHeight: 1.3, margin: 0,
            }}>
              {category.title}
            </h3>
          </div>
          <div style={{ height: 1, background: category.border, marginBottom: "1.25rem" }} />
          <ul style={{ display: "flex", flexDirection: "column", gap: 10, margin: 0, padding: 0, listStyle: "none" }}>
            {category.services.map((service, i) => (
              <Tooltip key={i} content={service.description} border={category.border}>
                <li style={{
                  display: "flex", alignItems: "flex-start",
                  gap: 10, color: "#9aa3b0", fontSize: 15,
                  cursor: "default", transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = category.accent)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa3b0")}
                >
                  <span style={{
                    width: 20, height: 20, borderRadius: 6,
                    flexShrink: 0, marginTop: 2,
                    background: category.glow,
                    border: `1px solid ${category.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4.5 7.5L8 2.5" stroke={category.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>{service.name}</span>
                </li>
              </Tooltip>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        order: isEven ? 1 : 2,
        position: "relative", borderRadius: 16,
        overflow: "hidden", border: `1px solid ${category.border}`,
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: 3, background: `linear-gradient(90deg, ${category.accent}, transparent)`,
          zIndex: 2,
        }} />
        {!imgError ? (
          <img
            src={category.image}
            alt={category.title}
            onError={() => setImgError(true)}
            style={{
              width: "100%", height: 360,
              objectFit: "cover", display: "block",
              transition: "transform 0.7s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <div style={{
            width: "100%", height: 360,
            background: `linear-gradient(135deg, #050505, ${category.glow})`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <IconComponent size={64} strokeWidth={1} style={{ color: category.accent, opacity: 0.3 }} />
          </div>
        )}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
        }} />
        <div style={{
          position: "absolute", bottom: 16, left: 16,
          background: "rgba(0,0,0,0.85)",
          border: `1px solid ${category.border}`,
          borderRadius: 999, padding: "5px 14px",
          display: "flex", alignItems: "center", gap: 6, zIndex: 3,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: category.accent, display: "inline-block" }} />
          <span style={{ fontSize: 11, color: category.accent, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {category.title.slice(0, 22)}
          </span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" style={{
      background: "#000000",
      position: "relative",
      overflow: "hidden",
      padding: "7rem 1.5rem",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 70 H120 M70 20 V120' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='20' cy='70' r='1.5' fill='%2385C441'/%3E%3Ccircle cx='120' cy='70' r='1.5' fill='%2300B6D5'/%3E%3Ccircle cx='70' cy='20' r='1.5' fill='%2385C441'/%3E%3Ccircle cx='70' cy='120' r='1.5' fill='%2300B6D5'/%3E%3C/svg%3E")`,
        backgroundSize: "140px 140px", opacity: 0.05,
      }} />
      <div style={{ position: "absolute", pointerEvents: "none", zIndex: 0, width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,182,213,0.07) 0%, transparent 70%)", top: -100, left: -100 }} />
      <div style={{ position: "absolute", pointerEvents: "none", zIndex: 0, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(133,196,65,0.05) 0%, transparent 70%)", bottom: 200, right: 0 }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(0,182,213,0.08)", border: "1px solid rgba(0,182,213,0.3)",
            borderRadius: 999, padding: "5px 18px", marginBottom: 20,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 3px rgba(0,182,213,0.2)" }} />
            <span style={{ fontSize: 11, color: "#00B6D5", letterSpacing: "0.08em", fontWeight: 700, textTransform: "uppercase" }}>
              What We Do
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#FBF9F9", lineHeight: 1.15, marginBottom: "1.25rem" }}>
            Our <span style={{ color: "#00B6D5" }}>Services</span>
          </h2>
          <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.1rem)", color: "#6D7482", lineHeight: 1.75, maxWidth: 680, margin: "0 auto" }}>
            Delivering world-class cybersecurity, compliance, and IT solutions engineered to safeguard your business in the digital era.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} isEven={index % 2 === 1} />
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: "6rem" }}>
          <div style={{ flex: 1, maxWidth: 220, height: 1, background: "linear-gradient(to right, transparent, rgba(0,182,213,0.35))" }} />
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,182,213,0.4)", display: "inline-block" }} />
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 3px rgba(0,182,213,0.15)" }} />
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(133,196,65,0.4)", display: "inline-block" }} />
          </div>
          <div style={{ flex: 1, maxWidth: 220, height: 1, background: "linear-gradient(to left, transparent, rgba(133,196,65,0.35))" }} />
        </div>
      </div>
    </section>
  );
};

export default Services;