"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Lock,
  Globe,
  Cpu,
  ArrowRight,
  X,
  CheckCircle2,
  AlertCircle,
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

const emptyForm = {
  name: "",
  email: "",
  company: "",
  website: "",
  industry: "",
  message: "",
};

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

// ===== IMPROVED FORM STYLES =====

const FormField = ({ label, required, children, error }) => (
  <motion.div
    style={{ marginBottom: "1.5rem" }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {label && (
      <label
        style={{
          display: "block",
          marginBottom: "0.75rem",
          color: "#1F2937",
          fontWeight: 600,
          fontSize: "0.95rem",
          letterSpacing: "0.3px",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#F97316", marginLeft: "0.25rem" }}>*</span>
        )}
      </label>
    )}
    <div>{children}</div>
    {error && (
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          marginTop: "0.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#DC2626",
          fontSize: "0.85rem",
          fontWeight: 500,
        }}
      >
        <AlertCircle size={14} />
        {error}
      </motion.div>
    )}
  </motion.div>
);

const inputBaseStyle = {
  width: "100%",
  padding: "0.9rem 1rem",
  border: "1.5px solid #E5E7EB",
  borderRadius: "8px",
  fontSize: "0.95rem",
  fontFamily: "inherit",
  boxSizing: "border-box",
  transition: "all 0.2s ease",
  backgroundColor: "#FFFFFF",
  color: "#1F2937",
};

const SecurityAssessmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(emptyForm);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.website.trim()) {
      newErrors.website = "Website URL is required";
    } else if (!/^https?:\/\/.+/.test(formData.website)) {
      newErrors.website = "Please enter a valid URL (e.g., https://example.com)";
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

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/security-assessment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your request."
        );
      }

      setShowSuccess(true);
      setFormData({ ...emptyForm });

      window.setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3500);
    } catch (error) {
      setErrors({
        submit: error instanceof Error
          ? error.message
          : "Unable to send your request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) return;
    setErrors({});
    setShowSuccess(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      role="presentation"
    >
      <motion.div
        className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        style={{
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)",
        }}
        initial={{ y: -40, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: -40, opacity: 0, scale: 0.95 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="security-assessment-title"
      >
        {/* Header */}
        <div
          style={{
            padding: "2rem",
            borderBottom: "1px solid #E5E7EB",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h2
              id="security-assessment-title"
              style={{
                color: "#1F2937",
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                fontWeight: 700,
              }}
            >
              Free Security Assessment
            </h2>
            <p style={{ color: "#6B7280", fontSize: "0.9rem" }}>
              Let&apos;s evaluate your security posture
            </p>
          </div>

          <button
            type="button"
            aria-label="Close security assessment form"
            onClick={handleClose}
            disabled={isSubmitting}
            style={{
              color: "#9CA3AF",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              background: "none",
              border: "none",
              padding: "0.5rem",
              marginBottom: "0",
              opacity: isSubmitting ? 0.5 : 1,
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "6px",
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                e.currentTarget.style.backgroundColor = "#F3F4F6";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "2rem" }}>
          {/* Success Message */}
          {showSuccess && (
            <motion.div
              role="status"
              style={{
                padding: "1rem",
                background: "#ECFDF5",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                border: "1px solid #D1FAE5",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <CheckCircle2 size={20} style={{ color: "#059669" }} />
              <div>
                <p style={{ color: "#065F46", fontWeight: 600, margin: 0 }}>
                  ✓ Assessment Submitted
                </p>
                <p style={{ color: "#047857", fontSize: "0.85rem", margin: "0.25rem 0 0 0" }}>
                  We&apos;ll review your details and be in touch soon.
                </p>
              </div>
            </motion.div>
          )}

          {/* Global Error */}
          {errors.submit && (
            <motion.div
              role="alert"
              style={{
                padding: "1rem",
                background: "#FEF2F2",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                border: "1px solid #FECACA",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={20} style={{ color: "#DC2626" }} />
              <p style={{ color: "#991B1B", fontWeight: 500, margin: 0, fontSize: "0.9rem" }}>
                {errors.submit}
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <fieldset
              style={{
                border: "none",
                padding: 0,
                margin: 0,
                marginBottom: "1.5rem",
              }}
            >
              <legend
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                  display: "block",
                }}
              >
                📋 Personal Information
              </legend>

              <FormField label="Full Name" required error={errors.name}>
                <input
                  id="security-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="John Doe"
                  style={{
                    ...inputBaseStyle,
                    borderColor: errors.name ? "#FCA5A5" : inputBaseStyle.borderColor,
                    boxShadow: errors.name ? "0 0 0 3px rgba(220, 38, 38, 0.1)" : "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = errors.name ? "#FCA5A5" : "#F97316";
                    e.target.style.boxShadow = errors.name ? "0 0 0 3px rgba(220, 38, 38, 0.1)" : "0 0 0 3px rgba(249, 115, 22, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.name ? "#FCA5A5" : "#E5E7EB";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </FormField>

              <FormField label="Email Address" required error={errors.email}>
                <input
                  id="security-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="john@company.com"
                  style={{
                    ...inputBaseStyle,
                    borderColor: errors.email ? "#FCA5A5" : inputBaseStyle.borderColor,
                    boxShadow: errors.email ? "0 0 0 3px rgba(220, 38, 38, 0.1)" : "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = errors.email ? "#FCA5A5" : "#F97316";
                    e.target.style.boxShadow = errors.email ? "0 0 0 3px rgba(220, 38, 38, 0.1)" : "0 0 0 3px rgba(249, 115, 22, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.email ? "#FCA5A5" : "#E5E7EB";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </FormField>
            </fieldset>

            {/* Company Information Section */}
            <fieldset
              style={{
                border: "none",
                padding: 0,
                margin: 0,
                marginBottom: "1.5rem",
              }}
            >
              <legend
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                  display: "block",
                }}
              >
                🏢 Company Details
              </legend>

              <FormField label="Company Name">
                <input
                  id="security-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="organization"
                  placeholder="Your company name"
                  style={inputBaseStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249, 115, 22, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E5E7EB";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </FormField>

              <FormField label="Website URL" required error={errors.website}>
                <input
                  id="security-website"
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  required
                  style={{
                    ...inputBaseStyle,
                    borderColor: errors.website ? "#FCA5A5" : inputBaseStyle.borderColor,
                    boxShadow: errors.website ? "0 0 0 3px rgba(220, 38, 38, 0.1)" : "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = errors.website ? "#FCA5A5" : "#F97316";
                    e.target.style.boxShadow = errors.website ? "0 0 0 3px rgba(220, 38, 38, 0.1)" : "0 0 0 3px rgba(249, 115, 22, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = errors.website ? "#FCA5A5" : "#E5E7EB";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </FormField>

              <FormField label="Industry">
                <select
                  id="security-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  style={{
                    ...inputBaseStyle,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23F97316' d='M1 1l5 5 5-5'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    paddingRight: "2.5rem",
                    cursor: "pointer",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249, 115, 22, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E5E7EB";
                    e.target.style.boxShadow = "none";
                  }}
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
              </FormField>
            </fieldset>

            {/* Additional Information Section */}
            <fieldset
              style={{
                border: "none",
                padding: 0,
                margin: 0,
                marginBottom: "2rem",
              }}
            >
              <legend
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#6B7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                  display: "block",
                }}
              >
                💬 Additional Details
              </legend>

              <FormField label="Tell us more">
                <textarea
                  id="security-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific security concerns or priorities? (optional)"
                  maxLength={500}
                  style={{
                    ...inputBaseStyle,
                    minHeight: "100px",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F97316";
                    e.target.style.boxShadow = "0 0 0 3px rgba(249, 115, 22, 0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#E5E7EB";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <p
                  style={{
                    marginTop: "0.5rem",
                    fontSize: "0.8rem",
                    color: "#9CA3AF",
                    textAlign: "right",
                  }}
                >
                  {formData.message.length}/500
                </p>
              </FormField>
            </fieldset>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "1rem",
                background: isSubmitting
                  ? "#D1D5DB"
                  : "linear-gradient(135deg, #F97316 0%, #FF8C00 100%)",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(249, 115, 22, 0.3)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {isSubmitting ? (
                <>
                  <span
                    style={{
                      display: "inline-block",
                      width: "16px",
                      height: "16px",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderTopColor: "white",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }}
                  />
                  Sending Assessment...
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} strokeWidth={2.5} />
                  Get Free Assessment
                </>
              )}
            </motion.button>

            {/* Form Footer */}
            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.8rem",
                color: "#9CA3AF",
                textAlign: "center",
              }}
            >
              We respect your privacy. Your data will not be shared.
            </p>
          </form>
        </div>
      </motion.div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

const VerticalCard = ({ item, idx }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
        delay: idx * 0.08,
      }}
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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

      {/* Ambient glows */}
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

      {/* Horizontal scan line */}
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
        {/* Hero and image section */}
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
              onClick={() => {
                document
                  .getElementById("defence-assessment")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Our Approach
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.button>
          </motion.div>

          {/* Right: Image with overlay */}
          <motion.div {...fadeUp(0.15)} className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "4/5",
                boxShadow: "0 20px 60px rgba(249,115,22,0.15)",
              }}
            >
              <img
                src="/assets/sec.png"
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

        {/* Vertical cards */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-20">
          <div className="hidden lg:block" />

          <div className="lg:col-span-2 space-y-6">
            {highlights.map((item, idx) => (
              <VerticalCard key={item.num} item={item} idx={idx} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          id="defence-assessment"
          {...fadeUp(0.4)}
          className="rounded-xl p-8 md:p-12"
          style={{
            background: "rgba(17,25,40,0.85)",
            borderLeft: "4px solid #F97316",
            borderTop: "1px solid rgba(249,115,22,0.2)",
            borderRight: "1px solid rgba(249,115,22,0.2)",
            borderBottom: "1px solid rgba(249,115,22,0.2)",
            backdropFilter: "blur(14px)",
          }}
        >
          <h3
            className="text-3xl md:text-4xl font-black mb-4"
            style={{
              color: "#FBF9F9",
              letterSpacing: "-0.02em",
            }}
          >
            Your security should adapt{" "}
            <span style={{ color: "#F97316" }}>
              with your business.
            </span>
          </h3>

          <p
            className="text-base mb-8 max-w-2xl"
            style={{
              color: "#6D7482",
              lineHeight: 1.75,
            }}
          >
            Threats evolve. Your protection should too. Let&apos;s build a
            stronger, safer future together.
          </p>

          <motion.button
            type="button"
            className="rounded-full px-8 py-3 font-bold text-white flex items-center gap-2"
            style={{ backgroundColor: "#F97316" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
          >
            Get a Security Assessment
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
        </motion.div>
      </div>

      <SecurityAssessmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default DefenseSection;