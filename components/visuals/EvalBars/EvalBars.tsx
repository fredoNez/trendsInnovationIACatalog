import styles from "./EvalBars.module.scss";

const bars = [
  { label: "GPT-4o", height: 70 },
  { label: "Llama 3", height: 45 },
  { label: "Claude", height: 88 },
  { label: "Gemini", height: 30 },
];

export default function EvalBars() {
  return (
    <div className={styles.bars}>
      {bars.map((bar) => (
        <div key={bar.label} className={styles.bar} style={{ height: `${bar.height}%` }}>
          <span>{bar.label}</span>
        </div>
      ))}
    </div>
  );
}
