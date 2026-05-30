"use client";

import AnimateIn from "../../components/AnimateIn";
import CTABanner from "../../components/CTABanner";

export default function AboutPage() {
  const team = [
    {
      name: "Your Name",
      role: "Founder & Lead Architect",
      bio: "With over a decade of experience architecting high-performance digital infrastructure, I founded Summit Webcraft to provide local service businesses with the same elite web technology previously reserved for enterprise tech companies. My focus is entirely on speed, architecture, and massive ROI."
    },
    {
      name: "Marcus Sterling",
      role: "Head of SEO & Growth",
      bio: "Marcus brings a ruthless, data-driven approach to search engine dominance. He doesn't just guess at algorithms; he reverse-engineers them to ensure our clients capture the absolute majority of local search volume."
    },
    {
      name: "Elena Rostova",
      role: "Senior UI/UX Designer",
      bio: "Elena specializes in conversion-centric design. Every pixel she places is meticulously calculated using psychological principles to guide visitors seamlessly from landing page to lead submission."
    }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>About Us</span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Engineered for absolute market dominance.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              We aren&apos;t just web developers. We are digital architects building the infrastructure that powers the most aggressive service businesses in North America.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-card" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <AnimateIn type="fade-right">
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>The Death of the Template</h2>
                <p style={{ color: "var(--text-dim)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
                  Most web agencies are frauds. They take cheap, bloated WordPress templates, slap your logo on them, and charge you thousands. The result? A slow, insecure website that leaks leads to your competitors and gets buried on page 5 of Google.
                </p>
                <p style={{ color: "var(--text-dim)", lineHeight: 1.8 }}>
                  At Summit Webcraft, we reject this entirely. We write custom code. We build robust, lightning-fast Next.js architectures deployed directly to global edge networks. We don&apos;t build digital brochures; we engineer highly calibrated lead generation engines that run 24/7.
                </p>
              </AnimateIn>
            </div>
            <div style={{ position: "relative" }}>
              <AnimateIn type="fade-left">
                <div style={{ background: "var(--navy-primary)", padding: "3rem", borderRadius: "12px", border: "1px solid var(--navy-border)", boxShadow: "var(--shadow-lg)" }}>
                  <h3 style={{ color: "var(--text-white)", marginBottom: "1rem", fontSize: "1.5rem" }}>Our Core Mandates</h3>
                  <ul className="check-list">
                    <li>Zero templates, absolute custom architecture.</li>
                    <li>Sub-second page load times across all devices.</li>
                    <li>Aggressive, data-backed local SEO strategies.</li>
                    <li>Radical transparency in pricing and deployment timelines.</li>
                  </ul>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: "5rem 0" }}>
        <div className="container">
          <AnimateIn type="fade-up">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="section-label" style={{ justifyContent: "center" }}>Our Leadership</span>
              <h2 style={{ fontSize: "2.5rem" }}>The Architects</h2>
            </div>
          </AnimateIn>

          <AnimateIn type="fade-up" stagger={200}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2.5rem" }}>
              {team.map((member, i) => (
                <div key={i} className="card-dark" style={{ overflow: "hidden" }}>
                  <div style={{ background: "var(--navy-primary)", height: "250px", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--navy-border)" }}>
                    {/* Placeholder for team image */}
                    <div style={{ width: "120px", height: "120px", borderRadius: "50%", background: "var(--navy-mid)", border: "2px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", color: "var(--text-muted)", fontWeight: "bold" }}>
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "0.25rem", color: "var(--text-white)" }}>{member.name}</h3>
                    <p style={{ color: "var(--accent-bright)", fontWeight: "bold", fontSize: "0.9rem", marginBottom: "1.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>{member.role}</p>
                    <p style={{ color: "var(--text-dim)", lineHeight: 1.6, margin: 0 }}>{member.bio}</p>
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
