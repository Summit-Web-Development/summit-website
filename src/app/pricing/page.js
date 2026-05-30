"use client";

import CTABanner from "../../components/CTABanner";
import Link from "next/link";

export default function PricingPage() {
  const tiers = [
    {
      name: "Essential Core",
      price: "$300",
      desc: "A clean, ultra-fast 1-page digital storefront engineered to claim your local Google Maps authority.",
      features: [
        "Custom UI/UX Architecture",
        "Mobile-First Responsive Design",
        "Contact Form Endpoint Integration",
        "Basic Local SEO Initialization",
        "Global Edge Network Deployment"
      ],
      highlight: false
    },
    {
      name: "Growth Engine",
      price: "$950",
      desc: "Full multi-page Next.js architecture custom-coded for service businesses actively driving lead generation.",
      features: [
        "Advanced Multi-Page Architecture",
        "React & Next.js Framework Core",
        "Deep Conversion Rate Optimization (CRO)",
        "Code-Level Technical SEO Framework",
        "Sub-Second Asset Speed Profiles"
      ],
      highlight: true
    },
    {
      name: "Market Dominator",
      price: "$2,000",
      desc: "Complete digital saturation. Built for regional service firms looking to systematically overtake incumbents.",
      features: [
        "Comprehensive Sub-Service Page Expansion",
        "Competitor Keyword Capture Mapping",
        "High-Fidelity Wireframing Assets",
        "Advanced Dynamic UI Component Stacks",
        "Priority Post-Launch Asset Scaling"
      ],
      highlight: false
    }
  ];

  return (
    <>
      {/* Hero Header */}
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>Transparent Value</span>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Predictable engineering pricing.</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
            No agency bloat. No hidden software markups. High-performance code built to convert local traffic into paying clients.
          </p>
        </div>
      </div>

      {/* Upfront Architecture Section */}
      <section className="section-light" style={{ padding: "5rem 0 3rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <h2 style={{ fontSize: "2.2rem", color: "var(--text-navy, #0B2545)", marginBottom: "0.5rem" }}>Core Upfront Projects</h2>
            <p style={{ color: "#475569" }}>Select the baseline infrastructure for your business asset.</p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "2.5rem", 
            alignItems: "stretch",
            marginBottom: "6rem" 
          }}>
            {tiers.map((tier, i) => (
              <div 
                key={i} 
                className="card-light" 
                style={{ 
                  padding: "3rem 2rem 2.5rem 2rem", 
                  display: "flex", 
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: tier.highlight ? "2px solid var(--accent, #0B2545)" : "1px solid rgba(0,0,0,0.08)",
                  boxShadow: tier.highlight ? "0 12px 40px rgba(11, 37, 69, 0.08)" : "0 4px 20px rgba(0,0,0,0.02)"
                }}
              >
                {tier.highlight && (
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

                <div>
                  <h3 style={{ fontSize: "1.6rem", color: "var(--text-navy, #0B2545)", fontWeight: "700", marginBottom: "1rem" }}>{tier.name}</h3>
                  <div style={{ fontSize: "3rem", fontWeight: "900", color: "var(--text-navy, #0B2545)", marginBottom: "1rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                    {tier.price}
                    <span style={{ fontSize: "0.95rem", color: "#64748B", fontWeight: "500", textTransform: "lowercase" }}>one-time setup</span>
                  </div>
                  <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem" }}>{tier.desc}</p>
                  
                  <div style={{ marginBottom: "2.5rem" }}>
                    <h4 style={{ color: "var(--text-navy, #0B2545)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "750", marginBottom: "1rem" }}>Included Features:</h4>
                    <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                      {tier.features.map((f, j) => (
                        <li key={j} style={{ color: "#1E293B", fontSize: "0.95rem", fontWeight: "500", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <span style={{ color: "var(--accent, #0B2545)", fontWeight: "900" }}>✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link href="/contact" className="btn-light" style={{ display: "block", textAlign: "center", width: "100%" }}>
                    Initialize Project Intake
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Subscriptions Section */}
      <section style={{ backgroundColor: "#F8FAFC", padding: "5rem 0", borderTop: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.2rem", color: "var(--text-navy, #0B2545)", marginBottom: "0.5rem" }}>Ongoing Monthly Operations</h2>
            <p style={{ color: "#64748B", maxWidth: "600px", margin: "0 auto" }}>
              Keep your infrastructure live, secure, and actively capturing business queries with an ongoing service tier.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem", maxWidth: "900px", margin: "0 auto" }}>
            
            {/* Maintenance Option */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "2.5rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--text-navy, #0B2545)", fontWeight: "700", marginBottom: "0.5rem" }}>Basic Network Maintenance</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--text-navy, #0B2545)", marginBottom: "1.5rem" }}>
                  $49<span style={{ fontSize: "0.95rem", color: "#64748B", fontWeight: "500" }}> / mo</span>
                </div>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                  Essential core protection keeping your engine online on the global edge network with dedicated oversight.
                </p>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)" }}>✓</span> 24/7 Global Uptime Monitoring</li>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)" }}>✓</span> Security Patching & Node Updates</li>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)" }}>✓</span> Edge Network Hosting Management</li>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)" }}>✓</span> Standard Inbound Form Tracking</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-light" style={{ display: "block", textAlign: "center", width: "100%" }}>Select Basic Management</Link>
            </div>

            {/* AI Option */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "2.5rem", borderRadius: "12px", border: "2px solid var(--accent, #0B2545)", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
              <span style={{ position: "absolute", top: "-14px", right: "24px", background: "var(--accent, #0B2545)", color: "#F4F4F2", padding: "4px 12px", borderRadius: "20px", fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px" }}>High Efficiency</span>
              <div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--text-navy, #0B2545)", fontWeight: "700", marginBottom: "0.5rem" }}>AI Auto-Intake Engine</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--text-navy, #0B2545)", marginBottom: "1.5rem" }}>
                  $149<span style={{ fontSize: "0.95rem", color: "#64748B", fontWeight: "500" }}> / mo</span>
                </div>
                <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem" }}>
                  Deploys a custom-trained conversational neural handler to manage, qualify, and book clients automatically 24/7.
                </p>
                <ul style={{ paddingLeft: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem", marginBottom: "2rem" }}>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)", fontWeight: "900" }}>✓</span> Includes All Maintenance Protocols</li>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)", fontWeight: "900" }}>✓</span> 24/7 Custom Trained AI Receptionist</li>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)", fontWeight: "900" }}>✓</span> Direct Operational Calendar Sync</li>
                  <li style={{ color: "#1E293B", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.75rem" }}><span style={{ color: "var(--accent, #0B2545)", fontWeight: "900" }}>✓</span> Weekly Prompt Logic Calibration</li>
                </ul>
              </div>
              <Link href="/contact" className="btn-light" style={{ display: "block", textAlign: "center", width: "100%", background: "var(--accent, #0B2545)", color: "#FFFFFF" }}>Deploy AI Operations</Link>
            </div>

          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}