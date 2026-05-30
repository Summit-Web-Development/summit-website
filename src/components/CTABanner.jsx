import Link from "next/link";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.section} id="cta-banner" aria-labelledby="cta-banner-heading">
      <div className="container">
        <div className={styles.inner}>
          <span className="section-label">Start Your Project</span>
          <h2 className={styles.h2} id="cta-banner-heading">
            Invest in a website that<br />pays for itself
          </h2>
          <p className={styles.sub}>
            Ready to scale your local service infrastructure? Let&apos;s engineer a digital
            presence that drives real revenue.
          </p>
          <Link href="/contact" className={`btn-primary ${styles.btn}`} id="cta-banner-quote">
            Get a Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
