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
      desc: "We do not use drag-and-drop builders. We do not use pre-purchased templates. Every pixel is custom-architected based on deep psychological principles and conversion rate optimization (CRO) strategies. We build sites that instantly establish absolute authority, ensuring that when a potential client lands on your page, they immediately recognize you as the premium option in your industry.",
      features: ["Custom UI/UX Architecture", "Mobile-First Responsive Design", "Conversion Rate Optimization (CRO)", "High-Fidelity Wireframing"]
    },
    {
      id: "web-dev",
      title: "High-Performance Web Development",
      tagline: "Lightning-fast Next.js infrastructures deployed to global edge networks.",
      desc: "A beautiful design is worthless if it takes 5 seconds to load. We engineer your website using React and Next.js—the exact same technology stack used by enterprise giants like Netflix and TikTok. This ensures a sub-second load time, which drastically reduces bounce rates, vastly improves user experience, and forces Google to rank you higher.",
      features: ["React & Next.js Frameworks", "Global Edge Deployment", "Sub-Second Load Times", "Impenetrable Security"]
    },
    {
      id: "seo",
      title: "Technical SEO & Performance",
      tagline: "Aggressive search engine strategies to systematically outrank your competitors.",
      desc: "SEO isn't just about stuffing keywords into blog posts. True SEO starts at the code level. We structure your site's HTML, metadata, schema markup, and internal linking perfectly from day one. We ensure your business completely saturates local search results, driving massive volumes of organic, high-intent traffic directly to your contact forms.",
      features: ["Code-Level SEO Optimization", "Local Maps Dominance", "Schema Markup Integration", "Automated Site Audits"]
    },
    {
      id: "ads",
      title: "Google & Meta Ads Management",
      tagline: "Precision-targeted campaigns designed for immediate lead generation.",
      desc: "Stop burning money on poorly managed ad campaigns. We build ruthless, data-driven advertising engines across Google Search, Facebook, and Instagram. By combining our high-converting landing pages with perfectly targeted ad copy, we drastically lower your Cost Per Acquisition (CPA) and maximize your Return on Ad Spend (ROAS).",
      features: ["Google Search & Display", "Facebook & Instagram Retargeting", "Custom Landing Pages", "Continuous A/B Testing"]
    },
    {
      id: "ai",
      title: "AI Receptionist Integration",
      tagline: "Never miss a lead again with 24/7 automated qualification.",
      desc: "If a user visits your site at 2:00 AM and has a question, you can't afford to let them leave to a competitor. We integrate highly sophisticated, custom-trained AI chatbots that engage visitors, answer complex service questions, and automatically qualify and book leads directly into your calendar—completely hands-free.",
      features: ["24/7 Lead Qualification", "Custom Knowledge Base Training", "Direct Calendar Integration", "Human-Handoff Capabilities"]
    },
    {
      id: "support",
      title: "Ongoing Support & Growth",
      tagline: "A dedicated engineering team constantly optimizing your digital asset.",
      desc: "We don't just launch a site and disappear. Digital dominance requires constant calibration. Our ongoing support plans ensure your infrastructure remains perfectly secure, your software is up-to-date, and your content accurately reflects your growing business. You focus on running your business; we handle the technical execution.",
      features: ["24/7 Uptime Monitoring", "Security Patching & Updates", "Monthly Strategy Calls", "Unlimited Minor Content Updates"]
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
          <AnimateIn type="fade-up" stagger={150}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
              {services.map((s, i) => (
                <div id={s.id} key={i} className="card-light" style={{ padding: "3rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", scrollMarginTop: "100px" }}>
                  <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                    <h2 style={{ color: "var(--text-navy)", fontSize: "2rem", marginBottom: "1rem" }}>{s.title}</h2>
                    <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1.5rem" }}>{s.tagline}</p>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>{s.desc}</p>
                    <Link href="/contact" className="btn-light">Discuss this service</Link>
                  </div>
                  <div style={{ order: i % 2 === 0 ? 2 : 1, background: "var(--navy-mid)", padding: "2.5rem", borderRadius: "12px", border: "1px solid var(--navy-border)" }}>
                    <h3 style={{ color: "var(--text-white)", marginBottom: "1.5rem", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Core Features</h3>
                    <ul className="check-list">
                      {s.features.map((f, j) => (
                        <li key={j} style={{ color: "var(--text-dim)", fontSize: "1.05rem" }}>{f}</li>
                      ))}
                    </ul>
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
