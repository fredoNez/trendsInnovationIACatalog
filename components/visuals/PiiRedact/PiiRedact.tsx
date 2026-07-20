import styles from "./PiiRedact.module.scss";

export default function PiiRedact() {
  return (
    <div className={styles.block}>
      <div className={styles.line}>
        name: <span className={`${styles.bar} ${styles.b1}`} />
      </div>
      <div className={styles.line}>
        email: <span className={`${styles.bar} ${styles.b2}`} />
      </div>
    </div>
  );
}
