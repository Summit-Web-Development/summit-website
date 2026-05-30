"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ selectedBuild, selectedSupport }) {
  // Form fields state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  // Map state to readable details
  const buildNames = {
    static: { name: "Static Landing Pad", cost: 300 },
    dynamic: { name: "Dynamic Engine", cost: 800 },
    "clean-break": { name: "Clean Break Handover", cost: 500 }
  };

  const supportNames = {
    static: {
      bronze: { name: "Bronze Plan ($50/mo)", cost: 50 },
      silver: { name: "Silver Plan ($75/mo)", cost: 75 },
      gold: { name: "Gold Plan ($100/mo)", cost: 100 }
    },
    dynamic: {
      bronze: { name: "Bronze Support ($90/mo)", cost: 90 },
      silver: { name: "Silver Support ($150/mo)", cost: 150 },
      gold: { name: "Gold Support ($200/mo)", cost: 200 }
    }
  };

  const buildDetail = buildNames[selectedBuild] || { name: "Static Landing Pad", cost: 300 };
  
  let supportDetail = { name: "Deactivated", cost: 0 };
  if (selectedBuild !== "clean-break" && selectedSupport !== "none") {
    supportDetail = supportNames[selectedBuild]?.[selectedSupport] || { name: "Deactivated", cost: 0 };
  }

  const upfrontCost = buildDetail.cost;
  const monthlyCost = supportDetail.cost;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    // Retrieve Web3Forms Access Key from environment variable or fallback to testing key
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

    const payload = {
      access_key: accessKey,
      name: name,
      email: email,
      message: message,
      subject: "We received your project configuration — Summit Web Solutions",
      from_name: "The Summit Team",
      replyto: "summitdev.contact@gmail.com",
      // Custom structured fields
      "Selected Build": buildDetail.name,
      "Selected Support Plan": supportDetail.name,
      "Upfront Cost": `$${upfrontCost}`,
      "Monthly Cost": `$${monthlyCost}/mo`
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitResult("success");
        setStatusMessage(
          `Thank you, ${name}! Your specification brief has been logged. Web3Forms has updated our Google Sheet tracking index and dispatched an confirmation auto-reply email.`
        );
        // Clear fields
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitResult("error");
        setStatusMessage(result.message || "Something went wrong during form submission. Please verify details and retry.");
      }
    } catch (error) {
      setSubmitResult("error");
      setStatusMessage("Network error: Could not reach the Web3Forms gateway. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Initialize Your Project Pipeline</h2>
          <p className={styles.subtitle}>
            Submit your selected build state directly to our engineering stack. Web3Forms handles the automated handshake routing.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left panel showing selected pricing specifications */}
          <div className={styles.specPanel}>
            <h3 className={styles.specPanelTitle}>Selected Architecture Brief</h3>
            
            <div className={styles.badgeRow}>
              <span className={styles.specBadge}>System Active</span>
              <span className={styles.specBadge}>V1.21 Pipeline</span>
            </div>

            <div className={styles.specsList}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Base Option:</span>
                <span className={styles.specValue}>{buildDetail.name}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Monthly Service Plan:</span>
                <span className={styles.specValue}>{supportDetail.name}</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Upfront Development Fee:</span>
                <span className={`${styles.specValue} ${styles.priceHighlight}`}>${upfrontCost}</span>
              </div>
              {selectedBuild !== "clean-break" && (
                <div className={styles.specItem}>
                  <span className={styles.specLabel}>Recurring Operations Fee:</span>
                  <span className={`${styles.specValue} ${styles.priceHighlight}`}>${monthlyCost}/mo</span>
                </div>
              )}
            </div>

            <div className={styles.diagram}>
              <div className={styles.diagramNode}>Client Submission</div>
              <div className={styles.diagramArrow}>▼</div>
              <div className={styles.diagramNode}>Web3Forms API Gateway</div>
              <div className={styles.diagramRow}>
                <div className={styles.diagramBranch}>
                  <div className={styles.diagramArrow}>◀</div>
                  <div className={styles.diagramMiniNode}>Google Sheets Row</div>
                </div>
                <div className={styles.diagramBranch}>
                  <div className={styles.diagramArrow}>▶</div>
                  <div className={styles.diagramMiniNode}>Client Auto-Reply</div>
                </div>
              </div>
            </div>

            <p className={styles.noticeText}>
              * Real-time lead index updating triggers an instant automated response to your inbox using our official address: <strong>summitdev.contact@gmail.com</strong>.
            </p>
          </div>

          {/* Right panel containing the inputs */}
          <div className={styles.formPanel}>
            {submitResult === "success" ? (
              <div className={styles.successCard}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>Configuration Transmitted Successfully</h3>
                <p className={styles.successMsg}>{statusMessage}</p>
                
                <div className={styles.emailPreview}>
                  <div className={styles.emailHeader}>
                    <strong>From:</strong> summitdev.contact@gmail.com <br />
                    <strong>Subject:</strong> We received your project configuration — Summit Web Solutions
                  </div>
                  <div className={styles.emailBody}>
                    <p>Hello,</p>
                    <p>Thank you for choosing Summit. We have successfully received your web architecture configuration request.</p>
                    <p>Our engineering group is currently reviewing your project requirements and selected tier structure. A senior developer will contact you directly with a formal technical brief in less than 24 hours.</p>
                    <p>Best regards,<br />The Summit Team</p>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.resetBtn}
                  onClick={() => setSubmitResult(null)}
                >
                  Configure Another Brief
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="nameInput" className={styles.label}>
                    Your Name / Company
                  </label>
                  <input
                    id="nameInput"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name or business"
                    className={styles.input}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="emailInput" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    id="emailInput"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className={styles.input}
                    disabled={isSubmitting}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="messageInput" className={styles.label}>
                    Project Scope / Core Requirements
                  </label>
                  <textarea
                    id="messageInput"
                    rows="4"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Detail your business operations and features needed (e.g., e-commerce products, target SEO keyword locations, etc.)"
                    className={styles.textarea}
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ? null : (
                  <div className={styles.devAlert}>
                    ⚠️ <strong>Testing Mode:</strong> No `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` environment variable detected. Submitting will default to the Web3Forms demo token for layout validation.
                  </div>
                )}

                {submitResult === "error" && (
                  <div className={styles.errorAlert}>{statusMessage}</div>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Transmitting Specs..." : "Transmit Project Specifications"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
