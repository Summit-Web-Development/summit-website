"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import AnimateIn from "./AnimateIn";

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
          <div className={styles.inner} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* Logo */}
            <Link href="/" className={styles.logo} onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image src="/logo_noname.png" alt="Summit Webcraft Logo" fill style={{ objectFit: 'cover' }} priority />
              </div>
              <span className={styles.logoText}>Summit <span className={styles.logoSub}>Webcraft</span></span>
            </Link>

            {/* Desktop Navigation - Centered Layout Engine */}
            <nav className={styles.desktopNav} style={{ display: "flex", alignItems: "center", gap: "1.5rem", height: "100%" }}>
              <Link href="/services" className={styles.navBtn} style={{ display: "inline-flex", alignItems: "center", height: "100%" }}>
                Services
              </Link>
              
              {/* Core Links Flat Baseline Grouping */}
              <div style={{ display: "inline-flex", alignItems: "center", gap: "1.5rem" }}>
                <Link href="/pricing"       className={styles.navLink} style={{ display: "inline-flex", alignItems: "center" }}>Pricing</Link>
                <Link href="/our-work"      className={styles.navLink} style={{ display: "inline-flex", alignItems: "center" }}>Our Work</Link>
                <Link href="/testimonials"  className={styles.navLink} style={{ display: "inline-flex", alignItems: "center" }}>Testimonials</Link>
                <Link href="/about"         className={styles.navLink} style={{ display: "inline-flex", alignItems: "center" }}>About</Link>
                <Link href="/timeline"      className={styles.navLink} style={{ display: "inline-flex", alignItems: "center" }}>Timeline</Link>
              </div>

              {/* Areas Dropdown */}
              <div className={styles.dropGroup} style={{ display: "inline-flex", alignItems: "center" }}>
                <button className={styles.navBtn} style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
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

              <Link href="/contact" className={styles.navLink} style={{ display: "inline-flex", alignItems: "center" }}>Contact</Link>
            </nav>

            <Link href="/contact" className={`${styles.ctaBtn} btn-primary`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              Get a Quote
            </Link>

            {/* Hamburger Button */}
            <button
              className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              style={{ display: "none" }} /* Controlled via standard global media queries inside Navbar.module.css */
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