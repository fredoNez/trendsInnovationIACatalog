import { Fragment } from "react";
import styles from "./RagPipeline.module.scss";

const steps: { label: string; on?: boolean }[] = [
  { label: "Query", on: true },
  { label: "Retriever" },
  { label: "Pinecone" },
  { label: "Reranker" },
  { label: "LLM", on: true },
];

export default function RagPipeline() {
  return (
    <div className={styles.pipeline}>
      {steps.map((step, i) => (
        <Fragment key={step.label}>
          <div className={`${styles.node}${step.on ? ` ${styles.on}` : ""}`}>{step.label}</div>
          {i < steps.length - 1 && <span className={styles.arrow}>→</span>}
        </Fragment>
      ))}
    </div>
  );
}
