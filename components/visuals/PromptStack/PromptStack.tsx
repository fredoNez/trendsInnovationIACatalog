import styles from "./PromptStack.module.scss";

const versions = [
  { label: "onboarding.prompt", version: "v3.2", active: true },
  { label: "onboarding.prompt", version: "v2.0" },
  { label: "onboarding.prompt", version: "v1.0" },
];

export default function PromptStack() {
  return (
    <div className={styles.stack}>
      {versions.map((row, i) => (
        <div className={styles.row} key={i}>
          <span>{row.label}</span>
          <span className={row.active ? styles.active : undefined}>{row.version}</span>
        </div>
      ))}
    </div>
  );
}
