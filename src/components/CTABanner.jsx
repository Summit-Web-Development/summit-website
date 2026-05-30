import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="section-darker" style={{ borderTop: "1px solid var(--navy-border)" }}>
      <div className="container">
        <div className="card-dark" style={{ 
          padding: "4rem 2rem", 
          textAlign: "center",
          background: "linear-gradient(135deg, var(--navy-mid) 0%, var(--navy-primary) 100%)",
          border: "1px solid rgba(79, 126, 255, 0.2)",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Subtle glow effect behind */}
          <div style={{
            position: "absolute",
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: "radial-gradient(circle at center, rgba(79,126,255,0.05) 0%, transparent 50%)",
            pointerEvents: "none"
          }} />
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Ready to dominate your local market?</h2>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)", maxWidth: "600px", margin: "0 auto 2.5rem" }}>
              Stop settling for a website that just sits there. Get a high-performance digital asset that actually drives leads and revenue.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contact" className="btn-primary">Get Your Free Quote</Link>
              <Link href="/pricing" className="btn-outline">View Pricing</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
