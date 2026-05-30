"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Services",     href: "/services" },
  { label: "Pricing",      href: "/pricing" },
  { label: "Our Work",     href: "/our-work" },
  { label: "About",        href: "/about" },
  { label: "Contact",      href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={close}>
            <div className={styles.logoImg}>
              <Image
                src="/logo_noname.png"
                alt="Summit Webcraft Logo"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <span className={styles.logoText}>
              Summit <span className={styles.logoSub}>Webcraft</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link href="/contact" className={styles.ctaBtn}>
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            id="mobile-menu-toggle"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ""}`} role="dialog" aria-label="Navigation menu">
        <nav className={styles.drawerNav}>
          <Link href="/" className={styles.drawerLink} onClick={close}>Home</Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.drawerLink} onClick={close}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className={`btn-primary ${styles.drawerCta}`} onClick={close}>
            Get a Quote
          </Link>
        </nav>
      </div>
    </>
  );
}