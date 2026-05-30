"use client";

import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";
import CTABanner from "../../components/CTABanner";

export default function BlogPage() {
  const posts = [
    {
      title: "Why WordPress is Killing Your Local SEO Rankings",
      date: "October 12, 2026",
      category: "Performance",
      excerpt: "If your service business relies on a bloated, template-driven CMS, you are bleeding leads. We break down exactly why modern search algorithms penalize slow architectures and how migrating to a React-based infrastructure can immediately boost your organic visibility."
    },
    {
      title: "The Psychological Triggers That Turn Traffic Into Booked Calls",
      date: "September 28, 2026",
      category: "Conversion Rate Optimization",
      excerpt: "Traffic is useless if it doesn't convert. Discover the exact color theories, typography choices, and layout structures we use to command authority and force visitors into your sales pipeline without them even realizing it."
    },
    {
      title: "Dominating Google Maps: The Ultimate Blueprint for Service Providers",
      date: "September 15, 2026",
      category: "Local SEO",
      excerpt: "Ranking in the Google Maps 'Local Pack' is the single most lucrative digital asset a local service business can own. We share our proprietary methods for optimizing your Google Business Profile and building high-trust local citations."
    }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>Insights & Strategy</span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>The Architecture Blog.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              No fluff. No generic advice. Just hard data, technical breakdowns, and aggressive growth strategies from the engineers at Summit Webcraft.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-card" style={{ padding: "5rem 0" }}>
        <div className="container">
          <AnimateIn type="fade-up" stagger={150}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", maxWidth: "900px", margin: "0 auto" }}>
              {posts.map((post, i) => (
                <div key={i} className="card-dark" style={{ padding: "3rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="tag" style={{ color: "var(--accent-bright)", background: "rgba(79,126,255,0.1)", border: "none" }}>{post.category}</span>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{post.date}</span>
                  </div>
                  <h2 style={{ fontSize: "2rem", color: "var(--text-white)", lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ color: "var(--text-dim)", lineHeight: 1.8, fontSize: "1.05rem" }}>{post.excerpt}</p>
                  <div style={{ marginTop: "1rem" }}>
                    <Link href="#" style={{ color: "var(--accent)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      Read Intel Report <span>&rarr;</span>
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
