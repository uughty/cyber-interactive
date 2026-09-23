import React from "react";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const footerLinks = {
  "Quick Links": [
    { label: "About Us", href: "/about" },
    { label: "Our Solutions", href: "/solutions" },
    { label: "Industries We Serve", href: "/industries" },
    { label: "Resources", href: "/resources" },
    { label: "Data Privacy Policy", href: "/privacy" },        // ✅ Fixed to /privacy
    
    { label: "Contact", href: "/contact" },
  ],
  Solutions: [
    { label: "Consulting & Advisory", href: "/solutions/consulting" },
    { label: "Cybersecurity Solutions", href: "/solutions/cybersecurity" },
    { label: "Managed Services", href: "/solutions/managed" },
    { label: "Training Programs", href: "/solutions/training" },
  ],
  Industries: [
    { label: "Financial Services", href: "/industries/finance" },
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Retail", href: "/industries/retail" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Government", href: "/industries/government" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Security Tools", href: "/tools" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Whitepapers", href: "/whitepapers" },
  ],
};

const socials = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/cybertrove-africa/", hoverBg: "#0a66c2", label: "LinkedIn" },
  { icon: FaXTwitter, href: "https://x.com/CyberTrove_Ltd", hoverBg: "#000000", label: "X" },           // ✅ Fixed URL
  { icon: FaWhatsapp, href: "https://wa.me/254782966418", hoverBg: "#25d366", label: "WhatsApp" },
  { icon: FaFacebookF, href: "https://facebook.com/cybertroveafrica", hoverBg: "#1877f2", label: "Facebook" },  // ✅ Fixed
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0b1120", borderTop: "1px solid rgba(249,115,22,0.15)" }}>
      {/* Enhanced Circuit Grid */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L50 50 L50 0 M50 100 L50 50 L100 50' stroke='%23F97316' stroke-width='0.25' fill='none' stroke-linecap='round'/%3E%3Ccircle cx='50' cy='50' r='1.2' fill='%23FFFFFF' opacity='0.8'/%3E%3Ccircle cx='25' cy='25' r='0.8' fill='%23F97316' opacity='0.6'/%3E%3Ccircle cx='75' cy='75' r='0.8' fill='%23FFFFFF' opacity='0.6'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
          opacity: 0.03,
        }}
      />

      {/* Dynamic Ambient Glows */}
      <div className="absolute pointer-events-none z-0" style={{ 
        width: 500, height: 500, borderRadius: "50%", 
        background: "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.06) 0%, transparent 70%)", 
        top: -100, left: -50 
      }} />
      <div className="absolute pointer-events-none z-0" style={{ 
        width: 380, height: 380, borderRadius: "50%", 
        background: "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.03) 0%, transparent 70%)", 
        bottom: -50, right: -50 
      }} />

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column - Full width on mobile, 4 cols on desktop */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-3 group">
              <div style={{ 
                width: 48, height: 48, borderRadius: 12, 
                background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(255,255,255,0.05))",
                border: "1px solid rgba(249,115,22,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease"
              }}>
                <img src="./assets/logo.png" alt="CyberTrove Africa" style={{ width: 36, height: 36, objectFit: "contain" }} />
              </div>
              <div>
                <h2 className="text-xl font-black" style={{ color: "#FBF9F9" }}>
                  Cyber<span style={{ color: "#F97316" }}>Trove</span> Africa
                </h2>
                <p className="text-xs" style={{ color: "#6D7482" }}>ISO 27001 Certified</p>
              </div>
            </div>

            {/* Enhanced Tagline */}
            <p style={{ color: "#9CA3AF", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: 300 }}>
              Practical, compliance-driven security for growing enterprises.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Nairobi, Kenya", color: "#F97316" },
                { icon: Phone, label: "+254 782 966418", href: "https://wa.me/254782966418", color: "#F97316" },
                { icon: Mail, label: "support@cybertroveafrica.com", href: "mailto:support@cybertroveafrica.com", color: "#F97316" },
                { icon: Globe, label: "cybertroveafrica.com", href: "https://cybertroveafrica.com", color: "#F97316" },
              ].map((contact, i) => (
                <a
                  key={i}
                  href={contact.href || "#"}
                  target={contact.href?.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-white/5 hover:-translate-x-1 hover:shadow-lg"
                  style={{ border: "1px solid rgba(249,115,22,0.1)" }}
                >
                  <contact.icon size={18} style={{ color: contact.color, flexShrink: 0 }} />
                  <span style={{ color: "#9CA3AF", fontSize: "0.9rem", transition: "color 0.2s" }}>
                    {contact.label}
                  </span>
                  <svg className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Social Icons - Enhanced */}
            <div className="flex gap-3 pt-2">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group relative p-3 rounded-xl transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(17,24,40,0.8)",
                      border: "1px solid rgba(249,115,22,0.2)",
                      width: 44, height: 44,
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Icon style={{ width: 16, height: 16, color: "#FBF9F9" }} />
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: s.hoverBg + "CC" }}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns - Better spacing */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([heading, links], colIdx) => (
              <div key={heading} className="space-y-4">
                {/* Column Header */}
                <div className="flex items-center gap-2.5">
                  <div 
                    style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#F97316",
                      boxShadow: "0 0 0 2px rgba(249,115,22,0.3)"
                    }}
                  />
                  <h4 style={{ 
                    fontSize: "0.85rem", fontWeight: 700, 
                    color: "#FBF9F9", letterSpacing: "0.08em", 
                    textTransform: "uppercase"
                  }}>
                    {heading}
                  </h4>
                </div>

                {/* Link List */}
                <ul className="space-y-2.5">
                  {links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-2.5 p-1.5 rounded-lg transition-all duration-200 hover:bg-white/5 hover:pl-2.5"
                        style={{ 
                          fontSize: "0.84rem", color: "#9CA3AF",
                          textDecoration: "none"
                        }}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all flex-shrink-0"
                          style={{ background: "#F97316" }}
                        />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(249,115,22,0.4), transparent)" }} />
          <div className="flex items-center gap-2 p-3 rounded-full bg-white/5 border border-orange-500/20">
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(249,115,22,0.5)" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#F97316", boxShadow: "0 0 12px rgba(249,115,22,0.4)" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(255,255,255,0.2), transparent)" }} />
        </div>

        {/* Enhanced Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 border-t border-orange-500/10">
          <p className="text-sm text-center lg:text-left" style={{ color: "#6D7482" }}>
            © 2025 CyberTrove Africa Ltd. All rights reserved. | ISO 27001 Certified
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy"].map((item, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={{ color: "rgba(249,115,22,0.4)", fontSize: "1rem" }}>|</span>}
                <a
                  href={`/privacy`} // ✅ All privacy links point to your privacy.jsx
                  className="text-sm font-medium transition-colors duration-200 hover:text-orange-400 group"
                  style={{ color: "#9CA3AF" }}
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