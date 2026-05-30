import CTABanner from "../../components/CTABanner";
import Link from "next/link";

export default function PricingPage() {
  const tiers = [
    {
      name: "Static Landing Pad",
      price: "$300",
      desc: "Perfect for single-service businesses needing a quick, high-converting digital footprint.",
      features: ["Up to 3 pages", "Contact Form Integration", "Basic SEO Setup", "Mobile Responsive", "Lightning Fast Load Times"],
      highlight: false
    },
    {
      name: "Dynamic Engine",
      price: "$800",
      desc: "For growing businesses that need content management and advanced features.",
      features: ["Up to 10 pages", "CMS Integration (Blog/Portfolio)", "Advanced Local SEO", "Custom Animations", "Analytics Dashboard"],
      highlight: true
    },
    {
      name: "Clean Break",
      price: "$500",
      desc: "One-off custom development for those who want to manage their own hosting.",
      features: ["Custom Codebase", "Full Source Code Handover", "Deployment Instructions", "No Monthly Fees", "1 Month Bug Support"],
      highlight: false
    }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="section-label" style={{ justifyContent: "center" }}>Transparent Pricing</span>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Invest in your digital growth.</h1>
          <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
            No hidden fees. No confusing jargon. Just high-performance websites that deliver a massive return on investment.
          </p>
        </div>
      </div>

      <section className="section-card" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "5rem" }}>
            {tiers.map((tier, i) => (
              <div key={i} className={`card-dark ${tier.highlight ? 'highlight-tier' : ''}`} style={{ 
                padding: "3rem 2rem", 
                display: "flex", 
                flexDirection: "column",
                position: "relative",
                border: tier.highlight ? "2px solid var(--accent)" : undefined,
                transform: tier.highlight ? "translateY(-10px)" : undefined,
                boxShadow: tier.highlight ? "var(--glow)" : undefined
              }}>
                {tier.highlight && (
                  <div style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", background: "var(--accent)", color: "white", padding: "0.25rem 1rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: "bold" }}>
                    MOST POPULAR
                  </div>
                )}
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{tier.name}</h3>
                <div style={{ fontSize: "3rem", fontWeight: 900, color: "var(--text-white)", marginBottom: "1rem" }}>
                  {tier.price} <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: 400 }}>upfront</span>
                </div>
                <p style={{ color: "var(--text-dim)", marginBottom: "2rem", flexGrow: 1 }}>{tier.desc}</p>
                <ul className="check-list" style={{ marginBottom: "2rem" }}>
                  {tier.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <Link href="/contact" className={tier.highlight ? "btn-primary" : "btn-outline"} style={{ width: "100%", justifyContent: "center" }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Monthly Support Matrix</h2>
            <p style={{ color: "var(--text-dim)", maxWidth: "600px", margin: "0 auto" }}>
              Keep your website secure, updated, and growing with our optional support plans.
            </p>
          </div>

          <div className="card-dark" style={{ overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: "1px solid var(--navy-border)", padding: "1.5rem", background: "var(--navy-primary)", fontWeight: "bold", fontSize: "1.1rem" }}>
              <div>Features</div>
              <div style={{ textAlign: "center" }}>Bronze ($50/mo)</div>
              <div style={{ textAlign: "center" }}>Silver ($75/mo)</div>
              <div style={{ textAlign: "center" }}>Gold ($100/mo)</div>
            </div>
            {[
              { f: "Premium Hosting", b: "✓", s: "✓", g: "✓" },
              { f: "SSL Certificate", b: "✓", s: "✓", g: "✓" },
              { f: "Monthly Analytics Report", b: "✓", s: "✓", g: "✓" },
              { f: "Content Updates", b: "1 hr", s: "3 hrs", g: "Unlimited" },
              { f: "Priority Support", b: "-", s: "24h SLA", g: "1h SLA" },
              { f: "Ongoing SEO Optimization", b: "-", s: "-", g: "✓" },
            ].map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", borderBottom: i === 5 ? "none" : "1px solid var(--navy-border)", padding: "1rem 1.5rem" }}>
                <div style={{ color: "var(--text-dim)" }}>{row.f}</div>
                <div style={{ textAlign: "center", color: row.b === "-" ? "var(--text-muted)" : "var(--text-white)", fontWeight: row.b !== "-" ? "bold" : "normal" }}>{row.b}</div>
                <div style={{ textAlign: "center", color: row.s === "-" ? "var(--text-muted)" : "var(--text-white)", fontWeight: row.s !== "-" ? "bold" : "normal" }}>{row.s}</div>
                <div style={{ textAlign: "center", color: row.g === "-" ? "var(--text-muted)" : "var(--text-white)", fontWeight: row.g !== "-" ? "bold" : "normal" }}>{row.g}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
