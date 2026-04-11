"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import About from "../components/About";
import Philosophy from "../components/Philosophy";
import ValueProposition from "../components/ValueProposition";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import ThreatsSection from "../components/ThreatsSection";
import DefenseSection from "../components/DefenseSection";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black relative overflow-x-hidden text-white scroll-smooth">
      {/* Hero */}
      <motion.section id="home" {...fadeUp}>
        <Hero />
      </motion.section>

      {/* Threats */}
      <motion.section id="threats" {...fadeUp}>
        <ThreatsSection />
      </motion.section>

      {/* About */}
      <motion.section id="about" {...fadeUp}>
        <About />
      </motion.section>

      {/* Solutions (Philosophy + Value Proposition) */}
      <motion.section id="solutions" {...fadeUp}>
        <Philosophy />
        <ValueProposition />
      </motion.section>

      {/* Defence */}
      <motion.section id="defence" {...fadeUp}>
        <DefenseSection />
      </motion.section>

      {/* Services */}
      <motion.section id="services" {...fadeUp}>
        <Services />
      </motion.section>

      {/* Why Us + Clients */}
      <motion.section id="why-us" {...fadeUp}>
        <WhyChooseUs />
        <Clients />
      </motion.section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
