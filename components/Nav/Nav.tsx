import styles from "./Nav.module.scss";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.mark} /> TRENDS
        <span className={styles.amp}>&</span>INNOVATION{" "}
        <small>/ AI ASSET CATALOG</small>
      </div>
      <div className={styles.links}>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Overview
        </Link>
        <Link
          href="https://github.com/fredoNez/trendsInnovationIA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Catálogo
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          Docs
        </Link>
      </div>
      <div className={styles.status}>
        <span className={styles.dot} /> All systems operational
      </div>
    </nav>
  );
}
