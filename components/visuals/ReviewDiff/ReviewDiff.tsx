import styles from "./ReviewDiff.module.scss";

export default function ReviewDiff() {
  return (
    <div className={styles.diff}>
      <span className={styles.ctx}>{"  function auth(token) {"}</span>
      <span className={styles.rem}>{"-   if (token) return true;"}</span>
      <span className={styles.add}>{"+   if (verify(token)) return true;"}</span>
      <span className={styles.ctx}>{"  }"}</span>
    </div>
  );
}
