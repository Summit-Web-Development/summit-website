"use client";

import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import CTABanner from "../../components/CTABanner";

export default function OurWorkPage() {
  const projects = [
    { industry: "HVAC", title: "Apex Heating & Air", stat: "+140% Lead Volume", desc: "A total architectural redesign focusing on local service area landing pages and a lightning-fast booking funnel. Traffic converted to booked calls increased drastically within 60 days." },
    { industry: "Legal", title: "Miller & Associates", stat: "Page 1 Local Rankings", desc: "A prestigious, high-trust design engineered to establish absolute authority in a crowded legal market. The custom Next.js build completely dominated local search metrics." },
    { industry: "Construction", title: "BuildRight Contractors", stat: "3x Traffic Increase", desc: "A robust portfolio site showcasing massive commercial builds with high-resolution imagery that still loads in under 0.8 seconds, ensuring zero drop-off from mobile users on job sites." },
    { industry: "Landscaping", title: "Elite Landscaping", stat: "Dominating Local Maps", desc: "We aggressively targeted high-income neighborhoods with specific, granular service pages. The resulting organic traffic entirely replaced their reliance on expensive third-party lead aggregators." },
    { industry: "Healthcare", title: "OceanView Dental", stat: "+50 New Patients/mo", desc: "A modern, calming aesthetic combined with a seamless HIPAA-compliant intake form. The new infrastructure established them as the premier boutique practice in their district." },
    { industry: "Plumbing", title: "Pacific Plumbing Pro", stat: "200% ROI in 3 Months", desc: "Emergency service businesses require instant load times. We built a stripped-down, hyper-optimized mobile experience featuring one-touch emergency call routing." }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>Our Portfolio</span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Engineering digital dominance.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              We don&apos;t just build websites; we build scalable digital assets. Review our recent deployments below and see exactly how we engineer growth for service businesses across North America.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-light" style={{ padding: "5rem 0" }}>
        <div className="container">
          <AnimateIn type="fade-up" stagger={150}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "3rem" }}>
              {projects.map((p, i) => (
                <div key={i} className="card-light" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
                  <div style={{ height: "250px", background: "var(--navy-primary)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    {/* Mock overlay for "image" */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, transparent, rgba(6, 14, 26, 0.8))" }}></div>
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "4rem", fontWeight: 900, zIndex: 1, textTransform: "uppercase", letterSpacing: "2px" }}>DEPLOYED</span>
                  </div>
                  <div style={{ padding: "2rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                      <span className="tag" style={{ color: "var(--text-navy)", background: "var(--cream)", border: "1px solid var(--cream-border)" }}>{p.industry}</span>
                      <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: "0.95rem", background: "rgba(79,126,255,0.1)", padding: "0.25rem 0.75rem", borderRadius: "20px" }}>{p.stat}</span>
                    </div>
                    <h3 style={{ color: "var(--text-navy)", fontSize: "1.5rem", marginBottom: "1rem" }}>{p.title}</h3>
                    <p style={{ color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "2rem", flexGrow: 1 }}>{p.desc}</p>
                    <Link href="/contact" style={{ fontWeight: "bold", color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      Request Case Study <span style={{ fontSize: "1.2rem" }}>&rarr;</span>
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
