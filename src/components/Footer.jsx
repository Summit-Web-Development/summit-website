import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import AnimateIn from "./AnimateIn";

const pages = [
  { label: "Services",       href: "/services" },
  { label: "Pricing",        href: "/pricing" },
  { label: "Our Work",       href: "/our-work" },
  { label: "ROI Calculator", href: "/roi-calculator" },
  { label: "Testimonials",   href: "/testimonials" },
  { label: "About Us",       href: "/about" },
  { label: "Timeline",       href: "/timeline" },
  { label: "Blog",           href: "/blog" },
  { label: "Contact",        href: "/contact" },
  { label: "Service Areas",  href: "/service-areas" },
];

const services = [
  { label: "Custom Web Design",   href: "/services#web-design" },
  { label: "Web Development",     href: "/services#web-dev" },
  { label: "SEO & Performance",   href: "/services#seo" },
  { label: "Google & Meta Ads",   href: "/services#ads" },
  { label: "AI Receptionist",     href: "/services#ai" },
  { label: "Ongoing Support",     href: "/services#support" },
];

const freeTools = [
  { label: "ROI Calculator",  href: "/roi-calculator" },
  { label: "Website Grader",  href: "/tools/website-grader" },
  { label: "Cost Estimator",  href: "/tools/cost-estimator" },
  { label: "Colour Palette",  href: "/tools/colour-palette" },
  { label: "SEO Preview",     href: "/tools/seo-preview" },
  { label: "Domain Checker",  href: "/tools/domain-checker" },
];

const areas = [
  { label: "Toronto (HQ)",  href: "/service-areas#toronto" },
  { label: "New York",      href: "/service-areas#new-york" },
  { label: "Los Angeles",   href: "/service-areas#los-angeles" },
  { label: "Chicago",       href: "/service-areas#chicago" },
  { label: "Vancouver",     href: "/service-areas#vancouver" },
  { label: "Miami",         href: "/service-areas#miami" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <AnimateIn type="fade-up" duration={800}>
        <div className={styles.top}>
          <div className="container">
            <div className={styles.grid}>
              {/* Company info */}
              <div className={styles.brand}>
                <div className={styles.logoRow} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                    <Image src="/logo_noname.png" alt="Summit Webcraft Logo" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <span className={styles.logoText}>Summit <span className={styles.logoSub}>Webcraft</span></span>
                </div>
                <p className={styles.tagline}>
                  High-performance websites for service businesses across North America and beyond.
                </p>
                <div className={styles.contactBlock}>
                  <a href="tel:4167007499" className={styles.contactItem}>416-700-7499</a>
                  <a href="mailto:info@summitwebcraft.com" className={styles.contactItem}>info@summitwebcraft.com</a>
                  <span className={styles.contactItem}>Toronto, Ontario</span>
                  <span className={styles.contactItem}>Mon–Fri: 9:00 AM – 6:00 PM EST</span>
                </div>
              </div>

              {/* Pages */}
              <div className={styles.col}>
                <h4 className={styles.colTitle}>Pages</h4>
                {pages.map(p => (
                  <Link key={p.href} href={p.href} className={styles.colLink}>{p.label}</Link>
                ))}
              </div>

              {/* Services */}
              <div className={styles.col}>
                <h4 className={styles.colTitle}>Services</h4>
                {services.map(s => (
                  <Link key={s.href} href={s.href} className={styles.colLink}>{s.label}</Link>
                ))}
              </div>

              {/* Tools + Areas */}
              <div className={styles.col}>
                <h4 className={styles.colTitle}>Free Tools</h4>
                {freeTools.map(t => (
                  <Link key={t.href} href={t.href} className={styles.colLink}>{t.label}</Link>
                ))}
                <Link href="/tools" className={styles.colLinkAccent}>All Tools →</Link>

                <h4 className={`${styles.colTitle} ${styles.colTitleSpaced}`}>Service Areas</h4>
                {areas.map(a => (
                  <Link key={a.href} href={a.href} className={styles.colLink}>{a.label}</Link>
                ))}
                <Link href="/service-areas" className={styles.colLinkAccent}>View All Areas →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className="container">
            <div className={styles.bottomInner}>
              <p className={styles.copyright}>
                © {new Date().getFullYear()} Summit Webcraft. All rights reserved.
              </p>
              <div className={styles.legal}>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </AnimateIn>
    </footer>
  );
}
