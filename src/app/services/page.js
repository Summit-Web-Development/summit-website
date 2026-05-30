"use client";

import AnimateIn from "../../components/AnimateIn";
import CTABanner from "../../components/CTABanner";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "web-design",
      title: "Custom Web Design",
      tagline: "Bespoke digital storefronts engineered to dominate your local market.",
      desc: "We do not use drag-and-drop builders. Every pixel is custom-architected based on conversion rate optimization (CRO) strategies to establish absolute authority.",
      features: ["Custom UI/UX Architecture", "Mobile-First Responsive Design", "Conversion Rate Optimization", "High-Fidelity Wireframing"],
      mostPopular: true
    },
    {
      id: "web-dev",
      title: "High-Performance Web Development",
      tagline: "Lightning-fast Next.js infrastructures deployed to global edge networks.",
      desc: "We engineer using React and Next.js for sub-second load times. This drastically reduces bounce rates and vastly improves user experience metrics.",
      features: ["React & Next.js Frameworks", "Global Edge Deployment", "Sub-Second Load Times", "Impenetrable Security"]
    },
    {
      id: "seo",
      title: "Technical SEO & Performance",
      tagline: "Aggressive search engine strategies to systematically outrank your competitors.",
      desc: "True SEO starts at the code level. We structure your HTML, metadata, and schema perfectly to saturate local search results organically.",
      features: ["Code-Level Optimization", "Local Maps Dominance", "Schema Markup Integration", "Automated Site Audits"]
    },
    {
      id: "ads",
      title: "Google & Meta Ads Management",
      tagline: "Precision-targeted campaigns designed for immediate lead generation.",
      desc: "Stop burning money on bad campaigns. We build data-driven advertising engines across Google and Meta to lower your Cost Per Acquisition.",
      features: ["Google Search & Display", "Facebook & Instagram Ads", "Custom Landing Pages", "Continuous A/B Testing"]
    },
    {
      id: "ai",
      title: "AI Receptionist Integration",
      tagline: "Never miss a lead again with 24/7 automated qualification.",
      desc: "We integrate custom-trained AI chatbots that engage visitors, answer complex questions, and automatically book leads directly into your calendar.",
      features: ["24/7 Lead Qualification", "Custom Knowledge Bases", "Direct Calendar Sync", "Human-Handoff Capabilities"]
    },
    {
      id: "support",
      title: "Ongoing Support & Growth",
      tagline: "A dedicated engineering team constantly optimizing your digital asset.",
      desc: "Our support plans ensure your infrastructure remains perfectly secure, software is up-to-date, and content accurately reflects your business growth.",
      features: ["24/7 Uptime Monitoring", "Security Patching & Updates", "Monthly Strategy Sessions", "Content Updates Included"]
    }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>What We Build</span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>An arsenal of digital infrastructure.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              We provide an end-to-end suite of technical services designed specifically to scale North American service businesses aggressively.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-light" style={{ padding: "5rem 0" }}>
        <div className="container">
          <AnimateIn type="fade-up" speed="fast">
            {/* 3x2 Grid Wrapper */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "stretch"
            }}>
              {services.map((s, i) => (
                <div 
                  id={s.id} 
                  key={i} 
                  className="card-light" 
                  style={{ 
                    padding: "3rem 2rem 2.5rem 2rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "space-between",
                    borderRadius: "12px",
                    position: "relative",
                    scrollMarginTop: "100px",
                    border: s.mostPopular ? "2px solid var(--accent, #0B2545)" : "1px solid rgba(0,0,0,0.08)",
                    backgroundColor: "#FFFFFF",
                    boxShadow: s.mostPopular ? "0 12px 40px rgba(11, 37, 69, 0.08)" : "0 4px 20px rgba(0,0,0,0.02)"
                  }}
                >
                  {/* Absolute Badge for Most Popular */}
                  {s.mostPopular && (
                    <span style={{
                      position: "absolute",
                      top: "-14px",
                      right: "24px",
                      background: "var(--accent, #0B2545)",
                      color: "#F4F4F2",
                      padding: "5px 14px",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                      textTransform: "uppercase",
                      letterSpacing: "1px"
                    }}>
                      Most Popular
                    </span>
                  )}

                  {/* Main Content Bucket */}
                  <div>
                    <h2 style={{ color: "var(--text-navy, #0B2545)", fontSize: "1.6rem", marginBottom: "0.5rem", fontWeight: "700" }}>
                      {s.title}
                    </h2>
                    <p style={{ color: "var(--accent, #0B2545)", fontWeight: "600", fontSize: "0.95rem", marginBottom: "1.25rem", lineHeight: "1.4" }}>
                      {s.tagline}
                    </p>
                    <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                      {s.desc}
                    </p>
                    
                    {/* Fixed Features Block */}
                    <div style={{ marginBottom: "2.5rem", width: "100%" }}>
                      <h3 style={{ 
                        color: "var(--text-navy, #0B2545)", 
                        marginBottom: "1rem", 
                        fontSize: "0.85rem", 
                        textTransform: "uppercase", 
                        letterSpacing: "1px", 
                        fontWeight: "750" 
                      }}>
                        Includes:
                      </h3>
                      <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                        {s.features.map((f, j) => (
                          <li key={j} style={{ 
                            color: "#1E293B", // Explicit dark charcoal color to crush the white-text bug
                            fontSize: "0.95rem", 
                            fontWeight: "500",
                            display: "flex", 
                            alignItems: "center", 
                            gap: "0.75rem",
                            lineHeight: "1.4"
                          }}>
                            <span style={{ color: "var(--accent, #0B2545)", fontWeight: "900", flexShrink: 0 }}>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Button Anchor */}
                  <div>
                    <Link href="/contact" className="btn-light" style={{ display: "block", textAlign: "center", width: "100%" }}>
                      Discuss Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      <AnimateIn type="fade-up">
        <CTABanner />
      </AnimateIn>
    </>
  );
}