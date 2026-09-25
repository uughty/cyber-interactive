import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Download, Lock, Eye, User, Share2, Shield } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

const downloadPDF = () => {
  const element = document.getElementById("privacy-content");
  if (!element) return;

  const opt = {
    margin: [15, 15, 15, 15],
    filename: "CyberTrove-Africa-Privacy-Policy.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
  };

  const script = document.createElement("script");
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
  script.onload = () => {
    // @ts-ignore
    html2pdf().set(opt).from(element).save();
  };
  document.head.appendChild(script);
};

const Privacy = () => {
  return (
    <div className="min-h-screen" style={{ background: "#0F1419" }}>
      {/* Animated background grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L60 0 L60 60 L0 60 Z' stroke='%23FF9500' stroke-width='0.5' fill='none' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
          opacity: 0.03,
        }}
      />

      {/* Gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none z-0"
        style={{
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,149,0,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,149,0,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10">
        {/* Header Section */}
        <motion.section {...fadeUp()} className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-8"
              style={{
                background: "linear-gradient(135deg, rgba(255,149,0,0.12), rgba(255,149,0,0.04))",
                border: "1px solid rgba(255,149,0,0.4)",
                borderRadius: 999,
                padding: "10px 24px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FF9500",
                  boxShadow: "0 0 0 4px rgba(255,149,0,0.25)",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <span style={{ fontSize: "0.75rem", color: "#FF9500", letterSpacing: "0.15em", fontWeight: 700 }}>
                SECURITY & TRANSPARENCY
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl md:text-8xl font-black mb-8 leading-tight"
              style={{ color: "#FBF9F9" }}
            >
              Your Privacy,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF9500 0%, #FFB84D 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Commitment
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ color: "#B4BAC4", fontSize: "1.2rem", maxWidth: "48rem", margin: "0 auto" }}
            >
              Transparent data practices aligned with Kenya's Data Protection Act & GDPR standards
            </motion.p>
          </div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {[
              { icon: Shield, label: "ISO/IEC 27001 Certified", desc: "Enterprise-grade security standards" },
              { icon: Lock, label: "Data Protection Act 2019", desc: "Fully compliant with Kenya regulations" },
              { icon: Eye, label: "Full Transparency", desc: "Know exactly how we use your data" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className="group"
                style={{
                  background: "rgba(25,35,52,0.4)",
                  border: "1px solid rgba(255,149,0,0.15)",
                  borderRadius: 20,
                  padding: "2rem",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(25,35,52,0.7)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,149,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(25,35,52,0.4)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,149,0,0.15)";
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(255,149,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={28} style={{ color: "#FF9500" }} />
                  </div>
                  <h3 style={{ color: "#FBF9F9", fontWeight: 700, fontSize: "1rem" }}>{item.label}</h3>
                </div>
                <p style={{ color: "#8B92A0", fontSize: "0.9rem" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <button
              onClick={downloadPDF}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #FF9500 0%, #FFB84D 100%)",
                color: "#0F1419",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 8px 32px rgba(255,149,0,0.3)",
              }}
            >
              <Download size={24} />
              Download Privacy Policy (PDF)
            </button>
            <p style={{ color: "#6D7482", fontSize: "0.85rem", marginTop: "1rem" }}>
              PDF optimized for print and offline reading
            </p>
          </motion.div>
        </motion.section>

        {/* Main Content - Wrapped for PDF */}
        <div id="privacy-content" style={{ background: "#FFFFFF" }}>
          <motion.section
            {...fadeUp(0.2)}
            className="max-w-5xl mx-auto px-8 md:px-12 py-24"
          >
            {/* Last updated */}
            <div className="text-center mb-20">
              <p style={{ color: "#666666", fontSize: "1rem", fontWeight: 600 }}>
                Last updated: <span style={{ color: "#111928" }}>17 October 2025</span>
              </p>
            </div>

            <div className="space-y-24">
              {/* Section 1: Introduction */}
              <motion.section {...fadeUp(0.3)}>
                <div className="flex items-start gap-6 mb-6">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(255,149,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF9500" }}>1</span>
                  </div>
                  <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#111928", margin: 0 }}>Introduction</h2>
                </div>
                <div style={{ marginLeft: "4.5rem", color: "#3D3D3D", lineHeight: 1.9, fontSize: "1.05rem" }}>
                  <p>
                    <strong>CyberTrove Africa</strong> ("CyberTrove", "we", "us", "our") is committed to safeguarding your
                    privacy when handling personal information through our cybersecurity services and our website{" "}
                    <strong>cybertroveafrica.com</strong>. This policy explains what we collect, how we use it, and your
                    rights.
                  </p>
                  <p style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #E5E5E5", color: "#666666" }}>
                    We comply with Kenya's Data Protection Act (2019), GDPR (where applicable), and ISO/IEC 27001 security
                    standards.
                  </p>
                </div>
              </motion.section>

              {/* Section 2: Data Collection */}
              <motion.section {...fadeUp(0.35)}>
                <div className="flex items-start gap-6 mb-6">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(255,149,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF9500" }}>2</span>
                  </div>
                  <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#111928", margin: 0 }}>How We Collect Information</h2>
                </div>
                <div style={{ marginLeft: "4.5rem" }}>
                  <ul style={{ color: "#3D3D3D", lineHeight: 2, fontSize: "1.05rem", listStyle: "none", padding: 0 }}>
                    <li>• When you browse our website, contact us, or request services.</li>
                    <li>• When subscribing to newsletters or webinars.</li>
                    <li>• During service delivery or technical support engagements.</li>
                    <li>• When applying for jobs, internships, or partnerships.</li>
                    <li>• Automatically through cookies, analytics, or security monitoring.</li>
                  </ul>
                </div>
              </motion.section>

              {/* Section 3: Data Types */}
              <motion.section {...fadeUp(0.4)}>
                <div className="flex items-start gap-6 mb-8">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(255,149,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF9500" }}>3</span>
                  </div>
                  <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#111928", margin: 0 }}>Types of Data We Collect</h2>
                </div>
                <div style={{ marginLeft: 0 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { title: "Identity Data", desc: "Name, job title, and organization" },
                    { title: "Contact Data", desc: "Email, phone number, business address" },
                    { title: "Professional Data", desc: "Role, interests, and engagement history" },
                    { title: "Technical Data", desc: "IP address, device/browser info, and logs" },
                    { title: "Usage Data", desc: "Pages visited, interactions, and portal access" },
                    { title: "Security Data", desc: "Event data used under NDA for service delivery" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8F8F8",
                        border: "1px solid #E5E5E5",
                        borderRadius: 12,
                        padding: "1.5rem",
                      }}
                    >
                      <h4 style={{ color: "#111928", fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>
                        {item.title}
                      </h4>
                      <p style={{ color: "#666666", fontSize: "0.95rem", margin: 0 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Section 4: Data Usage */}
              <motion.section {...fadeUp(0.45)}>
                <div className="flex items-start gap-6 mb-8">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(255,149,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF9500" }}>4</span>
                  </div>
                  <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#111928", margin: 0 }}>How & Why We Use Data</h2>
                </div>
                <div style={{ marginLeft: 0, overflowX: "auto" }}>
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "0.95rem",
                    }}
                  >
                    <thead>
                      <tr style={{ background: "#F0F0F0" }}>
                        <th style={{ padding: "1rem", textAlign: "left", fontWeight: 700, color: "#111928", borderBottom: "2px solid #FF9500" }}>
                          Purpose
                        </th>
                        <th style={{ padding: "1rem", textAlign: "left", fontWeight: 700, color: "#111928", borderBottom: "2px solid #FF9500" }}>
                          Example Activities
                        </th>
                        <th style={{ padding: "1rem", textAlign: "left", fontWeight: 700, color: "#111928", borderBottom: "2px solid #FF9500" }}>
                          Lawful Basis
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { purpose: "Service Delivery", activities: "Assessments, testing, and incident response", basis: "Contract fulfilment" },
                        { purpose: "Client Communication", activities: "Reporting, correspondence, and updates", basis: "Legitimate interest" },
                        { purpose: "Security Monitoring", activities: "Threat detection and logging", basis: "Legal obligation" },
                        { purpose: "Marketing & Events", activities: "Webinars, newsletters, and updates", basis: "Consent" },
                        { purpose: "Recruitment", activities: "Job applications and HR records", basis: "Consent / Contractual necessity" },
                      ].map((row, idx) => (
                        <tr key={idx} style={{ borderBottom: "1px solid #E5E5E5", background: idx % 2 === 0 ? "#FAFAFA" : "#FFFFFF" }}>
                          <td style={{ padding: "1rem", color: "#111928" }}>{row.purpose}</td>
                          <td style={{ padding: "1rem", color: "#3D3D3D" }}>{row.activities}</td>
                          <td style={{ padding: "1rem", color: "#FF9500", fontWeight: 600 }}>{row.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>

              {/* Sections 5-7 */}
              {[
                { num: 5, title: "Data Sharing", content: "We do not sell data. We share it only with vetted service providers for hosting, analytics, or compliance — all under confidentiality agreements." },
                { num: 6, title: "Cookies & Analytics", content: "We use cookies for functionality and performance monitoring. You can manage cookie settings in your browser. For more, read our Cookies Policy." },
                { num: 7, title: "Your Rights", content: "Access, correct, or delete your personal data. Withdraw consent or object to processing. File a complaint with the Office of the Data Protection Commissioner (ODPC)." },
              ].map((section, idx) => (
                <motion.section key={idx} {...fadeUp(0.5 + idx * 0.05)}>
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "rgba(255,149,0,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF9500" }}>{section.num}</span>
                    </div>
                    <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#111928", margin: 0 }}>{section.title}</h2>
                  </div>
                  <div style={{ marginLeft: "4.5rem", color: "#3D3D3D", lineHeight: 1.9, fontSize: "1.05rem" }}>
                    <p>{section.content}</p>
                  </div>
                </motion.section>
              ))}

              {/* Section 8: Contact */}
              <motion.section {...fadeUp(0.7)}>
                <div className="flex items-start gap-6 mb-8">
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: "rgba(255,149,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#FF9500" }}>8</span>
                  </div>
                  <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#111928", margin: 0 }}>Contact Us</h2>
                </div>
                <div
                  style={{
                    marginLeft: 0,
                    background: "linear-gradient(135deg, rgba(255,149,0,0.1), rgba(255,149,0,0.05))",
                    border: "2px solid #FF9500",
                    borderRadius: 16,
                    padding: "2.5rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ marginBottom: "1.5rem" }}>
                    <p style={{ color: "#111928", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 0.5rem 0" }}>
                      Data Protection Officer (DPO)
                    </p>
                    <p style={{ color: "#FF9500", fontSize: "1rem", margin: 0 }}>privacy@cybertroveafrica.com</p>
                  </div>
                  <div style={{ borderTop: "1px solid #FF9500", paddingTop: "1.5rem" }}>
                    <p style={{ color: "#111928", fontWeight: 700, margin: "0 0 0.5rem 0" }}>CyberTrove Africa</p>
                    <p style={{ color: "#666666", margin: 0 }}>cybertroveafrica.com</p>
                  </div>
                </div>
              </motion.section>

              {/* Footer */}
              <div style={{ textAlign: "center", paddingTop: "2rem", borderTop: "1px solid #E5E5E5", marginTop: "3rem" }}>
                <p style={{ color: "#999999", fontSize: "0.85rem" }}>© 2025 CyberTrove Africa. All rights reserved.</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Privacy;