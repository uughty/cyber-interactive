"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { num: "8+",    label: "Years of Excellence" },
  { num: "150+",  label: "Clients Protected"   },
  { num: "40+",   label: "Certified Experts"   },
  { num: "99.2%", label: "Retention Rate"      },
];

const pillars = [
  {
    number: "01",
    title: "Proactive Defence",
    desc: "We identify and neutralise threats before they cause damage through continuous monitoring, red teaming, and real-time threat intelligence tailored to the African digital landscape.",
    color: "#F97316",
  },
  {
    number: "02",
    title: "Always-On Support",
    desc: "Our Security Operations Centre runs 24/7.Guaranteed response times,direct access to senior analysts, and zero tolerance for downtime when it matters most.",
    color: "#FFFFFF",
  },
  {
    number: "03",
    title: "Global Standards,Local Depth",
    desc: "CISSP, CISM, CEH, and OSCP certified consultants.We apply ISO 27001, NIST CSF, and Kenya DPA frameworks with an intimate understanding of regional threats.",
    color: "#F97316",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
});

const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#111928" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#F97316 1px, transparent 1px), linear-gradient(90deg, #F97316 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow */}
      <motion.div
        className="absolute rounded-full blur-3xl z-0"
        style={{
          width: "520px", height: "520px",
          backgroundColor: "rgba(249,115,22,0.07)",
          top: "-80px", left: "-120px",
          y: y1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-28 pb-24">

        {/* ── ROW 1: Header ── */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <motion.div
            className="col-span-12 lg:col-span-7"
            {...fadeUp(0)}
          >
            <p className="font-bold tracking-[0.2em] uppercase mb-4"
              style={{ fontSize: "11px", color: "#F97316" }}>
              About CyberTrove Africa
            </p>
            <h2 className="font-black leading-none mb-0"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "#FBF9F9", letterSpacing: "-0.02em" }}>
              Who We{" "}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #F97316, #FFFFFF)" }}>
                Are
              </span>
            </h2>
            <motion.div
              className="mt-6 rounded-full"
              style={{ height: "2px", width: "80px", background: "linear-gradient(90deg, #F97316, #FFFFFF)" }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="col-span-12 lg:col-span-5 lg:pt-16"
            {...fadeUp(0.15)}
          >
            <p className="font-medium leading-relaxed"
              style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", color: "#9CA3AF" }}>
              CyberTrove Africa is a{" "}
              <span className="font-bold" style={{ color: "#FBF9F9" }}>strategic cybersecurity partner</span>{" "}
              committed to empowering organisations across the continent 
              delivering resilience that is proportionate, practical, and built to last.
            </p>
          </motion.div>
        </div>

        {/* ── ROW 2: Image + Body ── */}
        <div className="grid grid-cols-12 gap-8 mb-24 items-start">

          <motion.div className="col-span-12 lg:col-span-5" {...fadeUp(0.1)}>
           <motion.div
  className="relative rounded-2xl overflow-hidden"
  style={{ aspectRatio: "4/5" }}
  animate={{
    boxShadow: [
      "0 0 0 1px rgba(249,115,22,0.2), 0 24px 60px rgba(0,0,0,0.5)",
      "0 0 0 1px rgba(255,255,255,0.2), 0 24px 60px rgba(0,0,0,0.5)",
      "0 0 0 1px rgba(249,115,22,0.2), 0 24px 60px rgba(0,0,0,0.5)",
    ],
  }}
  transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
>
  <img
    src="/assets/sec.png"
    alt="CyberTrove Africa team"
    className="w-full h-full object-cover"
    style={{ filter: "brightness(1.1) contrast(1.05) saturate(1.1)" }}
  />
  <div
    className="absolute inset-0"
    style={{ background: "linear-gradient(180deg, transparent 55%, rgba(17,25,40,0.75) 100%)" }}
  />
  <div className="absolute bottom-6 left-6 rounded-xl px-5 py-4"
    style={{ backgroundColor: "rgba(17,25,40,0.85)", border: "1px solid rgba(249,115,22,0.3)", backdropFilter: "blur(12px)" }}>
    <p className="font-black" style={{ fontSize: "2.2rem", color: "#F97316", lineHeight: 1 }}>12+</p>
    <p className="font-medium mt-1" style={{ fontSize: "12px", color: "#9CA3AF" }}>African countries served</p>
  </div>
</motion.div>
          </motion.div>

          <motion.div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-8" {...fadeUp(0.2)}>
            <p className="font-bold uppercase tracking-widest mb-6"
              style={{ fontSize: "10px", color: "#6D7482" }}>Our story</p>

            <div className="space-y-5">
              {[
                <>We combine{" "}<span className="font-bold" style={{ color: "#F97316" }}>globally recognised frameworks</span>{" "}with an intimate understanding of the African threat landscape. From Nairobi to Lagos, our experts embed with your teams to build defences that are proportionate, practical, and proactive.</>,
                <>Our certified professionals holding{" "}<span className="font-bold" style={{ color: "#FFFFFF" }}>CISSP, CISM, CEH, and OSCP</span>{" "}qualifications deliver proactive strategies and advisory services, acting as trusted partners in safeguarding your most critical digital assets.</>,
                <>Unlike traditional providers, we stay engaged long after the initial assessment  continuously evolving your security posture as threats, regulations, and technology change around you.</>,
              ].map((text, i) => (
                <p key={i} className="font-medium leading-relaxed"
                  style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "#D1D5DB" }}>
                  {text}
                </p>
              ))}
            </div>

            <div className="mt-8 pl-5" style={{ borderLeft: "3px solid #F97316" }}>
              <p className="font-medium italic leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", color: "#6D7482" }}>
                "The best security strategy isn't the most expensive one  it's the one your team will actually use."
              </p>
              <span className="font-medium mt-2 block" style={{ fontSize: "11px", color: "#4B5563" }}>
                 CyberTrove Africa founding principle
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── ROW 3: Stats ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mb-24"
          style={{ border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.06)" }}
          {...fadeUp(0.1)}
        >
          {stats.map((s, i) => (
            <div key={s.num} className="flex flex-col justify-center px-8 py-8"
              style={{ backgroundColor: "#111928" }}>
              <p className="font-black"
                style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: i % 2 === 0 ? "#F97316" : "#FFFFFF", lineHeight: 1, letterSpacing: "-0.02em" }}>
                {s.num}
              </p>
              <p className="font-medium mt-2" style={{ fontSize: "13px", color: "#6D7482" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── ROW 4: Pillars ── */}
        <motion.div {...fadeUp(0.1)}>
          <div className="flex items-center gap-4 mb-10">
            <p className="font-bold uppercase tracking-[0.2em]"
              style={{ fontSize: "10px", color: "#6D7482" }}>What sets us apart</p>
            <div className="flex-1" style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.06)" }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.number}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: i === 1 ? 24 : 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.055)", borderColor: `${p.color}33`, transition: { duration: 0.2 } }}
              >
                <p className="font-black mb-5"
                  style={{ fontSize: "3.5rem", color: p.color, opacity: 0.25, lineHeight: 1, letterSpacing: "-0.04em" }}>
                  {p.number}
                </p>
                <div className="mb-5 rounded-full" style={{ width: "32px", height: "2px", backgroundColor: p.color }} />
                <h4 className="font-bold mb-3"
                  style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "#FBF9F9" }}>
                  {p.title}
                </h4>
                <p className="font-medium leading-relaxed" style={{ fontSize: "14px", color: "#6D7482" }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;