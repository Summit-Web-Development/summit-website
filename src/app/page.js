import Link from "next/link";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section-darker page-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            <span style={{ fontSize: "1.2rem" }}>🏔️</span> Summit Webcraft
          </span>
          <h1 style={{ fontSize: "3.5rem", maxWidth: "800px", margin: "0 auto 1.5rem" }}>
            High-performance websites for <span style={{ color: "var(--accent-bright)" }}>service businesses</span>
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2.5rem", color: "var(--text-dim)" }}>
            We build blazing-fast, lead-generating websites for service businesses across North America. Get more clients with a website that actually works.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "4rem" }}>
            <Link href="/pricing" className="btn-primary">View Pricing</Link>
            <Link href="/our-work" className="btn-outline">See Our Work</Link>
          </div>

          {/* STAT BAR */}
          <div className="stat-bar" style={{ justifyContent: "center", textAlign: "left" }}>
            <div className="stat-item">
              <strong>50+</strong>
              <span>Websites Built</span>
            </div>
            <div className="stat-item">
              <strong>3x</strong>
              <span>Average Lead Increase</span>
            </div>
            <div className="stat-item">
              <strong>4.9/5</strong>
              <span>Client Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-card">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Our Services</span>
            <h2>Everything you need to grow online</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Custom Web Design", icon: "🎨", desc: "Stunning, conversion-optimized designs tailored to your brand." },
              { title: "Web Development", icon: "💻", desc: "Blazing-fast, modern architectures built for scale." },
              { title: "SEO & Performance", icon: "🔍", desc: "Dominate local search and rank higher on Google." },
              { title: "Google & Meta Ads", icon: "📣", desc: "Targeted campaigns to drive immediate, high-quality leads." },
              { title: "AI Receptionist", icon: "🤖", desc: "Never miss a lead with a 24/7 AI-powered chat agent." },
              { title: "Ongoing Support", icon: "📈", desc: "Continuous updates, security, and strategic growth." }
            ].map((s, i) => (
              <Link href={`/services#${s.title.toLowerCase().replace(/\s+/g, '-')}`} key={i} className="card-dark" style={{ padding: "2rem", display: "block" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{s.title}</h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>{s.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" className="btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* WHY SUMMIT */}
      <section className="section-dark">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="card-dark" style={{ padding: "1.5rem" }}>
                <h4 style={{ color: "var(--accent-bright)", marginBottom: "0.5rem" }}>01. Built for Speed</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>We ditch slow builders. Our sites load instantly, improving SEO and reducing bounce rates.</p>
              </div>
              <div className="card-dark" style={{ padding: "1.5rem", transform: "translateX(2rem)" }}>
                <h4 style={{ color: "var(--accent-bright)", marginBottom: "0.5rem" }}>02. Conversion First</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Every element is strategically placed to turn visitors into paying clients.</p>
              </div>
            </div>
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Stop losing leads to outdated websites.</h2>
              <p style={{ color: "var(--text-dim)", marginBottom: "2rem" }}>
                A generic template won&apos;t cut it anymore. You need a digital presence that establishes immediate trust and authority in your local market.
              </p>
              <ul className="check-list" style={{ marginBottom: "2rem" }}>
                <li>Custom designs, no cheap templates</li>
                <li>Lightning-fast performance scores</li>
                <li>Fully optimized for local SEO</li>
                <li>Clear, compelling calls-to-action</li>
              </ul>
              <Link href="/about" className="btn-primary">Learn About Our Approach</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section-light">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <span className="section-label section-label-light">Our Work</span>
              <h2 style={{ color: "var(--text-navy)" }}>Recent success stories</h2>
            </div>
            <Link href="/our-work" className="btn-light">View Full Portfolio</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { industry: "HVAC", title: "Apex Heating & Air", stat: "+140% Lead Volume" },
              { industry: "Legal", title: "Miller & Associates", stat: "Page 1 Local Rankings" },
              { industry: "Construction", title: "BuildRight Contractors", stat: "3x Traffic Increase" }
            ].map((p, i) => (
              <Link href="/our-work" key={i} className="card-light" style={{ overflow: "hidden", display: "block" }}>
                <div style={{ height: "200px", background: "var(--navy-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "3rem", fontWeight: 800 }}>PROJECT</span>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span className="tag" style={{ marginBottom: "1rem" }}>{p.industry}</span>
                  <h3 style={{ color: "var(--text-navy)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.95rem" }}>{p.stat}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS STRIP */}
      <section className="section-darker">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem" }}>What our clients are saying</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {[
              { name: "John Davis", biz: "Davis Plumbing", quote: "Summit completely transformed our online presence. Our phones are ringing twice as much." },
              { name: "Sarah Jenkins", biz: "Jenkins Law", quote: "Professional, fast, and exactly what we needed. The ROI has been incredible." },
              { name: "Mike Thompson", biz: "Elite Landscaping", quote: "Finally, a web agency that actually understands local service businesses." }
            ].map((t, i) => (
              <div key={i} className="card-dark" style={{ padding: "2rem" }}>
                <div style={{ color: "#FFD700", marginBottom: "1rem" }}>★★★★★</div>
                <p style={{ fontStyle: "italic", color: "var(--text-dim)", marginBottom: "1.5rem" }}>&quot;{t.quote}&quot;</p>
                <div>
                  <strong style={{ display: "block", color: "var(--text-white)" }}>{t.name}</strong>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{t.biz}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI TEASER */}
      <section className="section-card">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>Transparent Pricing</span>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Invest in a website that pays for itself</h2>
          <p style={{ fontSize: "1.1rem", color: "var(--text-dim)", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            We offer clear, upfront pricing with no hidden fees. Whether you want a clean break or a dynamic partnership, we have a plan for you.
          </p>
          <Link href="/pricing" className="btn-primary">View Pricing Plans</Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
