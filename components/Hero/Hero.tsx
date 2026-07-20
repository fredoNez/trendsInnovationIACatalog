import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
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
          <span className={styles.value}>00</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>ASSETS IN DEVELOPMENT</span>
          <span className={`${styles.value} ${styles.green}`}>01</span>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>TEAMS INTEGRATED</span>
          <span className={`${styles.value} ${styles.blue}`}>2</span>
        </div>
        {/* <div className={styles.row}>
          <span className={styles.label}>LAST_DEPLOY</span>
          <span className={styles.subtle}>NeVER</span>
        </div> */}
      </div>
    </section>
  );
}
