import React, { useState, useEffect } from 'react';
import { X, Shield, ArrowRight } from 'lucide-react';

const CTAPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenCTAPopup');
      if (!hasSeenPopup) setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenCTAPopup', 'true');
  };

  const handleCTA = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(8,15,28,0.75)", backdropFilter: "blur(6px)" }}
    >
      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
        .cta-popup { animation: scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards; }

        @keyframes ping-ring {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .ping-ring { animation: ping-ring 1.8s ease-out infinite; }
      `}</style>

      <div
        className="cta-popup relative max-w-md w-full mx-4 overflow-hidden"
        style={{
          background: "rgba(17,25,40,0.97)",
          border: "0.5px solid rgba(0,182,213,0.3)",
          borderRadius: 20,
          boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,182,213,0.1)",
        }}
      >
        {/* Top accent bar */}
        <div style={{ height: 3, background: "linear-gradient(90deg, #00B6D5, #85C441)" }} />

        {/* Inner ambient glow */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top center, rgba(0,182,213,0.08), transparent 65%)", pointerEvents: "none" }} />

        {/* Circuit grid */}
        <div
          style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40 L40 40 L40 0' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Cpath d='M40 80 L40 40 L80 40' stroke='%2300B6D5' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='40' cy='40' r='1' fill='%2385C441'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
            opacity: 0.05,
          }}
        />

        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 10,
            width: 32, height: 32, borderRadius: 8,
            background: "rgba(255,255,255,0.05)",
            border: "0.5px solid rgba(0,182,213,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,182,213,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
        >
          <X size={15} style={{ color: "#6D7482" }} />
        </button>

        <div style={{ padding: "2.25rem 2rem 2rem", position: "relative", zIndex: 1 }}>

          {/* Icon with pulse rings */}
          <div className="flex justify-center mb-6">
            <div style={{ position: "relative", width: 72, height: 72 }}>
              {/* Pulse rings */}
              <div className="ping-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(0,182,213,0.4)" }} />
              <div className="ping-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(0,182,213,0.25)", animationDelay: "0.6s" }} />

              {/* Icon circle */}
              <div style={{
                width: 72, height: 72, borderRadius: "50%",
                background: "rgba(0,182,213,0.1)",
                border: "0.5px solid rgba(0,182,213,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", zIndex: 1,
              }}>
                {/* Inner ring */}
                <div style={{ position: "absolute", inset: 8, borderRadius: "50%", border: "0.5px solid rgba(0,182,213,0.2)" }} />
                <Shield size={28} strokeWidth={1.8} style={{ color: "#00B6D5", position: "relative", zIndex: 1 }} />
              </div>
            </div>
          </div>

          {/* Badge pill */}
          <div className="flex justify-center mb-4">
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(0,182,213,0.08)",
              border: "0.5px solid rgba(0,182,213,0.3)",
              borderRadius: 999, padding: "3px 14px",
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00B6D5", display: "inline-block", boxShadow: "0 0 0 2px rgba(0,182,213,0.2)" }} />
              <span style={{ fontSize: "0.65rem", color: "#00B6D5", letterSpacing: "0.08em", fontWeight: 700 }}>
                FREE ASSESSMENT
              </span>
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-center text-2xl font-bold mb-3" style={{ color: "#FBF9F9", lineHeight: 1.25 }}>
            Secure Your Business <span style={{ color: "#00B6D5" }}>Today!</span>
          </h3>

          {/* Body */}
          <p className="text-center text-sm mb-6" style={{ color: "#6D7482", lineHeight: 1.75 }}>
            Don't wait for a cyber attack. Get a free cybersecurity assessment
            and protect your digital assets with our expert team.
          </p>

          {/* Hairline divider */}
          <div style={{ height: "0.5px", background: "rgba(0,182,213,0.15)", marginBottom: "1.25rem" }} />

          {/* Trust badges */}
          <div className="flex flex-col gap-2 mb-6">
            {[
              "No obligation consultation",
              "Expert cybersecurity advice",
              "Trusted by 500+ organizations",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span style={{
                  width: 18, height: 18, borderRadius: 5, flexShrink: 0,
                  background: "rgba(133,196,65,0.1)",
                  border: "0.5px solid rgba(133,196,65,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5L4.5 7.5L8 2.5" stroke="#85C441" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span style={{ fontSize: "0.8rem", color: "#9aa3b0" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <button
            onClick={handleCTA}
            style={{
              width: "100%",
              background: "#00B6D5",
              color: "#111928",
              fontWeight: 700,
              fontSize: "0.92rem",
              borderRadius: 999,
              padding: "13px 24px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "background 0.2s, transform 0.2s",
              marginBottom: "0.75rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00a0bc";
              e.currentTarget.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#00B6D5";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Free Assessment
            <ArrowRight size={16} />
          </button>

          {/* Dismiss */}
          <button
            onClick={handleClose}
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              color: "#6D7482",
              fontSize: "0.82rem",
              cursor: "pointer",
              padding: "8px",
              borderRadius: 8,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#9aa3b0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6D7482")}
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAPopup;