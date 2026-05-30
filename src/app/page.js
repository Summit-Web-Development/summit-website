"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Calculator from "../components/Calculator";
import Checklist from "../components/Checklist";
import FaqAccordion from "../components/FaqAccordion";
import ContactForm from "../components/ContactForm";

export default function Home() {
  // Shared state between Calculator and ContactForm
  const [selectedBuild, setSelectedBuild] = useState("static"); // 'static' | 'dynamic' | 'clean-break'
  const [selectedSupport, setSelectedSupport] = useState("bronze"); // 'bronze' | 'silver' | 'gold' | 'none'

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        <Calculator
          selectedBuild={selectedBuild}
          setSelectedBuild={setSelectedBuild}
          selectedSupport={selectedSupport}
          setSelectedSupport={setSelectedSupport}
        />
        
        <Checklist />
        
        <FaqAccordion />
        
        <ContactForm
          selectedBuild={selectedBuild}
          selectedSupport={selectedSupport}
        />
      </main>

      <footer
        style={{
          backgroundColor: "#0B2545",
          color: "#F4F4F2",
          borderTop: "1px solid rgba(244, 244, 242, 0.1)",
          padding: "3rem 1.5rem",
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          textAlign: "center"
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <p style={{ fontWeight: 700, letterSpacing: "1.5px", marginBottom: "1rem", fontFamily: "var(--font-heading)" }}>
            SUMMIT WEB SOLUTIONS
          </p>
          <p style={{ opacity: 0.7, marginBottom: "1.5rem" }}>
            High-Performance Web Design & Modular Infrastructures for Small Businesses.
          </p>
          <p style={{ opacity: 0.5, fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Summit Agency. All rights reserved. Configured for summit.vercel.app edge deployment.
          </p>
        </div>
      </footer>
    </>
  );
}
