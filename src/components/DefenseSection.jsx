import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Lock,
  Globe,
  Cpu,
  ArrowRight,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Active Cyber Defense",
    desc: "Always-on, intelligent protection powered by adaptive algorithms and deep visibility into every endpoint and network node.",
    num: "01",
  },
  {
    icon: Zap,
    title: "Threat Anticipation",
    desc: "Harness predictive analytics and behavioral AI to detect, isolate, and neutralize risks before they manifest.",
    num: "02",
  },
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    desc: "Build a perimeterless infrastructure that validates every action and identity in real-time—no exceptions.",
    num: "03",
  },
  {
    icon: Cpu,
    title: "AI-Driven Response",
    desc: "Autonomous incident response frameworks with deep learning models that evolve with every threat vector.",
    num: "04",
  },
  {
    icon: Globe,
    title: "Global Threat Intelligence",
    desc: "Integrated intelligence feeds from across the world to ensure rapid defense against emerging global cyberattacks.",
    num: "05",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: {
    duration: 0.7,
    ease: "easeOut",
    delay,
  },
});

const VerticalCard = ({ item, idx }) => {
  const Icon = item.icon;

  return (
    <motion.div
      {...fadeUp(idx * 0.08)}
      className="group relative p-6 rounded-xl transition-all duration-300"
      style={{
        background: "rgba(249,115,22,0.05)",
        border: "1px solid rgba(249,115,22,0.2)",
        borderLeft: "3px solid #F97316",
      }}
      whileHover={{
        x: 8,
        boxShadow: "0 12px 32px rgba(249,115,22,0.12)",
      }}
    >
      <div className="flex items-start gap-6">
        <span
          className="flex-shrink-0 text-2xl font-black"
          style={{
            color: "#F97316",
            opacity: 0.3,
          }}
        >
          {item.num}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3
              className="text-lg font-bold"
              style={{ color: "#FBF9F9" }}
            >
              {item.title}
            </h3>

            <Icon
              size={20}
              className="flex-shrink-0 mt-0.5"
              style={{
                color: "#F97316",
                strokeWidth: 1.5,
              }}
            />
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "#9CA3AF" }}
          >
            {item.desc}
          </p>
        </div>

        <motion.div
          className="flex-shrink-0"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight
            size={18}
            style={{
              color: "#F97316",
              opacity: 0.6,
            }}
            strokeWidth={2}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const DefenseSection = () => {
  const scrollToAssessment = () => {
    document
      .getElementById("security-assessment")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="defence"
      className="relative font-sans antialiased overflow-hidden py-28 px-6 md:px-12"
      style={{ background: "#111928" }}
    >
      {/* Circuit grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='140' height='140' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 70 H120 M70 20 V120' stroke='%23F97316' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='20' cy='70' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='120' cy='70' r='1.5' fill='%23F97316'/%3E%3Ccircle cx='70' cy='20' r='1.5' fill='%23FFFFFF'/%3E%3Ccircle cx='70' cy='120' r='1.5' fill='%23F97316'/%3E%3C/svg%3E\")",
          backgroundSize: "140px 140px",
          opacity: 0.06,
        }}
      />

      {/* Ambient orange glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
          top: -140,
          left: -100,
        }}
      />

      {/* Ambient white glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: 440,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
          bottom: 0,
          right: -60,
        }}
      />

      {/* Moving scan line */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          left: 0,
          right: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(249,115,22,0.12), transparent)",
        }}
        animate={{ top: ["8%", "92%", "8%"] }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div {...fadeUp(0)}>
            <div
              className="inline-flex items-center gap-2 mb-6"
              style={{
                borderLeft: "3px solid #F97316",
                paddingLeft: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  color: "#F97316",
                  letterSpacing: "0.12em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                How We Protect You
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{
                color: "#FBF9F9",
                letterSpacing: "-0.02em",
              }}
            >
              Interactive Defense,{" "}
              <span style={{ color: "#F97316" }}>
                Proactive Security
              </span>
              .
            </h2>

            <p
              className="text-lg leading-relaxed mb-4"
              style={{ color: "#6D7482" }}
            >
              The CyberTrove Africa Difference.
            </p>

            <p
              className="text-base leading-relaxed mb-8"
              style={{
                color: "#9CA3AF",
                maxWidth: "500px",
              }}
            >
              We combine intelligent technology, continuous visibility and
              human expertise to help businesses stay ahead of evolving
              threats and build stronger, more resilient operations.
            </p>

            <motion.button
              type="button"
              className="rounded-full px-8 py-3 font-bold text-white flex items-center gap-2"
              style={{ backgroundColor: "#F97316" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAssessment}
            >
              Get a Security Assessment
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.button>
          </motion.div>

          {/* Security image */}
          <motion.div {...fadeUp(0.15)} className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                boxShadow: "0 20px 60px rgba(249,115,22,0.15)",
              }}
            >
              <img
                src="/assets/defense.jpg"
                alt="CyberTrove security team"
                className="w-full h-full object-cover"
              />

              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(180deg, transparent, rgba(17,25,40,0.95))",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-center font-bold"
                  style={{
                    color: "#FBF9F9",
                    marginBottom: "0.5rem",
                    fontSize: "0.9rem",
                  }}
                >
                  PEOPLE + PROCESS + TECHNOLOGY
                </p>

                <p
                  className="text-center font-black"
                  style={{
                    color: "#F97316",
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  = STRONGER SECURITY
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="hidden lg:block" />

          <div className="lg:col-span-2 space-y-6">
            {highlights.map((item, idx) => (
              <VerticalCard key={item.num} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefenseSection;