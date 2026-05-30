import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mountainEmblem}>
          <div className={styles.peak}></div>
        </div>
        
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Lost at the Summit</h2>
        
        <p className={styles.errorDesc}>
          The digital architecture you are looking for does not exist or has been relocated to another server node. Let&apos;s get you back to the project coordinator.
        </p>
        
        <Link href="/" className={styles.returnBtn}>
          Return to Base Camp
        </Link>
      </div>
    </div>
  );
}
