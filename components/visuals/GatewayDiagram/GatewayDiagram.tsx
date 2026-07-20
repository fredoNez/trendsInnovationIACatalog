import styles from "./GatewayDiagram.module.scss";

export default function GatewayDiagram() {
  return (
    <svg className={styles.diagram} viewBox="0 0 400 170" preserveAspectRatio="xMidYMid meet">
      {/* connecting lines, drawn first so nodes sit on top */}
      <line x1="52" y1="85" x2="150" y2="85" className={styles.activeLine} />
      <line x1="180" y1="85" x2="300" y2="24" className={styles.activeLine} />
      <line x1="180" y1="85" x2="300" y2="63" />
      <line x1="180" y1="85" x2="300" y2="107" />
      <line x1="180" y1="85" x2="300" y2="146" />

      {/* source */}
      <circle className={styles.node} cx="30" cy="85" r="20" />
      <text x="30" y="89" textAnchor="middle">
        APP
      </text>

      {/* gateway hub */}
      <circle className={styles.hub} cx="180" cy="85" r="26" />
      <text x="180" y="81" textAnchor="middle" fontWeight={600} fontSize="9.5">
        GATEWAY
      </text>
      <text x="180" y="94" textAnchor="middle" fontSize="9" className={styles.blueText}>
        routing
      </text>

      {/* model targets */}
      <circle className={styles.node} cx="330" cy="24" r="15" />
      <text x="330" y="28" textAnchor="middle">
        GPT‑4o
      </text>

      <circle className={`${styles.node} ${styles.activeNode}`} cx="330" cy="63" r="15" />
      <text x="330" y="67" textAnchor="middle" className={styles.blueText}>
        Claude
      </text>

      <circle className={styles.node} cx="330" cy="107" r="15" />
      <text x="330" y="111" textAnchor="middle">
        Gemini
      </text>

      <circle className={styles.node} cx="330" cy="146" r="15" />
      <text x="330" y="150" textAnchor="middle">
        Llama
      </text>
    </svg>
  );
}
