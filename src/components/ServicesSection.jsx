import Link from "next/link";
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: "web-design",
    icon: "✦",
    title: "Custom Web Design",
    body: "Stunning, conversion-optimized designs tailored to your brand identity. No off-the-shelf templates, just pure bespoke architecture.",
    href: "/services#web-design",
  },
  {
    id: "web-dev",
    icon: "⚡",
    title: "Web Development",
    body: "Blazing-fast, modern React and Next.js architectures built for infinite scale and maximum SEO visibility.",
    href: "/services#web-dev",
  },
  {
    id: "seo",
    icon: "◈",
    title: "SEO & Performance",
    body: "Dominate local search, rank higher on Google, and outpace your competitors with deep technical SEO.",
    href: "/services#seo",
  },
  {
    id: "ads",
    icon: "▲",
    title: "Google & Meta Ads",
    body: "Targeted, data-driven campaigns designed to drive immediate, high-quality leads into your sales pipeline.",
    href: "/services#ads",
  },
  {
    id: "ai",
    icon: "◉",
    title: "AI Receptionist",
    body: "Never miss a lead with a 24/7 AI-powered chat agent that qualifies prospects automatically.",
    href: "/services#ai",
  },
  {
    id: "support",
    icon: "❖",
    title: "Ongoing Support",
    body: "Continuous code updates, security patching, and strategic growth consultations.",
    href: "/services#support",
  },
];

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services-overview" aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">What We Build</span>
          <h2 className={styles.h2} id="services-heading">6 Core Capabilities</h2>
          <p className={styles.sub}>
            Everything your local service business needs to dominate online.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className={styles.card}
              id={`service-card-${s.id}`}
              aria-label={`Learn more about ${s.title}`}
            >
              <div className={styles.cardIcon} aria-hidden="true">{s.icon}</div>
              <h3 className={styles.cardTitle}>
                {s.title}
                <span className={styles.cardArrow}>→</span>
              </h3>
              <p className={styles.cardBody}>{s.body}</p>
            </Link>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/services" className="btn-outline" id="services-view-all">
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
