import { assets } from "@/lib/assets";
import styles from "./Hero.module.scss";

export default function Hero() {

  const assetsCounter = (number: number | string): string => {
    return String(number).padStart(2, '0');
  }

  const asstetsInDev = assetsCounter( assets.filter((a) => a.status === "inDev").length);
  const assetsLive = assetsCounter(assets.filter((a) => a.status === "live").length);
  const teamsIntegrated = assetsCounter(2); // TODO: calculate this dynamically based on the assets and their integrations
  return (
    <section className={styles.hero} id="overview">
      <div>
        <div className={styles.eyebrow}>Deep Tech / Internal Infrastructure</div>
        <h1>Production-ready AI infrastructure, in a single catalog.</h1>
        <p>
          We are the internal AI infrastructure platform. We build the reusable building blocks—microservices,
          components, and tools—that enable any team in the organization to integrate AI into their projects
          without starting from scratch.
        </p>
      </div>
      <div className={styles.readout}>
        <div className={styles.row}>
          <span className={styles.label}>ASSETS LIVE</span>
          <span className={styles.value}>{assetsLive}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>ASSETS IN DEVELOPMENT</span>
          <span className={`${styles.value} ${styles.green}`}>{asstetsInDev}</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>TEAMS INTEGRATED</span>
          <span className={`${styles.value} ${styles.blue}`}>{teamsIntegrated}</span>
        </div>
      </div>
    </section>
  );
}
