"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import AnimateIn from "./AnimateIn";

const tools = [
  { label: "ROI Calculator",   href: "/roi-calculator" },
  { label: "Website Grader",   href: "/tools/website-grader" },
  { label: "Cost Estimator",   href: "/tools/cost-estimator" },
  { label: "Colour Palette",   href: "/tools/colour-palette" },
  { label: "SEO Preview",      href: "/tools/seo-preview" },
  { label: "Domain Checker",   href: "/tools/domain-checker" },
];

const areas = [
  { label: "Toronto (HQ)", href: "/service-areas#toronto" },
  { label: "New York",     href: "/service-areas#new-york" },
  { label: "Los Angeles",  href: "/service-areas#los-angeles" },
  { label: "Chicago",      href: "/service-areas#chicago" },
  { label: "Vancouver",    href: "/service-areas#vancouver" },
  { label: "Miami",        href: "/service-areas#miami" },
];

export default function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [mobileTools, setMobileTools]   = useState(false);
  const [mobileAreas, setMobileAreas]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const close = () => setMobileOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <AnimateIn type="fade-down" duration={600}>
          <div className={styles.inner}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src="/logo_noname.png" alt="Summit Webcraft Logo" fill style={{ objectFit: 'cover' }} priority />
              </div>
              <span className={styles.logoText}>Summit <span className={styles.logoSub}>Webcraft</span></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
              <Link href="/services" className={styles.navBtn}>
                Services
              </Link>
              <Link href="/pricing"       className={styles.navLink}>Pricing</Link>
              <Link href="/our-work"      className={styles.navLink}>Our Work</Link>
              <Link href="/testimonials"  className={styles.navLink}>Testimonials</Link>
              <Link href="/about"         className={styles.navLink}>About</Link>
              <Link href="/timeline"      className={styles.navLink}>Timeline</Link>

              {/* Free Tools Dropdown */}
              <div className={styles.dropGroup}>
                <button className={styles.navBtn}>
                  Free Tools <span className={styles.chevron}>▾</span>
                </button>
                <div className={styles.dropdown}>
                  <p className={styles.dropLabel}>Free Tools</p>
                  {tools.map(t => (
                    <Link key={t.href} href={t.href} className={styles.dropItem}>
                      {t.label}
                    </Link>
                  ))}
                  <div className={styles.dropDivider} />
                  <Link href="/tools" className={styles.dropAll}>All Tools →</Link>
                </div>
              </div>

              {/* Areas Dropdown */}
              <div className={styles.dropGroup}>
                <button className={styles.navBtn}>
                  Areas <span className={styles.chevron}>▾</span>
                </button>
                <div className={styles.dropdown}>
                  <p className={styles.dropLabel}>Service Areas</p>
                  {areas.map(a => (
                    <Link key={a.href} href={a.href} className={styles.dropItem}>
                      {a.label}
                    </Link>
                  ))}
                  <div className={styles.dropDivider} />
                  <Link href="/service-areas" className={styles.dropAll}>View All Areas →</Link>
                </div>
              </div>

              <Link href="/contact" className={styles.navLink}>Contact</Link>
            </nav>

            <Link href="/contact" className={`${styles.ctaBtn} btn-primary`}>
              Get a Quote
            </Link>

            {/* Hamburger Button */}
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </AnimateIn>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.drawerNav}>
          <Link href="/" className={styles.drawerLink} onClick={close}>Home</Link>
          <Link href="/services" className={styles.drawerLink} onClick={close}>Services</Link>
          <Link href="/pricing"       className={styles.drawerLink} onClick={close}>Pricing</Link>
          <Link href="/our-work"      className={styles.drawerLink} onClick={close}>Our Work</Link>
          <Link href="/testimonials"  className={styles.drawerLink} onClick={close}>Testimonials</Link>
          <Link href="/about"         className={styles.drawerLink} onClick={close}>About</Link>
          <Link href="/timeline"      className={styles.drawerLink} onClick={close}>Timeline</Link>

          {/* Tools Accordion */}
          <div className={styles.drawerAccordion}>
            <button className={styles.drawerAccBtn} onClick={() => setMobileTools(o => !o)}>
              Free Tools <span>{mobileTools ? "▴" : "▾"}</span>
            </button>
            {mobileTools && (
              <div className={styles.drawerSub}>
                {tools.map(t => (
                  <Link key={t.href} href={t.href} className={styles.drawerSubLink} onClick={close}>
                    {t.label}
                  </Link>
                ))}
                <Link href="/tools" className={styles.drawerSubAll} onClick={close}>All Tools →</Link>
              </div>
            )}
          </div>

          {/* Service Areas Accordion */}
          <div className={styles.drawerAccordion}>
            <button className={styles.drawerAccBtn} onClick={() => setMobileAreas(o => !o)}>
              Service Areas <span>{mobileAreas ? "▴" : "▾"}</span>
            </button>
            {mobileAreas && (
              <div className={styles.drawerSub}>
                {areas.map(a => (
                  <Link key={a.href} href={a.href} className={styles.drawerSubLink} onClick={close}>
                    {a.label}
                  </Link>
                ))}
                <Link href="/service-areas" className={styles.drawerSubAll} onClick={close}>View All Areas →</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className={styles.drawerLink} onClick={close}>Contact</Link>
        </nav>
      </div>
    </>
  );
}