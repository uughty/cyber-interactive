import React from "react";
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

const Index = () => {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1120",
      overflowX: "hidden",
      color: "#FBF9F9",
    }}>
      <Hero />
      <ThreatsSection />
      <About />
      <Philosophy />
      <ValueProposition />
      <DefenseSection />
      <Services />
      <WhyChooseUs />
      <Clients />
      <Footer />
    </main>
  );
};

export default Index;