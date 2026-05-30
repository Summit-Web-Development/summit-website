"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Calculator", href: "#calculator" },
    { label: "Checklist", href: "#checklist" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navbarHeight = 80; // height of the sticky header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="#hero" className={styles.logoContainer} onClick={(e) => handleLinkClick(e, "#hero")}>
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt="Summit geometric peak logo"
              width={36}
              height={36}
              priority
              className={styles.logoImage}
            />
          </div>
          <span className={styles.brandName}>SUMMIT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#calculator"
            className={styles.ctaButton}
            onClick={(e) => handleLinkClick(e, "#calculator")}
          >
            Configure Build
          </a>
        </nav>

        {/* Hamburger Menu Icon */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.drawerOpen : ""}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#calculator"
            className={styles.mobileCtaButton}
            onClick={(e) => handleLinkClick(e, "#calculator")}
          >
            Configure Build
          </a>
        </nav>
      </div>
    </header>
  );
}
