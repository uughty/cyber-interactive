import React from "react";
import { Users, Headphones, GraduationCap, Settings, CheckCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const serviceCategories = [
  {
    icon: Users,
    title: "Consulting and Advisory Services",
    image: "/assets/kev.jpeg",
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
    services: [
      { name: "Proactive Monitoring & Incident Response", description: "24/7 security monitoring with real-time threat detection, response, and remediation to safeguard business operations." },
      { name: "Vulnerability & Patch Management", description: "Continuous vulnerability scans and automated patching to keep systems hardened against cyber exploits." },
      { name: "Threat Hunting", description: "Advanced analytics and intelligence-driven investigations to uncover hidden threats before they cause damage." },
      { name: "Red Teaming", description: "Simulated real-world cyberattacks to test defenses, identify security gaps, and improve organizational resilience against advanced threats." },

    ],
  },
  {
    icon: GraduationCap,
    title: "Training and Awareness Programs",
    image: "/assets/app3.jpeg",
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

const FALLBACK =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMTExOTI4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyMCIgZmlsbD0iI2Y5NzMxNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SW1hZ2UgQ29taW5nIFNvb248L3RleHQ+PC9zdmc+";

const Services = () => {
  return (
    <TooltipProvider>
      <style>{`
        #services {
          background:
            linear-gradient(160deg, rgba(249,115,22,0.08) 0%, rgba(17,25,40,0.92) 50%, rgba(255,255,255,0.03) 100%),
            linear-gradient(135deg, #0b1120 0%, #111928 50%, #1f2937 100%);
          min-height: 100vh;
          padding: 7rem 1.5rem;
        }
        .cyber-gradient {
          background: linear-gradient(90deg, #F97316, #FFFFFF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .svc-card {
          background: rgba(17, 25, 40, 0.97);
          border: 1px solid rgba(249, 115, 22, 0.3);
          border-radius: 1.25rem;
          box-shadow: 0 25px 50px rgba(0,0,0,0.45);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
          padding: 2.5rem;
        }
        .svc-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 80px rgba(249,115,22,0.25);
          border-color: rgba(249,115,22,0.6);
        }
        .img-card {
          border-radius: 1.25rem;
          overflow: hidden;
          border: 1px solid rgba(249, 115, 22, 0.4);
          box-shadow: 0 25px 50px rgba(0,0,0,0.45);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        .img-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 80px rgba(249,115,22,0.3);
        }
        .img-card img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .img-card:hover img { transform: scale(1.05); }
        .svc-item {
          display: flex;
          align-items: flex-start;
          padding: 0.6rem 0.5rem;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .svc-item:hover { background: rgba(249,115,22,0.06); }
        .svc-item:hover .svc-name { color: #F97316; text-decoration: underline; }
        .svc-name {
          font-weight: 600;
          color: #FBF9F9;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }
        .icon-wrap {
          padding: 1rem;
          background: linear-gradient(135deg, #F97316, #FFFFFF);
          border-radius: 1rem;
          margin-right: 1.25rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        .svc-card:hover .icon-wrap { transform: scale(1.1); }
        .services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 6rem;
        }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: 1fr; }
          .img-order-first { order: -1; }
        }
      `}</style>

      <section id="services">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.75rem",
            marginBottom: "2rem", padding: "0.75rem 1.5rem", borderRadius: "9999px",
            background: "linear-gradient(90deg, rgba(249,115,22,0.1), rgba(255,255,255,0.05))",
            border: "1px solid rgba(249,115,22,0.3)"
          }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: "linear-gradient(90deg, #F97316, #FFFFFF)" }} />
            <span style={{ textTransform: "uppercase", letterSpacing: "0.15em", color: "#F97316", fontWeight: 600, fontSize: "0.8rem" }}>
              What We Do
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 900, lineHeight: 1, marginBottom: "1.5rem" }}>
            <span className="cyber-gradient">Our Services</span>
          </h2>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#9CA3AF", maxWidth: "48rem", margin: "0 auto", lineHeight: 1.7 }}>
            Delivering world-class cybersecurity, compliance, and IT solutions
            engineered to safeguard your business in the digital era.
          </p>
        </div>

        {/* Service rows */}
        {serviceCategories.map((category, index) => {
          const IconComponent = category.icon;
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="services-grid">
              {/* Text card */}
              <div className="svc-card" style={{ order: isEven ? 1 : 2 }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
                  <div className="icon-wrap">
                    <IconComponent style={{ width: 32, height: 32, color: "#0b1120" }} />
                  </div>
                  <h3 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 900, color: "#FBF9F9", lineHeight: 1.3 }}>
                    {category.title}
                  </h3>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {category.services.map((service, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <li className="svc-item">
                          <CheckCircle style={{ width: 20, height: 20, color: "#F97316", marginRight: "0.75rem", marginTop: 2, flexShrink: 0 }} />
                          <span className="svc-name">{service.name}</span>
                        </li>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="max-w-xs p-4 text-sm rounded-xl bg-[#0b1120] border border-[#F97316]/30 text-[#FBF9F9] shadow-2xl">
                        {service.description}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </ul>
              </div>

              {/* Image card */}
              <div className={`img-card ${isEven ? "" : "img-order-first"}`} style={{ order: isEven ? 2 : 1 }}>
                <img
                  src={category.image}
                  alt={category.title}
                  onError={(e) => {
                    e.target.src = FALLBACK;
                    e.target.style.objectFit = "contain";
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)", pointerEvents: "none" }} />
              </div>
            </div>
          );
        })}
      </section>
    </TooltipProvider>
  );
};

export default Services;