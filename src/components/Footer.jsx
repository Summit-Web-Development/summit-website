import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const services = [
  { label: "Custom Web Design", href: "/services#web-design" },
  { label: "Web Development",   href: "/services#web-dev" },
  { label: "SEO & Performance", href: "/services#seo" },
  { label: "Google & Meta Ads", href: "/services#ads" },
  { label: "AI Receptionist",   href: "/services#ai" },
  { label: "Ongoing Support",   href: "/services#support" },
];

const company = [
  { label: "Services",  href: "/services" },
  { label: "Pricing",   href: "/pricing" },
  { label: "Our Work",  href: "/our-work" },
  { label: "About Us",  href: "/about" },
  { label: "Contact",   href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.logoRow}>
                <div className={styles.logoImg}>
                  <Image
                    src="/logo_noname.png"
                    alt="Summit Webcraft Logo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span className={styles.logoText}>
                  Summit <span className={styles.logoSub}>Webcraft</span>
                </span>
              </div>
              <p className={styles.tagline}>
                High-performance websites for service businesses across North America and beyond.
              </p>
              <div className={styles.contactBlock}>
                <a href="tel:4167007499" className={styles.contactItem}>416-700-7499</a>
                <a href="mailto:summitdev.contact@gmail.com" className={styles.contactItem}>summitdev.contact@gmail.com</a>
                <span className={styles.contactItem}>Mississauga, Ontario</span>
                <span className={styles.contactItem}>24/7 Support</span>
              </div>
            </div>

            {/* Services */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Services</h4>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className={styles.colLink}>{s.label}</Link>
              ))}
            </div>

            {/* Company */}
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Company</h4>
              {company.map((c) => (
                <Link key={c.href} href={c.href} className={styles.colLink}>{c.label}</Link>
              ))}
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
    </footer>
  );
}
