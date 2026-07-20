import styles from "./StarterTerminal.module.scss";

export default function StarterTerminal() {
  return (
    <div className={styles.terminal}>
      <span className={styles.prompt}>$</span> npx create-ai-app
      <br />
      <span className={styles.path}>✓ auth · logging · evals</span>
    </div>
  );
}
