"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const primaryNav = [
  { href: "#home",          label: "Home" },
  { href: "#about",         label: "About" },
  { href: "#services",      label: "Services" },
  { href: "#defence",       label: "How We Protect You" },
  { href: "#why-choose-us", label: "Why Us" },
];

const secondaryNav = [
  { href: "#threats",           label: "Cyber Threats" },
  { href: "#value-proposition", label: "Solutions" },
  { href: "#clients",           label: "Clients" },
];

const HEADER_HEIGHT = 88;

const Header = () => {
  const [isMenuOpen,    setIsMenuOpen]    = useState(false);
  const [isMoreOpen,    setIsMoreOpen]    = useState(false);
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const moreRef = useRef(null);

  useEffect(() => {
    const allNavHrefs = [
      ...primaryNav.map((n) => n.href),
      ...secondaryNav.map((n) => n.href),
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Build a list of sections that actually exist in the DOM
      const sections = allNavHrefs
        .map((href) => {
          const el = document.querySelector(href);
          if (!el) return null;
          return { href, top: el.offsetTop, height: el.offsetHeight };
        })
        .filter(Boolean);

      if (!sections.length) return;

      // The scroll position we test against — midpoint of the viewport
      // below the fixed header so short sections register correctly
      const scrollMid = window.scrollY + HEADER_HEIGHT + window.innerHeight * 0.25;

      // Walk from bottom to top — first section whose top is ≤ scrollMid wins
      let current = sections[0].href;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollMid >= sections[i].top) {
          current = sections[i].href;
          break;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close "More" on outside click
  useEffect(() => {
    const handler = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target))
        setIsMoreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - HEADER_HEIGHT + 1, behavior: "smooth" });
    setIsMenuOpen(false);
    setIsMoreOpen(false);
  };

  const allSecondaryHrefs = secondaryNav.map((n) => n.href);
  const isSecondaryActive = allSecondaryHrefs.includes(activeSection);

  return (
    <>
      <motion.header
        className="fixed w-full z-50 backdrop-blur-xl"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(0,0,0,0.95)"
            : "rgba(0,0,0,0.6)",
          borderBottom: isScrolled
            ? "0.5px solid rgba(0,182,213,0.25)"
            : "0.5px solid rgba(255,255,255,0.06)",
          boxShadow: isScrolled
            ? "0 4px 32px rgba(0,182,213,0.08)"
            : "none",
        }}
        transition={{ duration: 0.25 }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src="/assets/logo.png"
              alt="CyberTrove Africa logo"
              className="w-10 h-10 object-contain"
            />
            <span
              className="text-[1.05rem] font-bold tracking-tight"
              style={{ color: "#FBF9F9" }}
            >
              Cyber<span style={{ color: "#00B6D5" }}>Trove</span>{" "}
              <span style={{ color: "#85C441" }}>Africa</span>
            </span>
          </button>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryNav.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-3 py-1.5 text-[0.85rem] font-medium rounded-md transition-colors"
                  style={{ color: isActive ? "#00B6D5" : "#9aa3b0" }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#FBF9F9";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#9aa3b0";
                  }}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                      style={{ background: "#00B6D5" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                onClick={() => setIsMoreOpen((p) => !p)}
                className="flex items-center gap-1 px-3 py-1.5 text-[0.85rem] font-medium rounded-md transition-colors"
                style={{
                  color: isSecondaryActive ? "#00B6D5" : "#9aa3b0",
                }}
                onMouseEnter={(e) => {
                  if (!isSecondaryActive) e.currentTarget.style.color = "#FBF9F9";
                }}
                onMouseLeave={(e) => {
                  if (!isSecondaryActive) e.currentTarget.style.color = "#9aa3b0";
                }}
              >
                More
                <motion.span
                  animate={{ rotate: isMoreOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  <ChevronDown size={14} />
                </motion.span>
              </button>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl overflow-hidden"
                    style={{
                      background: "rgba(0,0,0,0.97)",
                      border: "0.5px solid rgba(0,182,213,0.2)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                    }}
                  >
                    {secondaryNav.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-4 py-2.5 text-[0.85rem] transition-colors"
                        style={{
                          color:
                            activeSection === item.href
                              ? "#00B6D5"
                              : "#9aa3b0",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "rgba(0,182,213,0.08)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection("#contact")}
              className="px-5 py-2 text-[0.85rem] font-semibold rounded-full transition-all"
              style={{ background: "#00B6D5", color: "#000" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#00a0bc")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#00B6D5")
              }
            >
              Get In Touch
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden p-2 rounded-md"
            style={{ color: "#9aa3b0" }}
            onClick={() => setIsMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              style={{ background: "rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-72 z-50 flex flex-col"
              style={{
                background: "#0a0a0a",
                borderLeft: "0.5px solid rgba(0,182,213,0.2)",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {/* Drawer header */}
              <div
                className="flex items-center justify-between px-6 h-[72px] shrink-0"
                style={{ borderBottom: "0.5px solid rgba(255,255,255,0.07)" }}
              >
                <span
                  className="text-[0.95rem] font-bold"
                  style={{ color: "#FBF9F9" }}
                >
                  Cyber<span style={{ color: "#00B6D5" }}>Trove</span>
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  style={{ color: "#6D7482" }}
                >
                  <X size={20} />
                </button>
              </div>

              {/* Drawer links */}
              <div className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
                {[...primaryNav, ...secondaryNav].map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left px-4 py-3 rounded-lg text-[0.9rem] font-medium transition-all"
                      style={{
                        color: isActive ? "#00B6D5" : "#9aa3b0",
                        background: isActive
                          ? "rgba(0,182,213,0.08)"
                          : "transparent",
                        borderLeft: isActive
                          ? "2px solid #00B6D5"
                          : "2px solid transparent",
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Drawer CTA */}
              <div
                className="px-6 py-6 shrink-0"
                style={{ borderTop: "0.5px solid rgba(255,255,255,0.07)" }}
              >
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full py-3 rounded-full text-[0.9rem] font-semibold"
                  style={{ background: "#00B6D5", color: "#000" }}
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;