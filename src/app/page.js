import Link from "next/link";
import CTABanner from "../components/CTABanner";
import AnimateIn from "../components/AnimateIn";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section-darker page-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <AnimateIn type="fade-up" duration={800} delay={100}>
            <span className="section-label" style={{ justifyContent: "center" }}>
              Summit Webcraft
            </span>
          </AnimateIn>
          
          <AnimateIn type="fade-up" duration={800} delay={300}>
            <h1 style={{ fontSize: "3.5rem", maxWidth: "800px", margin: "0 auto 1.5rem" }}>
              High-performance websites for <span style={{ color: "var(--accent-bright)" }}>service businesses</span>
            </h1>
          </AnimateIn>

          <AnimateIn type="fade-up" duration={800} delay={500}>
            <p style={{ fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 2.5rem", color: "var(--text-dim)" }}>
              We construct modular, high-contrast, blazing-fast web infrastructure for businesses across North America. By rejecting generic templates, our layouts ensure elite performance, native SEO visibility, and seamless customer pipelines.
            </p>
          </AnimateIn>

          <AnimateIn type="fade-up" duration={800} delay={700}>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginBottom: "4rem" }}>
              <Link href="/pricing" className="btn-primary">View Pricing</Link>
              <Link href="/our-work" className="btn-outline">See Our Work</Link>
            </div>
          </AnimateIn>

          {/* STAT BAR */}
          <AnimateIn type="fade-up" duration={1000} delay={900}>
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
          </AnimateIn>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="section-card">
        <div className="container">
          <AnimateIn type="fade-up">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="section-label" style={{ justifyContent: "center" }}>Our Services</span>
              <h2>Everything you need to grow online</h2>
            </div>
          </AnimateIn>

          <AnimateIn type="fade-up" stagger={150}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {[
                { title: "Custom Web Design", desc: "Stunning, conversion-optimized designs tailored to your brand identity. No off-the-shelf templates, just pure bespoke architecture." },
                { title: "Web Development", desc: "Blazing-fast, modern React and Next.js architectures built for infinite scale and maximum SEO visibility." },
                { title: "SEO & Performance", desc: "Dominate local search, rank higher on Google, and outpace your competitors with deep technical SEO." },
                { title: "Google & Meta Ads", desc: "Targeted, data-driven campaigns designed to drive immediate, high-quality leads into your sales pipeline." },
                { title: "AI Receptionist", desc: "Never miss a lead with a 24/7 AI-powered chat agent that qualifies prospects automatically." },
                { title: "Ongoing Support", desc: "Continuous code updates, security patching, and strategic growth consultations." }
              ].map((s, i) => (
                <Link href={`/services#${s.title.toLowerCase().replace(/\s+/g, '-')}`} key={i} className="card-dark" style={{ padding: "2rem", display: "block" }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--accent-bright)" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", margin: 0 }}>{s.desc}</p>
                </Link>
              ))}
            </div>
          </AnimateIn>

          <AnimateIn type="fade-up" delay={400}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/services" className="btn-outline">View All Services →</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* WHY SUMMIT */}
      <section className="section-dark">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <AnimateIn type="fade-right" duration={800}>
                <div className="card-dark" style={{ padding: "1.5rem" }}>
                  <h4 style={{ color: "var(--accent-bright)", marginBottom: "0.5rem" }}>01. Built for Speed</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>We ditch slow builders like WordPress. Our sites load instantly using edge network deployment, improving SEO and drastically reducing bounce rates.</p>
                </div>
              </AnimateIn>
              <AnimateIn type="fade-right" duration={800} delay={200}>
                <div className="card-dark" style={{ padding: "1.5rem", transform: "translateX(2rem)" }}>
                  <h4 style={{ color: "var(--accent-bright)", marginBottom: "0.5rem" }}>02. Conversion First</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Every element, from the hero banner to the footer, is strategically placed using psychological principles to turn casual visitors into paying clients.</p>
                </div>
              </AnimateIn>
            </div>
            <div>
              <AnimateIn type="fade-left" duration={800}>
                <span className="section-label">Why Choose Us</span>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Stop losing leads to outdated websites.</h2>
                <p style={{ color: "var(--text-dim)", marginBottom: "2rem" }}>
                  A generic template won&apos;t cut it anymore. You need a digital presence that establishes immediate trust and absolute authority in your local market. 
                </p>
                <ul className="check-list" style={{ marginBottom: "2rem" }}>
                  <li>Custom architectures, no cheap drag-and-drop templates</li>
                  <li>Lightning-fast Core Web Vitals performance scores</li>
                  <li>Fully optimized for aggressive local SEO scaling</li>
                  <li>Clear, compelling calls-to-action that drive revenue</li>
                </ul>
                <Link href="/about" className="btn-primary">Learn About Our Approach</Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section-light">
        <div className="container">
          <AnimateIn type="fade-up">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
              <div>
                <span className="section-label section-label-light">Our Work</span>
                <h2 style={{ color: "var(--text-navy)" }}>Recent success stories</h2>
              </div>
              <Link href="/our-work" className="btn-light">View Full Portfolio</Link>
            </div>
          </AnimateIn>

          <AnimateIn type="fade-up" stagger={200}>
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
                    <span className="tag" style={{ marginBottom: "1rem", color: "var(--text-navy)" }}>{p.industry}</span>
                    <h3 style={{ color: "var(--text-navy)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>{p.title}</h3>
                    <p style={{ color: "var(--accent)", fontWeight: 700, fontSize: "0.95rem" }}>{p.stat}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* TESTIMONIALS STRIP */}
      <section className="section-darker">
        <div className="container">
          <AnimateIn type="fade-up">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "2rem" }}>What our clients are saying</h2>
            </div>
          </AnimateIn>

          <AnimateIn type="fade-up" stagger={150}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
              {[
                { name: "John Davis", biz: "Davis Plumbing", quote: "Summit completely transformed our online presence. Our phones are ringing twice as much. The custom design and speed optimizations truly made a difference in our local market." },
                { name: "Sarah Jenkins", biz: "Jenkins Law", quote: "Professional, incredibly fast, and exactly what we needed to establish authority. The ROI has been absolutely incredible, we recouped our investment in the first month." },
                { name: "Mike Thompson", biz: "Elite Landscaping", quote: "Finally, a web agency that actually understands local service businesses. They didn't just build a site; they built a lead generation machine for us." }
              ].map((t, i) => (
                <div key={i} className="card-dark" style={{ padding: "2rem" }}>
                  <p style={{ fontStyle: "italic", color: "var(--text-dim)", marginBottom: "1.5rem" }}>&quot;{t.quote}&quot;</p>
                  <div style={{ borderTop: "1px solid var(--navy-border)", paddingTop: "1rem" }}>
                    <strong style={{ display: "block", color: "var(--text-white)" }}>{t.name}</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{t.biz}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ROI TEASER */}
      <section className="section-card">
        <AnimateIn type="fade-up">
          <div className="container" style={{ textAlign: "center" }}>
            <span className="section-label" style={{ justifyContent: "center" }}>Transparent Pricing</span>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Invest in a website that pays for itself</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
              We offer clear, upfront pricing with absolutely no hidden fees. Whether you want a clean break or a dynamic, ongoing partnership, we have an infrastructure plan engineered for you.
            </p>
            <Link href="/pricing" className="btn-primary">View Pricing Plans</Link>
          </div>
        </AnimateIn>
      </section>

      <AnimateIn type="fade-up" delay={200}>
        <CTABanner />
      </AnimateIn>
    </>
  );
}
