"use client";

import AnimateIn from "../../components/AnimateIn";
import CTABanner from "../../components/CTABanner";

export default function TestimonialsPage() {
  const testimonials = [
    { name: "John Davis", biz: "Davis Plumbing", quote: "Summit completely transformed our online presence. Our phones are ringing twice as much. The custom design and speed optimizations truly made a difference in our local market.", result: "+200% Organic Traffic" },
    { name: "Sarah Jenkins", biz: "Jenkins Law", quote: "Professional, incredibly fast, and exactly what we needed to establish authority. The ROI has been absolutely incredible, we recouped our investment in the first month.", result: "Dominant Local Rankings" },
    { name: "Mike Thompson", biz: "Elite Landscaping", quote: "Finally, a web agency that actually understands local service businesses. They didn't just build a site; they built a lead generation machine for us.", result: "5x Lead Conversion Rate" },
    { name: "David Chen", biz: "Apex Heating & Air", quote: "Before Summit, we were wasting thousands on bad ads and a slow site. Now, our Next.js platform runs so fast that clients book us before checking competitors. Absolute game changer.", result: "Reduced CPA by 45%" },
    { name: "Lisa Morgan", biz: "Morgan Construction Group", quote: "Their timeline was strictly adhered to. No delays, no excuses. The final product was a stunning, robust digital portfolio that instantly elevated our brand perception.", result: "Secured $2M+ Contracts" },
    { name: "Robert Fischer", biz: "OceanView Dental", quote: "The AI receptionist they integrated has been a revelation. We are booking appointments at 3 AM. The technical execution from Summit Webcraft is simply unmatched.", result: "24/7 Automated Booking" }
  ];

  return (
    <>
      <div className="page-hero section-dark">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <AnimateIn type="fade-up" duration={800}>
            <span className="section-label" style={{ justifyContent: "center" }}>Client Success</span>
            <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>Verified results from serious business owners.</h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-dim)" }}>
              Don&apos;t just take our word for it. Read how our digital architectures have fundamentally transformed service businesses across North America.
            </p>
          </AnimateIn>
        </div>
      </div>

      <section className="section-card" style={{ padding: "5rem 0" }}>
        <div className="container">
          <AnimateIn type="fade-up" stagger={150}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
              {testimonials.map((t, i) => (
                <div key={i} className="card-dark" style={{ padding: "3rem", display: "flex", flexDirection: "column" }}>
                  <div style={{ color: "#FFD700", marginBottom: "1.5rem", fontSize: "1.2rem", letterSpacing: "2px" }}>★★★★★</div>
                  <p style={{ fontStyle: "italic", color: "var(--text-dim)", marginBottom: "2rem", fontSize: "1.05rem", lineHeight: 1.7, flexGrow: 1 }}>&quot;{t.quote}&quot;</p>
                  <div style={{ borderTop: "1px solid var(--navy-border)", paddingTop: "1.5rem" }}>
                    <strong style={{ display: "block", color: "var(--text-white)", fontSize: "1.1rem" }}>{t.name}</strong>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>{t.biz}</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--accent-bright)", fontWeight: "bold", background: "rgba(79,126,255,0.1)", padding: "0.2rem 0.6rem", borderRadius: "4px" }}>{t.result}</span>
                    </div>
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
