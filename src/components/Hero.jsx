import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = ({ onAboutClick, onServicesClick }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = Array.from({ length: 55 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      r: Math.random() * 1.8 + 0.6,
      cyan: Math.random() > 0.4,
    }));

    let mouse = { x: width / 2, y: height / 2 };
    let animId;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.cyan ? "rgba(0,182,213,0.6)" : "rgba(133,196,65,0.5)";
        ctx.fill();

        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,182,213,${0.2 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const mdist = Math.sqrt(dxm * dxm + dym * dym);
        if (mdist < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,182,213,${0.35 * (1 - mdist / 150)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "#111928",
        backgroundImage: "url('/assets/bg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,182,213,0.07) 0%, rgba(17,25,40,0.88) 50%, rgba(133,196,65,0.05) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl">

        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 mb-6"
          style={{
            background: "rgba(0,182,213,0.1)",
            border: "0.5px solid rgba(0,182,213,0.35)",
            borderRadius: "999px",
            padding: "5px 18px",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00B6D5", boxShadow: "0 0 0 3px rgba(0,182,213,0.25)", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: "0.72rem", color: "#00B6D5", letterSpacing: "0.07em", fontWeight: 600 }}>
            TRUSTED CYBERSECURITY PARTNER
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          style={{ color: "#FBF9F9" }}
        >
          Is Your Business{" "}
          <span style={{ color: "#00B6D5" }}>Safe From Cyber Threats?</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.3)}
          className="mt-6 text-lg md:text-xl font-light"
          style={{ color: "#9aa3b0", lineHeight: 1.75 }}
        >
          Protecting your business continuity, customer trust, and bottom line through{" "}
          <span style={{ color: "#00B6D5", fontWeight: 500 }}>Interactive Defense</span>{" "}
          and{" "}
          <span style={{ color: "#85C441", fontWeight: 500 }}>Proactive Security</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button
            onClick={onAboutClick}
            size="lg"
            className="transition-transform hover:scale-105 rounded-full px-10 py-5 font-semibold shadow-md"
            style={{ background: "#00B6D5", color: "#111928", border: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#00a0bc")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#00B6D5")}
          >
            Get Free Security Assessment <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <Button
            onClick={onServicesClick}
            size="lg"
            variant="outline"
            className="transition-transform hover:scale-105 rounded-full px-10 py-5 font-semibold"
            style={{ border: "1.5px solid #85C441", color: "#85C441", background: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#85C441"; e.currentTarget.style.color = "#111928"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#85C441"; }}
          >
            Explore Our Solutions
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm md:text-base"
        >
          {[
            { icon: "💻", text: "15+ Years Combined Experience", accent: "#00B6D5" },
            { icon: "🎓", text: "ISO 27001 · OSCP · CEH Certified", accent: "#00B6D5" },
            { icon: "🕒", text: "24/7 Protection", accent: "#00B6D5" },
            { icon: "✅", text: "100% Compliance Success Rate", accent: "#85C441" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2" style={{ color: "#6D7482" }}>
              <span style={{ color: item.accent, fontSize: "1.1rem" }}>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;