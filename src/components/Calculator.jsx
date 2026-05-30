"use client";

import { useState } from "react";
import styles from "./Calculator.module.css";

export default function Calculator({
  selectedBuild,
  setSelectedBuild,
  selectedSupport,
  setSelectedSupport
}) {
  // Local state for ROI interactive slider/number variables
  const [adminHours, setAdminHours] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(30);

  // Pricing Matrix configuration
  const builds = [
    {
      id: "static",
      name: "Static Landing Pad",
      upfront: 300,
      description: "Ideal for local listings, portfolio websites, and simplified lead capture pages.",
      badge: "Local Business Standard"
    },
    {
      id: "dynamic",
      name: "Dynamic Engine",
      upfront: 800,
      description: "Dedicated database infrastructure, client login, and automated dashboard portals.",
      badge: "High Conversion Peak"
    },
    {
      id: "clean-break",
      name: "Clean Break Handover",
      upfront: 500,
      description: "One-time code repository ownership transfer with instant keys. You manage the host.",
      badge: "Full Independence"
    }
  ];

  const supports = {
    static: [
      { id: "bronze", name: "Bronze Plan", monthly: 50, sla: "5-day response queue" },
      { id: "silver", name: "Silver Plan", monthly: 75, sla: "48-hour priority ticket response" },
      { id: "gold", name: "Gold Plan", monthly: 100, sla: "Under 24-hour priority queue execution" }
    ],
    dynamic: [
      { id: "bronze", name: "Bronze Support", monthly: 90, sla: "5-day response queue" },
      { id: "silver", name: "Silver Support", monthly: 150, sla: "48-hour priority ticket response" },
      { id: "gold", name: "Gold Support", monthly: 200, sla: "Under 24-hour priority queue execution" }
    ]
  };

  const handleBuildSelect = (buildId) => {
    setSelectedBuild(buildId);
    if (buildId === "clean-break") {
      setSelectedSupport("none");
    } else {
      setSelectedSupport("bronze"); // Default to bronze when switching builds
    }
  };

  // Upfront and Monthly Price Calculation
  const currentBuild = builds.find((b) => b.id === selectedBuild);
  const upfrontPrice = currentBuild ? currentBuild.upfront : 0;
  
  let monthlyPrice = 0;
  let supportPlanName = "N/A";
  let slaText = "";

  if (selectedBuild !== "clean-break" && selectedSupport !== "none") {
    const list = supports[selectedBuild] || [];
    const item = list.find((s) => s.id === selectedSupport);
    if (item) {
      monthlyPrice = item.monthly;
      supportPlanName = item.name;
      slaText = item.sla;
    }
  }

  // ROI Math
  const estimatedSavings = Math.round(adminHours * 0.85 * hourlyRate * 4.33); // 85% efficiency, 4.33 weeks per month
  const yearlySavings = estimatedSavings * 12;
  const breakEvenMonths = (800 / (estimatedSavings - (selectedBuild === "dynamic" ? monthlyPrice : 90))).toFixed(1);

  return (
    <section id="calculator" className={styles.section}>
      <div className="container">
        <div className={styles.headerArea}>
          <h2 className={styles.sectionTitle}>Modular Pricing Architect</h2>
          <p className={styles.sectionSubtitle}>
            Configure your technical scope. Instantly view cost structures and calculate your administrative returns.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Form Step Left Panel */}
          <div className={styles.panelLeft}>
            {/* Step 1 */}
            <div className={styles.stepGroup}>
              <div className={styles.stepTitleWrapper}>
                <span className={styles.stepNum}>01</span>
                <h3>Select Base Architecture</h3>
              </div>
              <div className={styles.cardGrid}>
                {builds.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`${styles.card} ${selectedBuild === b.id ? styles.cardActive : ""}`}
                    onClick={() => handleBuildSelect(b.id)}
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.badge}>{b.badge}</span>
                      <span className={styles.cardPrice}>${b.upfront}</span>
                    </div>
                    <h4 className={styles.cardTitle}>{b.name}</h4>
                    <p className={styles.cardDesc}>{b.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className={styles.stepGroup}>
              <div className={styles.stepTitleWrapper}>
                <span className={styles.stepNum}>02</span>
                <h3>Select Monthly Software & Support Priority</h3>
              </div>

              {selectedBuild === "clean-break" ? (
                <div className={styles.handoverInfo}>
                  <div className={styles.infoIcon}>🛡️</div>
                  <div>
                    <h4 className={styles.infoTitle}>Flat Fee Clean Break Active</h4>
                    <p className={styles.infoDesc}>
                      You receive full codebase zip and GitHub repository rights. All ongoing hosting, analytics, and operational configurations are maintained by your engineering team. Recurring support is deactivated.
                    </p>
                  </div>
                </div>
              ) : (
                <div className={styles.supportGrid}>
                  {(supports[selectedBuild] || []).map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`${styles.supportCard} ${selectedSupport === s.id ? styles.supportActive : ""}`}
                      onClick={() => setSelectedSupport(s.id)}
                    >
                      <div className={styles.supportHeader}>
                        <span className={styles.supportTitle}>{s.name}</span>
                        <span className={styles.supportPrice}>${s.monthly}/mo</span>
                      </div>
                      <p className={styles.supportSla}>{s.sla}</p>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Calculator Output Right Panel */}
          <div className={styles.panelRight}>
            <div className={styles.summarySticky}>
              <h3 className={styles.summaryTitle}>Configuration Specs</h3>
              
              <div className={styles.specList}>
                <div className={styles.specRow}>
                  <span>Build Base:</span>
                  <strong>{currentBuild ? currentBuild.name : ""}</strong>
                </div>
                <div className={styles.specRow}>
                  <span>Monthly Service:</span>
                  <strong>
                    {selectedBuild === "clean-break" ? "Deactivated" : supportPlanName}
                  </strong>
                </div>
                {selectedBuild !== "clean-break" && (
                  <div className={styles.specRow}>
                    <span>SLA window:</span>
                    <strong className={styles.slaHighlight}>{slaText}</strong>
                  </div>
                )}
              </div>

              <div className={styles.divider}></div>

              <div className={styles.totals}>
                <div className={styles.totalRow}>
                  <span>Upfront Build Cost:</span>
                  <span className={styles.totalPrice}>${upfrontPrice}</span>
                </div>
                {selectedBuild !== "clean-break" && (
                  <div className={styles.totalRow}>
                    <span>Ongoing Operations:</span>
                    <span className={styles.totalPrice}>${monthlyPrice}<small>/mo</small></span>
                  </div>
                )}
              </div>

              {/* Conversion Booster: ROI Estimator */}
              <div className={styles.roiContainer}>
                <h4 className={styles.roiTitle}>
                  💼 Value Visualizer & ROI Estimator
                </h4>
                <p className={styles.roiIntro}>
                  See how quickly an automated site pays for itself compared to manual work:
                </p>

                <div className={styles.controlGroup}>
                  <label htmlFor="adminHoursRange">
                    Manual Admin (Hours/Week): <strong>{adminHours} hrs</strong>
                  </label>
                  <input
                    id="adminHoursRange"
                    type="range"
                    min="1"
                    max="25"
                    value={adminHours}
                    onChange={(e) => setAdminHours(parseInt(e.target.value))}
                    className={styles.slider}
                  />
                </div>

                <div className={styles.controlGroup}>
                  <label htmlFor="hourlyRateRange">
                    Admin Value (Cost/Hour): <strong>${hourlyRate}/hr</strong>
                  </label>
                  <input
                    id="hourlyRateRange"
                    type="range"
                    min="15"
                    max="100"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                    className={styles.slider}
                  />
                </div>

                <div className={styles.roiResults}>
                  <div className={styles.roiStat}>
                    <span>Estimated Monthly Savings:</span>
                    <strong className={styles.greenText}>+${estimatedSavings}/mo</strong>
                  </div>
                  <div className={styles.roiStat}>
                    <span>Estimated Yearly Return:</span>
                    <strong>+${yearlySavings}/yr</strong>
                  </div>
                  
                  {selectedBuild === "dynamic" ? (
                    <div className={styles.roiMessage}>
                      🚀 The <strong>Dynamic Engine</strong> ($800) pays for itself in just{" "}
                      <strong>{breakEvenMonths > 0 ? breakEvenMonths : 1} months</strong>.
                    </div>
                  ) : (
                    <div className={styles.roiPromo}>
                      💡 <strong>Upsell Tip:</strong> Upgrade to the <strong>Dynamic Engine ($800)</strong> to fully automate these workflows. A static site requires manual work.
                      <button
                        type="button"
                        onClick={() => handleBuildSelect("dynamic")}
                        className={styles.promoBtn}
                      >
                        Switch to Dynamic
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <a href="#contact" className={styles.lockBtn}>
                Lock in Specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
