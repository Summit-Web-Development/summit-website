import Link from "next/link";
import styles from "./HeroSection.module.css";

const stats = [
  {
    value: "4.9/5",
    label: "Client Rating",
    sub: "Based on verified client reviews",
  },
  {
    value: "50+",
    label: "Websites Built",
    sub: "Across HVAC, legal, construction & more",
  },
  {
    value: "3x",
    label: "Average Lead Increase",
    sub: "Measured 90 days post-launch",
  },
];

export default function HeroSection() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      {/* Background layers */}
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.gridLines} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── LEFT: copy + CTAs ── */}
        <div className={styles.left}>
          <div className={styles.label}>
            <span className={styles.labelDot} />
            Summit Webcraft
          </div>

          <h1 className={styles.h1}>
            High-performance websites<br />
            for <span>service businesses</span>
          </h1>

          <p className={styles.sub}>
            We construct modular, high-contrast, blazing-fast web infrastructure. No generic
            templates—just layouts engineered for elite performance, native SEO visibility,
            and seamless customer pipelines.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/pricing" className="btn-primary" id="hero-cta-pricing">
              View Pricing
            </Link>
            <Link href="/our-work" className="btn-outline" id="hero-cta-work">
              See Our Work
            </Link>
          </div>
        </div>

        {/* ── RIGHT: stats stacked ── */}
        <div className={styles.right}>
          {stats.map((s) => (
            <div key={s.value} className={styles.statBox}>
              <span className={styles.statValue}>{s.value}</span>
              <div className={styles.statMeta}>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statSub}>{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
