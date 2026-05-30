import styles from "./WhyUsSection.module.css";

export default function WhyUsSection() {
  return (
    <section className={styles.section} id="why-us" aria-labelledby="why-us-heading">
      <div className="container">
        <div className={styles.inner}>
          <span className="section-label">Why Summit Webcraft</span>
          <h2 className={styles.h2} id="why-us-heading">
            Stop losing leads to <span>outdated websites.</span>
          </h2>
          <p className={styles.body}>
            A generic template won&apos;t cut it anymore. Most local business websites are built
            on slow, bloated software that leaks leads and tanks on Google. We hand-code
            blazing-fast Next.js infrastructure engineered to dominate your local market
            and keep your phones ringing.
          </p>
        </div>
      </div>
    </section>
  );
}
