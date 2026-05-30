"use client";

import styles from "./Checklist.module.css";

export default function Checklist() {
  const comparisonData = [
    {
      feature: "5-Page Responsive Layout",
      static: "✅ Full Mobile Opt",
      dynamic: "✅ Full Mobile Opt",
      cleanBreak: "✅ Full Mobile Opt",
      desc: "Designed to adapt seamlessly to mobile, tablet, and desktop screens."
    },
    {
      feature: "Local SEO & Maps Optimization",
      static: "✅ Active Engine",
      dynamic: "✅ Active Engine",
      cleanBreak: "❌ Self-Managed",
      desc: "Google Business schema injection and local map citation structure."
    },
    {
      feature: "Secure Database Infrastructure",
      static: "❌ Static Content Only",
      dynamic: "✅ Dedicated Supabase Instance",
      cleanBreak: "❌ Self-Managed Database",
      desc: "Hosted cloud database with table schemas, row security, and auto-backups."
    },
    {
      feature: "Live Inventory Tracking Dashboard",
      static: "❌ Manual HTML Updates",
      dynamic: "✅ Real-time Admin View",
      cleanBreak: "❌ Client Configured",
      desc: "Interactive admin panel to modify inventory counts instantly without writing code."
    },
    {
      feature: "Client Login & Auth Portals",
      static: "❌ Disabled",
      dynamic: "✅ Secure JWT Encryption",
      cleanBreak: "❌ Client Configured",
      desc: "Allows customers to register, sign in, and access private dashboards."
    },
    {
      feature: "Full Codebase Handover",
      static: "❌ Managed Hosting",
      dynamic: "❌ Managed Hosting",
      cleanBreak: "✅ Instant Repository Keys",
      desc: "One-time handover of code files with absolute intellectual property transfer."
    }
  ];

  return (
    <section id="checklist" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Feature Inclusion Matrix</h2>
          <p className={styles.subtitle}>
            Review the structural differences between our code architectures to find the perfect fit.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <table className={styles.matrix}>
            <thead>
              <tr>
                <th className={styles.featColHeader}>Feature Deliverable</th>
                <th className={styles.planColHeader}>
                  <div className={styles.planTitle}>Static Landing Pad</div>
                  <div className={styles.planPrice}>$300</div>
                </th>
                <th className={`${styles.planColHeader} ${styles.premiumHeader}`}>
                  <div className={styles.premiumBadge}>Recommended</div>
                  <div className={styles.planTitle}>Dynamic Engine</div>
                  <div className={styles.planPrice}>$800</div>
                </th>
                <th className={styles.planColHeader}>
                  <div className={styles.planTitle}>Clean Break</div>
                  <div className={styles.planPrice}>$500</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={styles.row}>
                  <td className={styles.featureCell}>
                    <div className={styles.featureName}>{row.feature}</div>
                    <div className={styles.featureDesc}>{row.desc}</div>
                  </td>
                  <td className={`${styles.valCell} ${row.static.startsWith("✅") ? styles.yes : styles.no}`}>
                    <span className={styles.valText}>{row.static}</span>
                  </td>
                  <td className={`${styles.valCell} ${styles.premiumCell} ${row.dynamic.startsWith("✅") ? styles.yes : styles.no}`}>
                    <span className={styles.valText}>{row.dynamic}</span>
                  </td>
                  <td className={`${styles.valCell} ${row.cleanBreak.startsWith("✅") ? styles.yes : styles.no}`}>
                    <span className={styles.valText}>{row.cleanBreak}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
