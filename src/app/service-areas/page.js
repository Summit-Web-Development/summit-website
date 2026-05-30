"use client";

import dynamic from "next/dynamic";
import AnimateIn from "../../components/AnimateIn";
import CTABanner from "../../components/CTABanner";

// Dynamically import the map to avoid SSR issues with window object
const ProjectMap = dynamic(() => import("../../components/ProjectMap"), {
  ssr: false,
  loading: () => <div style={{ height: "500px", background: "var(--navy-mid)", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", border: "1px solid var(--navy-border)" }}>Loading Interactive Map...</div>
});

export default function ServiceAreasPage() {
  const areas = [
    { city: "Toronto (HQ)", desc: "Our flagship location, providing world-class digital infrastructure to local and enterprise service businesses." },
    { city: "New York", desc: "Dominating the most competitive local markets with aggressive SEO and high-conversion architectures." },
    { city: "Los Angeles", desc: "Crafting visually stunning, lightning-fast experiences for California's elite service providers." },
    { city: "Chicago", desc: "Building robust, lead-generating engines for the Midwest's hardest working contractors and agencies." },
    { city: "Vancouver", desc: "Expanding digital footprints across the Pacific Northwest with precision-engineered web development." },
    { city: "Miami", desc: "Scaling aggressive growth campaigns for rapid-expansion service businesses in the South." }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>North American Coverage</span>
            <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Local dominance, national scale.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              While our headquarters is securely located in Toronto, we architect, deploy, and scale digital assets for high-performing service businesses across all major North American markets.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-card" style={{ padding: "4rem 0" }}>
        <div className="container">
          <AnimateIn type="fade-up" delay={200}>
            <div style={{ marginBottom: "5rem" }}>
              <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Active Deployments</h2>
                <p style={{ color: "var(--text-dim)", maxWidth: "700px", margin: "0 auto" }}>
                  Explore our live project map below. We continuously deploy new architectures, updating this index as our client base expands across new territories.
                </p>
              </div>
              <ProjectMap />
            </div>
          </AnimateIn>

          <AnimateIn type="fade-up">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2.5rem" }}>Core Service Hubs</h2>
            </div>
          </AnimateIn>
          
          <AnimateIn type="fade-up" stagger={150}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {areas.map((area, i) => (
                <div key={i} className="card-dark" style={{ padding: "2.5rem" }}>
                  <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--accent-bright)" }}>{area.city}</h3>
                  <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{area.desc}</p>
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
