"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Award,
  Clock,
  Zap,
  Puzzle,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified & Compliant",
    description:
      "We follow international security standards and best practices, ensuring your business meets global and local regulatory requirements.",
    tag: "TRUSTED STANDARDS",
    accent: "#F97316", // Orange
    bgBadge: "rgba(249, 115, 22, 0.12)",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Our team brings 15+ years of combined experience in cybersecurity, risk management, and compliance across multiple industries.",
    tag: "REAL WORLD EXPERIENCE",
    accent: "#14B8A6", // Teal accent matching reference
    bgBadge: "rgba(20, 184, 166, 0.12)",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "We've helped 10+ organizations strengthen their security posture and stay resilient against evolving threats.",
    tag: "MEASURABLE IMPACT",
    accent: "#F97316",
    bgBadge: "rgba(249, 115, 22, 0.12)",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring & Support",
    description:
      "Round-the-clock monitoring and support ensures your business is protected — even outside business hours.",
    tag: "ALWAYS ON",
    accent: "#14B8A6",
    bgBadge: "rgba(20, 184, 166, 0.12)",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Our incident response team is ready to act quickly, minimizing potential damage and downtime.",
    tag: "WHEN IT MATTERS MOST",
    accent: "#F97316",
    bgBadge: "rgba(249, 115, 22, 0.12)",
  },
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    description:
      "From risk assessments to full implementation, we build solutions that fit your unique business goals and industry needs.",
    tag: "BUILT AROUND YOU",
    accent: "#14B8A6",
    bgBadge: "rgba(20, 184, 166, 0.12)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      id="why-choose-us"
      className="relative py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden text-gray-200"
      style={{ background: "#111928" }}
    >
      {/* Soft Background Radial Light */}
      <div
        className="absolute top-0 right-1/4 pointer-events-none w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-20">
        {/* ── TOP HERO SECTION ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Intro Text */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#F97316]" />
              <p className="font-bold tracking-[0.2em] uppercase text-[11px] text-[#F97316]">
                Why Choose Us
              </p>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black leading-[1.15] text-[#FBF9F9] tracking-tight">
              More than security. <br />
              A partner in your{" "}
              <span className="text-[#F97316]">growth.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-xl font-normal">
              At CyberTrove Africa, we go beyond traditional cybersecurity. We
              combine global best practices with deep African market understanding
              to deliver solutions that are practical, scalable and built for
              your business.
            </p>

            <div className="pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-[#F97316] hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20 group"
              >
                Our Approach
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Feature Image & Badge */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame with Reference Soft Contour */}
              <div
                className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                style={{ aspectRatio: "16/10" }}
              >
                {/* Decorative Accent Border Glow */}
                <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#F97316] rounded-tl-3xl z-10 pointer-events-none" />

                <img
                  src="/assets/Value.jpg"
                  alt="CyberTrove Africa team working"
                  className="w-full h-full object-cover filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111928]/80 via-transparent to-transparent" />
              </div>

              {/* Overlapping Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-2 sm:right-4 rounded-2xl p-5 border border-white/15 bg-[#172131]/95 backdrop-blur-md shadow-2xl max-w-[220px] sm:max-w-[240px] space-y-1.5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-1 h-8 bg-[#F97316] rounded-full flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs sm:text-sm text-[#FBF9F9] leading-snug">
                      People. Process. Technology.
                    </p>
                    <p className="text-[11px] text-[#9CA3AF] mt-1 leading-normal">
                      Working together for a safer tomorrow.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── EXACT CARD MATRIX GRID FROM IMAGE ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="rounded-2xl border border-white/10 bg-[#16202E]/60 backdrop-blur-sm overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-x-0 md:divide-x lg:divide-x md:divide-y-0 divide-white/10"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isHovered = hoveredCard === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all duration-300 relative ${
                  index >= 3 ? "border-t border-white/10" : ""
                } ${isHovered ? "bg-white/[0.03]" : ""}`}
              >
                {/* Top Section: Icon Circular Badge + Title side-by-side */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    {/* Circle Icon Badge */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                      style={{
                        backgroundColor: reason.bgBadge,
                        color: reason.accent,
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                      }}
                    >
                      <Icon size={22} strokeWidth={2} />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#FBF9F9] leading-snug">
                      {reason.title}
                    </h3>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed pl-0 sm:pl-1">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom Tagline Accent Label */}
                <div className="pt-2 flex items-center gap-2">
                  <span
                    className="w-4 h-[2px] rounded-full"
                    style={{ backgroundColor: reason.accent }}
                  />
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase"
                    style={{ color: reason.accent }}
                  >
                    {reason.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── BOTTOM BANNER MATCHING IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-white/10 bg-[#16202E]/70 overflow-hidden flex flex-col md:flex-row items-stretch justify-between"
        >
          {/* Left Message Content */}
          <div className="p-6 sm:p-8 md:p-10 flex items-start gap-4 z-10 max-w-xl">
            <span className="w-1.5 h-12 bg-[#F97316] rounded-full flex-shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <h4 className="text-lg sm:text-xl font-bold text-[#FBF9F9]">
                Your goals. Our commitment.
              </h4>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
               we help you build a stronger,
                more resilient future.
              </p>
            </div>
          </div>

          {/* Right Skyline Graphic Area with Slanted Divider */}
          <div className="relative md:w-2/5 min-h-[120px] md:min-h-full flex items-center justify-end p-6 md:p-8 bg-gradient-to-r from-transparent via-[#111928]/40 to-[#111928]/90 overflow-hidden">
            {/* Slanted Accent Angle */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#F97316]/10 to-teal-500/10 pointer-events-none"
              style={{
                clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            />

            {/* Handwritten Tagline Style */}
            <div className="relative z-10 text-right space-y-1">
              <p
                className="text-base sm:text-lg font-semibold tracking-wide text-[#FBF9F9] italic"
                style={{ fontFamily: "serif, cursive" }}
              >
                Safer Businesses.
              </p>
              <p
                className="text-base sm:text-lg font-semibold tracking-wide text-[#F97316] italic"
                style={{ fontFamily: "serif, cursive" }}
              >
                A Stronger Africa.
              </p>
              <div className="w-12 h-[2px] bg-[#F97316] ml-auto rounded-full opacity-80" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;