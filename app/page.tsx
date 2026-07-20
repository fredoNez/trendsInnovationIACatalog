import Nav from "@/components/Nav/Nav";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <div className={styles.shell}>
      <Nav />
      <Hero />
      <Catalog />
      <Footer />
    </div>
  );
}
