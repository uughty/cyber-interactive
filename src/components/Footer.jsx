import React from "react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "#" },
    { label: "Our Solutions", href: "#" },
    { label: "Industries We Serve", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Data Privacy Policy", href: "#" },
    { label: "Cookies Policy", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Solutions: [
    { label: "Consulting & Advisory", href: "#" },
    { label: "Cybersecurity Solutions", href: "#" },
    { label: "Managed Services", href: "#" },
    { label: "Training Programs", href: "#" },
  ],
  Industries: [
    { label: "Financial Services", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Retail", href: "#" },
    { label: "Manufacturing", href: "#" },
    { label: "Government", href: "#" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Security Tools", href: "#" },
  ],
};

const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/cybertrove-africa/", hoverBg: "#0a66c2", label: "LinkedIn" },
  { icon: FaXTwitter,   href: "https://x.com/CyberTrove_Ltd?s=09",                  hoverBg: "#1a1a1a", label: "X" },
  { icon: FaWhatsapp,   href: "https://wa.me/254782966418",                           hoverBg: "#25d366", label: "WhatsApp" },
  { icon: FaFacebookF,  href: "#",                                                    hoverBg: "#1877f2", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#080f1c",
        borderTop: "0.5px solid rgba(0,182,213,0.2)",
      }}
    >
      {/* Circuit grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 60 L60 60 L60 0' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Cpath d='M60 120 L60 60 L120 60' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='60' cy='60' r='1.5' fill='%2385C441'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          opacity: 0.04,
        }}
      />

      {/* Ambient glows */}
      <div className="absolute pointer-events-none z-0" style={{ width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,182,213,0.05) 0%, transparent 70%)", top: -120, left: -80 }} />
      <div className="absolute pointer-events-none z-0" style={{ width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(133,196,65,0.04) 0%, transparent 70%)", bottom: 0, right: 0 }} />

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-6">

        {/* ── Top: Logo + tagline + links ── */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">

          {/* Brand column — spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Logo + name */}
            <div className="flex items-center gap-3">
              <img src="./assets/logo.png" alt="CyberTrove Africa" style={{ width: 44, height: 44, objectFit: "contain" }} />
              <span className="text-lg font-bold" style={{ color: "#FBF9F9" }}>
                Cyber<span style={{ color: "#00B6D5" }}>Trove</span>{" "}
                <span style={{ color: "#85C441" }}>Africa</span>
              </span>
            </div>

            {/* Tagline */}
            <p style={{ color: "#6D7482", fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 280 }}>
              Interactive defense and proactive security — protecting Africa's digital future.
            </p>

            {/* Contact block */}
            <ul className="space-y-3 text-sm" style={{ color: "#9aa3b0" }}>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} style={{ color: "#00B6D5", flexShrink: 0, marginTop: 2 }} />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} style={{ color: "#00B6D5", flexShrink: 0, marginTop: 2 }} />
                <a href="https://wa.me/254782966418" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#9aa3b0", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00B6D5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa3b0")}
                >
                  0782966418
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} style={{ color: "#00B6D5", flexShrink: 0, marginTop: 2 }} />
                <a href="mailto:support@cybertroveafrica.com"
                  style={{ color: "#9aa3b0", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00B6D5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa3b0")}
                >
                  support@cybertroveafrica.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span style={{ width: 15, flexShrink: 0, marginTop: 2, display: "inline-flex", justifyContent: "center" }}>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#00B6D5" strokeWidth="1.2" />
                    <path d="M8 1c-2 2-3 4-3 7s1 5 3 7M8 1c2 2 3 4 3 7s-1 5-3 7M1 8h14" stroke="#00B6D5" strokeWidth="1.2" />
                  </svg>
                </span>
                <a href="https://www.cybertroveafrica.com" target="_blank" rel="noopener noreferrer"
                  style={{ color: "#9aa3b0", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00B6D5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9aa3b0")}
                >
                  www.cybertroveafrica.com
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 mt-1">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      background: "rgba(17,25,40,0.8)",
                      border: "0.5px solid rgba(0,182,213,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "background 0.2s, border-color 0.2s",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = s.hoverBg;
                      e.currentTarget.style.borderColor = "transparent";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(17,25,40,0.8)";
                      e.currentTarget.style.borderColor = "rgba(0,182,213,0.2)";
                    }}
                  >
                    <Icon style={{ width: 14, height: 14, color: "#FBF9F9" }} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="lg:col-span-1">
              {/* Column heading */}
              <div className="flex items-center gap-2 mb-4">
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 2px rgba(0,182,213,0.2)" }} />
                <h4 style={{ fontSize: "0.8rem", fontWeight: 700, color: "#FBF9F9", letterSpacing: "0.06em" }}>
                  {heading.toUpperCase()}
                </h4>
              </div>

              {/* Hairline under heading */}
              <div style={{ height: "0.5px", background: "rgba(0,182,213,0.15)", marginBottom: "1rem" }} />

              <ul className="space-y-2.5">
                {links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "0.83rem",
                        color: "#6D7482",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        transition: "color 0.2s, gap 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#00B6D5";
                        e.currentTarget.style.gap = "10px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#6D7482";
                        e.currentTarget.style.gap = "6px";
                      }}
                    >
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M1 3h4M3 1l2 2-2 2" stroke="#00B6D5" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-3 mb-6">
          <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(to right, transparent, rgba(0,182,213,0.3))" }} />
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(0,182,213,0.4)", display: "inline-block" }} />
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 2px rgba(0,182,213,0.15)" }} />
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(133,196,65,0.4)", display: "inline-block" }} />
          </div>
          <div style={{ flex: 1, height: "0.5px", background: "linear-gradient(to left, transparent, rgba(133,196,65,0.3))" }} />
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p style={{ fontSize: "0.8rem", color: "#6D7482" }}>
            © 2025 CyberTrove Africa. All rights reserved.
          </p>
          <div className="flex items-center gap-4" style={{ fontSize: "0.8rem" }}>
            {["Privacy Policy", "Cookies Policy"].map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={{ color: "rgba(0,182,213,0.3)" }}>|</span>}
                <a
                  href="#"
                  style={{ color: "#6D7482", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00B6D5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#6D7482")}
                >
                  {item}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;