"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Mail, FileText, Download } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const Privacy = () => {
  return (
    <div className="min-h-screen" style={{ background: "#111928" }}>
      {/* Circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 70 H120 M70 20 V120' stroke='%23F97316' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='20' cy='70' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='120' cy='70' r='1.5' fill='%23F97316'/%3E%3Ccircle cx='70' cy='20' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='70' cy='120' r='1.5' fill='%23F97316'/%3E%3C/svg%3E")`,
          backgroundSize: "140px 140px",
          opacity: 0.04,
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.section
          {...fadeUp()}
          className="pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
        >
          <div className="text-center mb-20">
            <div
              className="inline-flex items-center gap-2 mb-6"
              style={{
                background: "rgba(249,115,22,0.08)",
                border: "0.5px solid rgba(249,115,22,0.3)",
                borderRadius: 999,
                padding: "6px 20px",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#F97316",
                  boxShadow: "0 0 0 3px rgba(249,115,22,0.2)",
                }}
              />
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "#F97316",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                PRIVACY POLICY
              </span>
            </div>

            <h1
              className="text-5xl md:text-7xl font-black mb-6"
              style={{ color: "#FBF9F9", lineHeight: 1 }}
            >
              Privacy <span style={{ color: "#F97316" }}>Policy</span>
            </h1>

            <div
              style={{
                width: 100,
                height: "2px",
                background: "linear-gradient(90deg, #F97316, #FFFFFF)",
                margin: "0 auto",
              }}
            />
          </div>

          <div className="text-center mb-16">
            <p style={{ color: "#9CA3AF", fontSize: "1.1rem", maxWidth: "48rem", margin: "0 auto" }}>
              Last updated: <span style={{ color: "#FBF9F9" }}>17 October 2025</span>
            </p>
          </div>
        </motion.section>

        {/* Main content */}
        <motion.section
          {...fadeUp(0.2)}
          className="max-w-5xl mx-auto px-6 md:px-12 pb-28"
        >
          <div className="space-y-20">
            {/* Section 1: Introduction */}
            <section>
              <h2
                className="text-3xl font-black mb-8 flex items-center gap-3"
                style={{ color: "#FBF9F9" }}
              >
                <span
                  style={{
                    width: 48,
                    height: 2,
                    background: "#F97316",
                    borderRadius: 1,
                  }}
                />
                1. Introduction
              </h2>
              <div
                style={{
                  background: "rgba(17,25,40,0.5)",
                  border: "1px solid rgba(249,115,22,0.1)",
                  borderRadius: 16,
                  padding: "2.5rem",
                  backdropFilter: "blur(12px)",
                }}
              >
                <p style={{ color: "#D1D5DB", lineHeight: 1.8, fontSize: "1.05rem" }}>
                  CyberTrove Africa ("CyberTrove", "we", "us", "our") is committed to safeguarding your privacy when handling personal information through our cybersecurity services and our website{" "}
                  <a
                    href="https://cybertroveafrica.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#F97316", textDecoration: "underline" }}
                  >
                    cybertroveafrica.com
                  </a>
                  . This policy explains what we collect, how we use it, and your rights.
                </p>
                <p className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(249,115,22,0.2)", color: "#9CA3AF" }}>
                  We comply with Kenya's Data Protection Act (2019), GDPR (where applicable), and ISO/IEC 27001 security standards.
                </p>
              </div>
            </section>

            {/* Section 2: Data Collection */}
            <section>
              <h2
                className="text-3xl font-black mb-8 flex items-center gap-3"
                style={{ color: "#FBF9F9" }}
              >
                <span
                  style={{
                    width: 48,
                    height: 2,
                    background: "#F97316",
                    borderRadius: 1,
                  }}
                />
                2. How We Collect Information
              </h2>
              <div
                style={{
                  background: "rgba(17,25,40,0.5)",
                  border: "1px solid rgba(249,115,22,0.1)",
                  borderRadius: 16,
                  padding: "2.5rem",
                  backdropFilter: "blur(12px)",
                }}
              >
                <ul style={{ color: "#D1D5DB", lineHeight: 1.8 }}>
                  <li className="mb-4 flex items-start gap-3">
                    <span style={{ color: "#F97316", fontWeight: 700, flexShrink: 0 }}>•</span>
                    When you browse our website, contact us, or request services.
                  </li>
                  <li className="mb-4 flex items-start gap-3">
                    <span style={{ color: "#F97316", fontWeight: 700, flexShrink: 0 }}>•</span>
                    When subscribing to newsletters or webinars.
                  </li>
                  <li className="mb-4 flex items-start gap-3">
                    <span style={{ color: "#F97316", fontWeight: 700, flexShrink: 0 }}>•</span>
                    During service delivery or technical support engagements.
                  </li>
                  <li className="flex items-start gap-3">
                    <span style={{ color: "#F97316", fontWeight: 700, flexShrink: 0 }}>•</span>
                    When applying for jobs, internships, or partnerships.
                  </li>
                  <li className="mt-4 pt-4 flex items-start gap-3" style={{ borderTop: "1px solid rgba(249,115,22,0.2)" }}>
                    <span style={{ color: "#F97316", fontWeight: 700, flexShrink: 0 }}>•</span>
                    Automatically through cookies, analytics, or security monitoring.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Data Types */}
            <section>
              <h2
                className="text-3xl font-black mb-8 flex items-center gap-3"
                style={{ color: "#FBF9F9" }}
              >
                <span
                  style={{
                    width: 48,
                    height: 2,
                    background: "#F97316",
                    borderRadius: 1,
                  }}
                />
                3. Types of Data We Collect
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Identity Data", desc: "Name, job title, and organization" },
                  { title: "Contact Data", desc: "Email, phone number, business address" },
                  { title: "Professional Data", desc: "Role, interests, and engagement history" },
                  { title: "Technical Data", desc: "IP address, device/browser info, and logs" },
                  { title: "Usage Data", desc: "Pages visited, interactions, and portal access" },
                  { title: "Security Data", desc: "Event data used under NDA for service delivery" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    {...fadeUp(idx * 0.1)}
                    style={{
                      background: "rgba(17,25,40,0.6)",
                      border: "1px solid rgba(249,115,22,0.15)",
                      borderRadius: 12,
                      padding: "1.75rem",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h4 style={{ color: "#FBF9F9", fontWeight: 700, fontSize: "1rem", mb: 2 }}>
                      {item.title}
                    </h4>
                    <p style={{ color: "#9CA3AF", fontSize: "0.95rem" }}>{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Section 4: Data Usage Table */}
            <section>
              <h2
                className="text-3xl font-black mb-12 flex items-center gap-3"
                style={{ color: "#FBF9F9" }}
              >
                <span
                  style={{
                    width: 48,
                    height: 2,
                    background: "#F97316",
                    borderRadius: 1,
                  }}
                />
                4. How & Why We Use Data
              </h2>
              <div
                style={{
                  background: "rgba(17,25,40,0.5)",
                  border: "1px solid rgba(249,115,22,0.1)",
                  borderRadius: 16,
                  overflow: "hidden",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div
                  style={{
                    background: "rgba(249,115,22,0.08)",
                    padding: "1.25rem 2rem",
                  }}
                >
                  <p style={{ color: "#FBF9F9", fontWeight: 600 }}>
                    Below is an overview of our purposes for processing personal data and the corresponding lawful basis:
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          style={{
                            background: "rgba(17,25,40,0.8)",
                            padding: "1.25rem 1.5rem",
                            textAlign: "left",
                            color: "#FBF9F9",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            borderBottom: "1px solid rgba(249,115,22,0.2)",
                          }}
                        >
                          Purpose
                        </th>
                        <th
                          style={{
                            background: "rgba(17,25,40,0.8)",
                            padding: "1.25rem 1.5rem",
                            textAlign: "left",
                            color: "#FBF9F9",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            borderBottom: "1px solid rgba(249,115,22,0.2)",
                          }}
                        >
                          Example Activities
                        </th>
                        <th
                          style={{
                            background: "rgba(17,25,40,0.8)",
                            padding: "1.25rem 1.5rem",
                            textAlign: "left",
                            color: "#FBF9F9",
                            fontWeight: 700,
                            fontSize: "0.9rem",
                            borderBottom: "1px solid rgba(249,115,22,0.2)",
                          }}
                        >
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
                        <tr key={idx}>
                          <td
                            style={{
                              padding: "1.5rem",
                              borderBottom: "1px solid rgba(249,115,22,0.1)",
                              color: "#D1D5DB",
                            }}
                          >
                            {row.purpose}
                          </td>
                          <td
                            style={{
                              padding: "1.5rem",
                              borderBottom: "1px solid rgba(249,115,22,0.1)",
                              color: "#D1D5DB",
                            }}
                          >
                            {row.activities}
                          </td>
                          <td
                            style={{
                              padding: "1.5rem",
                              borderBottom: "1px solid rgba(249,115,22,0.1)",
                              color: "#F97316",
                              fontWeight: 600,
                            }}
                          >
                            {row.basis}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 5-8: Short sections */}
            {[
              {
                num: 5,
                title: "Data Sharing",
                content: "We do not sell data. We share it only with vetted service providers for hosting, analytics, or compliance — all under confidentiality agreements.",
              },
              {
                num: 6,
                title: "Cookies & Analytics",
                content: "We use cookies for functionality and performance monitoring. You can manage cookie settings in your browser. For more, read our Cookies Policy.",
              },
              {
                num: 7,
                title: "Your Rights",
                content: "Access, correct, or delete your personal data. Withdraw consent or object to processing. File a complaint with the Office of the Data Protection Commissioner (ODPC).",
              },
            ].map((section, idx) => (
              <motion.section key={idx} {...fadeUp(0.3 + idx * 0.1)}>
                <h2
                  className="text-3xl font-black mb-6 flex items-center gap-3"
                  style={{ color: "#FBF9F9" }}
                >
                  <span
                    style={{
                      width: 48,
                      height: 2,
                      background: "#F97316",
                      borderRadius: 1,
                    }}
                  />
                  {section.num}. {section.title}
                </h2>
                <div
                  style={{
                    background: "rgba(17,25,40,0.5)",
                    border: "1px solid rgba(249,115,22,0.1)",
                    borderRadius: 16,
                    padding: "2rem",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p style={{ color: "#D1D5DB", lineHeight: 1.8 }}>{section.content}</p>
                </div>
              </motion.section>
            ))}

            {/* Contact Section */}
            <motion.section {...fadeUp(0.6)}>
              <h2
                className="text-3xl font-black mb-8 flex items-center gap-3"
                style={{ color: "#FBF9F9" }}
              >
                <span
                  style={{
                    width: 48,
                    height: 2,
                    background: "#F97316",
                    borderRadius: 1,
                  }}
                />
                8. Contact Us
              </h2>
              <div
                style={{
                  background: "rgba(17,25,40,0.8)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  borderRadius: 20,
                  padding: "3rem",
                  backdropFilter: "blur(16px)",
                  textAlign: "center",
                }}
              >
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: "rgba(249,115,22,0.08)" }}>
                    <Mail size={32} style={{ color: "#F97316" }} />
                    <div>
                      <h4 style={{ color: "#FBF9F9", fontWeight: 700 }}>Data Protection Officer (DPO)</h4>
                      <a
                        href="mailto:privacy@cybertroveafrica.com"
                        style={{ color: "#9CA3AF", fontSize: "1rem" }}
                      >
                        privacy@cybertroveafrica.com
                      </a>
                    </div>
                  </div>
                  <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#F97316]/30 to-transparent" />
                  <div>
                    <p style={{ color: "#FBF9F9", fontWeight: 600, mb: 1 }}>CyberTrove Africa</p>
                    <a
                      href="https://cybertroveafrica.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#9CA3AF" }}
                    >
                      cybertroveafrica.com
                    </a>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    background: "rgba(249,115,22,0.1)",
                    border: "1px solid rgba(249,115,22,0.3)",
                    borderRadius: 12,
                    padding: "12px 24px",
                    color: "#F97316",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                >
                  <FileText size={20} />
                  File a complaint with ODPC
                </div>
              </div>
            </motion.section>
          </div>
        </motion.section>

        {/* Footer note */}
        <motion.div
          {...fadeUp(0.8)}
          className="text-center py-16"
          style={{ color: "#6D7482", fontSize: "0.85rem" }}
        >
          © 2025 CyberTrove Africa. All rights reserved.
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;