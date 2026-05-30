"use client";

import AnimateIn from "../../components/AnimateIn";
import CTABanner from "../../components/CTABanner";

export default function TimelinePage() {
  const timelineSteps = [
    {
      week: "Week 1",
      title: "Discovery & Architecture Blueprint",
      desc: "We don't guess; we gather data. We start by analyzing your local market, dissecting your top competitors, and identifying high-volume search keywords. We then draft a comprehensive architectural blueprint detailing the exact page structure, database schemas (if applicable), and conversion funnels needed to dominate your industry."
    },
    {
      week: "Week 2",
      title: "UI/UX Design & High-Fidelity Mockups",
      desc: "Our design team translates the blueprint into stunning, high-contrast visual mockups. We establish your digital brand identity, focusing heavily on typography, color theory, and psychological triggers designed specifically to convert casual browsers into paying clients. You review and approve the exact look before any code is written."
    },
    {
      week: "Week 3",
      title: "Next.js Engineering & Development",
      desc: "This is where the heavy lifting happens. We build your site from the ground up using React and Next.js. We don't use bloated templates or drag-and-drop builders. Every line of code is meticulously written for absolute maximum speed, ensuring your site achieves perfect Core Web Vitals scores."
    },
    {
      week: "Week 4",
      title: "Content Integration & Technical SEO",
      desc: "We inject aggressive, keyword-rich copywriting into the new architecture. Simultaneously, our SEO team configures all meta tags, schema markup, Open Graph data, and internal linking structures. We ensure Google's crawlers can read, index, and prioritize your site instantly."
    },
    {
      week: "Week 5",
      title: "Quality Assurance & Edge Deployment",
      desc: "We rigorously test your site across all devices, browsers, and network speeds. We run simulated stress tests and verify all API endpoints and contact forms. Once cleared, we deploy your site to a global edge network, ensuring sub-second load times for users anywhere in the world. Your new lead generation engine is now live."
    }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>Deployment Timeline</span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>From blueprint to live engine in 5 weeks.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              We operate with military precision. Complete transparency. No missed deadlines. Here is the exact timeline you can expect when partnering with Summit Webcraft.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-card" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
            {/* Vertical Line */}
            <div style={{ position: "absolute", left: "20px", top: "0", bottom: "0", width: "2px", background: "var(--navy-border-strong)" }}></div>
            
            <AnimateIn type="fade-up" stagger={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {timelineSteps.map((step, i) => (
                  <div key={i} style={{ position: "relative", paddingLeft: "60px" }}>
                    {/* Timeline Node */}
                    <div style={{ position: "absolute", left: "10px", top: "5px", width: "22px", height: "22px", borderRadius: "50%", background: "var(--accent)", border: "4px solid var(--navy-mid)", zIndex: 2 }}></div>
                    
                    <div className="card-dark" style={{ padding: "2.5rem" }}>
                      <span style={{ display: "inline-block", background: "rgba(79,126,255,0.1)", color: "var(--accent-bright)", padding: "0.25rem 0.75rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "bold", marginBottom: "1rem" }}>
                        {step.week}
                      </span>
                      <h3 style={{ fontSize: "1.5rem", color: "var(--text-white)", marginBottom: "1rem" }}>{step.title}</h3>
                      <p style={{ color: "var(--text-dim)", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <AnimateIn type="fade-up">
        <CTABanner />
      </AnimateIn>
    </>
  );
}
