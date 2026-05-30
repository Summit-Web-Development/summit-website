"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  const handleScrollToCalculator = (e) => {
    e.preventDefault();
    const calculatorSection = document.querySelector("#calculator");
    if (calculatorSection) {
      const navbarHeight = 80;
      const elementPosition = calculatorSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToChecklist = (e) => {
    e.preventDefault();
    const checklistSection = document.querySelector("#checklist");
    if (checklistSection) {
      const navbarHeight = 80;
      const elementPosition = checklistSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className={`${styles.hero} animate-fade-in`}>
      <div className={styles.container}>
        <div className={styles.workspaceBorder}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              <span>Next.js Architecture v1.21</span>
            </div>
            
            <h1 className={styles.title}>
              Web Architecture <br />
              <span className={styles.gradientText}>Engineered for Growth</span>
            </h1>
            
            <p className={styles.description}>
              We construct modular, high-contrast, blazing-fast web infrastructure for small businesses. By rejecting generic templates, our layouts ensure elite performance, native SEO visibility, and seamless customer pipelines.
            </p>
            
            <div className={styles.actions}>
              <a href="#calculator" onClick={handleScrollToCalculator} className={styles.primaryBtn}>
                Configure Your Build
              </a>
              <a href="#checklist" onClick={handleScrollToChecklist} className={styles.secondaryBtn}>
                Compare Features
              </a>
            </div>
          </div>
          
          <div className={styles.visualContainer}>
            <div className={styles.mockTerminal}>
              <div className={styles.terminalHeader}>
                <span className={styles.dotRed}></span>
                <span className={styles.dotYellow}></span>
                <span className={styles.dotGreen}></span>
                <span className={styles.terminalTitle}>summit-deploy.sh</span>
              </div>
              <div className={styles.terminalBody}>
                <p className={styles.cmd}>$ npm run build</p>
                <p className={styles.log}>✓ Creating an optimized production build...</p>
                <p className={styles.log}>✓ Compiled successfully</p>
                <p className={styles.log}>✓ Route (app)             Size     First Load JS</p>
                <p className={styles.log}>┌ λ / (dynamic)          3.2 kB         84.1 kB</p>
                <p className={styles.log}>└ ○ /404                 1.1 kB         81.2 kB</p>
                <p className={styles.log}>+ First Load JS shared by all           78.4 kB</p>
                <p className={styles.success}>✓ Architecture deployed to vercel Edge Network (100/100 Speed Score)</p>
                <p className={styles.cursor}>_</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
