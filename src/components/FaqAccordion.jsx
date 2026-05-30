"use client";

import { useState } from "react";
import styles from "./FaqAccordion.module.css";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is the structural difference between Static and Dynamic builds?",
      a: "Static builds ($300) are compiled once and served globally via Edge CDN networks. They are blazing-fast but require code updates for content changes. Dynamic builds ($800) sync with a live cloud database (Supabase) and admin dashboard. This lets you manage inventory, modify texts, and view client records through an interactive browser portal with zero coding."
    },
    {
      q: "How does the Web3Forms lead automation pipeline operate?",
      a: "All lead submissions are securely captured client-side and routed instantly via a secure POST request to the Web3Forms access gateway. This system triggers two automated actions: (1) it appends the lead as a row in your project's tracking Google Sheet, and (2) it sends an immediate auto-confirmation email to the client from summitdev.contact@gmail.com. No heavy, costly backend servers are needed."
    },
    {
      q: "Do I have complete ownership of my website's code?",
      a: "Yes. With the Clean Break Handover ($500 flat), we transfer the complete Git repository and code assets to your control immediately upon project completion. For Static and Dynamic plans, we host and manage the site for you, but we support code migration and full handovers at any time if you decide to self-manage."
    },
    {
      q: "Can I launch a Static site now and upgrade to Dynamic later?",
      a: "Absolutely. Our engineering workflow builds modular components. If you launch on the Static tier today, we can integrate the Supabase database infrastructure, admin portals, and login systems in the future without rebuilding your layout from scratch."
    },
    {
      q: "How does the Under 24-Hour support SLA work?",
      a: "Our Gold support priority places your request directly at the top of our development queue. If you need a text modification, a new product added, or layout adjustments, a senior developer executes and deploys the update to your live site in less than 24 hours."
    }
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Objection Resolution FAQ</h2>
          <p className={styles.subtitle}>
            Have questions about support priorities, codebase handovers, or database structures? We have answers.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div key={idx} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                <button
                  type="button"
                  className={styles.questionButton}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.questionText}>{faq.q}</span>
                  <span className={styles.icon}>
                    <span className={styles.iconH}></span>
                    <span className={styles.iconV}></span>
                  </span>
                </button>
                <div className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ""}`}>
                  <div className={styles.answerContent}>
                    <p className={styles.answerText}>{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
