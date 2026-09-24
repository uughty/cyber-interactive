import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Star,
  X,
  CheckCircle2,
  AlertCircle,
  Lock,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const emptyForm = {
  name: "",
  email: "",
  company: "",
  website: "",
  industry: "",
  message: "",
};

const inputStyle = {
  width: "100%",
  padding: "0.9rem 1rem",
  border: "1.5px solid #E5E7EB",
  borderRadius: "8px",
  fontSize: "0.95rem",
  fontFamily: "inherit",
  boxSizing: "border-box",
  outline: "none",
  color: "#1F2937",
  backgroundColor: "#FFFFFF",
};

const Field = ({ label, required, error, children }) => {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label
        style={{
          display: "block",
          marginBottom: "0.55rem",
          color: "#374151",
          fontWeight: 600,
          fontSize: "0.9rem",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#F97316", marginLeft: "0.25rem" }}>
            *
          </span>
        )}
      </label>

      {children}

      {error && (
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            marginTop: "0.45rem",
            marginBottom: 0,
            color: "#DC2626",
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
};

const SecurityAssessmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Please enter your website URL.";
    } else if (!/^https?:\/\/.+/i.test(formData.website)) {
      newErrors.website = "Use a full URL, for example https://example.com.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;

    setErrors({});
    setShowSuccess(false);
    onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors({});
    setShowSuccess(false);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData(emptyForm);
      window.setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3500);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(3, 7, 18, 0.82)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      role="presentation"
    >
      <motion.div
        className="w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white"
        initial={{ opacity: 0, y: -35, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -35, scale: 0.97 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="assessment-title"
        style={{ boxShadow: "0 25px 80px rgba(0, 0, 0, 0.45)" }}
      >
        <div
          style={{
            padding: "1.5rem 1.75rem",
            background: "linear-gradient(135deg, #111928, #1E293B)",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2
              id="assessment-title"
              style={{
                fontSize: "1.45rem",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Free Security Assessment
            </h2>

            <p
              style={{
                color: "#CBD5E1",
                margin: "0.4rem 0 0",
                fontSize: "0.9rem",
              }}
            >
              Let&apos;s evaluate your security posture.
            </p>
          </div>

          <button
            type="button"
            aria-label="Close form"
            disabled={isSubmitting}
            onClick={handleClose}
            style={{
              border: "none",
              background: "transparent",
              color: "#CBD5E1",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              padding: "0.2rem",
            }}
          >
            <X size={25} />
          </button>
        </div>

        <div style={{ padding: "1.75rem" }}>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              role="status"
              style={{
                display: "flex",
                gap: "0.75rem",
                padding: "1rem",
                background: "#ECFDF5",
                border: "1px solid #A7F3D0",
                borderRadius: "10px",
                marginBottom: "1.25rem",
              }}
            >
              <CheckCircle2 size={22} style={{ color: "#059669" }} />

              <div>
                <p
                  style={{
                    margin: 0,
                    color: "#065F46",
                    fontWeight: 700,
                  }}
                >
                  Assessment submitted successfully
                </p>

                <p
                  style={{
                    margin: "0.25rem 0 0",
                    color: "#047857",
                    fontSize: "0.85rem",
                  }}
                >
                  Our security team will be in touch soon.
                </p>
              </div>
            </motion.div>
          )}

          {errors.submit && (
            <div
              role="alert"
              style={{
                display: "flex",
                gap: "0.7rem",
                padding: "1rem",
                background: "#FEF2F2",
                border: "1px solid #FECACA",
                borderRadius: "10px",
                marginBottom: "1.25rem",
                color: "#991B1B",
                fontSize: "0.9rem",
              }}
            >
              <AlertCircle size={20} />
              <span>{errors.submit}</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <Field label="Full name" required error={errors.name}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                autoComplete="name"
                style={{
                  ...inputStyle,
                  borderColor: errors.name ? "#FCA5A5" : "#E5E7EB",
                }}
              />
            </Field>

            <Field label="Email address" required error={errors.email}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                autoComplete="email"
                style={{
                  ...inputStyle,
                  borderColor: errors.email ? "#FCA5A5" : "#E5E7EB",
                }}
              />
            </Field>

            <Field label="Company name">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                autoComplete="organization"
                style={inputStyle}
              />
            </Field>

            <Field label="Website URL" required error={errors.website}>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://example.com"
                style={{
                  ...inputStyle,
                  borderColor: errors.website ? "#FCA5A5" : "#E5E7EB",
                }}
              />
            </Field>

            <Field label="Industry">
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Select an industry</option>
                <option value="Technology">Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Retail">Retail</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </Field>

            <Field label="Additional details">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your security concerns or priorities..."
                maxLength={3000}
                style={{
                  ...inputStyle,
                  minHeight: "110px",
                  resize: "vertical",
                }}
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                border: "none",
                borderRadius: "9px",
                padding: "1rem",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                background: isSubmitting
                  ? "#9CA3AF"
                  : "linear-gradient(135deg, #F97316, #EA580C)",
                color: "#FFFFFF",
                fontSize: "1rem",
                fontWeight: 700,
              }}
            >
              {isSubmitting
                ? "Sending assessment request..."
                : "Request My Free Assessment"}
            </button>

            <p
              style={{
                margin: "0.9rem 0 0",
                textAlign: "center",
                color: "#9CA3AF",
                fontSize: "0.78rem",
              }}
            >
              We respect your privacy and will not share your information.
            </p>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CyberBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#030712] pointer-events-none">
      {/* Central Ambient Hero Spotlight */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] rounded-full opacity-40 blur-[130px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(249, 115, 22, 0.35) 0%, rgba(14, 165, 233, 0.2) 45%, rgba(3, 7, 18, 0) 75%)",
        }}
      />

      {/* Cyber Grid Pattern with Radial Vignette */}
      <div 
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(circle at 50% 40%, black 35%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 40%, black 35%, transparent 85%)"
        }}
      />
      
      {/* Subtle animated laser sweep line */}
      <motion.div
        animate={{
          top: ["-10%", "110%"],
          opacity: [0, 0.4, 0]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/10 via-amber-500/10 to-transparent blur-sm pointer-events-none"
      />

      {/* Edge Vignette overlay */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030712] to-transparent" />
    </div>
  );
};

const Hero = ({ onAboutClick, onServicesClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <CyberBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center"
      >
        {/* Top Badge */}
        <motion.div {...fadeUp(0.1)} className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 shadow-inner shadow-orange-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
            </span>
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
              AI-Powered Security
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight max-w-4xl"
        >
          CYBER THREATS ARE EVOLVING{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
            IS YOUR BUSINESS READY?
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base sm:text-lg text-slate-300 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Protecting your business continuity, customer trust, and bottom
          line through Interactive Defense and Proactive Security. 24/7
          monitoring with compliance automation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 w-full"
        >
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative z-10 flex items-center gap-2">
              Get Free Security Assessment
            </span>
          </button>

          <button
            type="button"
            onClick={onServicesClick}
            className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/80 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 rounded-xl text-white font-semibold text-base transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            Explore Solutions
          </button>
        </motion.div>

        {/* Bottom Security Card */}
        <motion.div
          {...fadeUp(0.6)}
          className="w-full max-w-4xl mx-auto mt-8 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden text-left shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Cybersecurity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We empower and ensure your business continuity by identifying and mitigating complex security challenges with comprehensive solutions tailored to modern threats.
              </p>
              
               <div className="flex items-center gap-4 mt-6">
                  <div className="flex -space-x-3">
                    {[
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4",
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka&backgroundColor=c0aede",
                      "https://api.dicebear.com/7.x/avataaars/svg?seed=Nala&backgroundColor=ffdfbf",
                    ].map((src, index) => (
                      <div
                        key={src}
                        className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden"
                      >
                        <img
                          src={src}
                          alt={`Client ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-white">
                      Trusted by 500+ Teams
                    </div>
                    <div className="text-xs font-medium text-amber-500 flex items-center gap-1 mt-0.5">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className="w-3 h-3 fill-current"
                          />
                        ))}
                      </div>
                      <span className="ml-1 text-slate-300">4.9</span>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className="flex-1 w-full flex justify-center md:justify-end">
               <div className="relative w-48 h-48 flex items-center justify-center">
                 <div className="absolute inset-0 border-2 border-slate-700/50 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute inset-4 border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                 
                 <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600 shadow-xl relative z-10">
                   <Shield className="w-12 h-12 text-blue-400" />
                   <div className="absolute -right-4 -top-4 w-12 h-8 bg-emerald-500/20 backdrop-blur-md rounded border border-emerald-500/50 flex items-center justify-center">
                     <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                   </div>
                   <div className="absolute -left-6 bottom-2 w-16 h-6 bg-cyan-500/20 backdrop-blur-md rounded border border-cyan-500/50" />
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <SecurityAssessmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Hero;