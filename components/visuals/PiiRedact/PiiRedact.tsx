import styles from "./PiiRedact.module.scss";

export default function PiiRedact({ content }: { content: any }) {
  console.log("🚀 ~ PiiRedact ~ content:", content.vPIICovered);
  return (
    <div className={styles.block}>
      {Object.entries(content?.vPIICovered || {}).map(([key, value]) => {
        return (
          <div key={key} className={styles.line}>
            {key}: <span className={`${styles.bar} ${styles.b1}`} />
          </div>
        );
      })}
    </div>
  );
}
