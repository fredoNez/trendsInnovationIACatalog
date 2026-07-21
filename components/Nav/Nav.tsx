"use client";
import { useEffect, useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Activar el diseño fijo si bajamos más de 30px
      if (currentScrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }

      // Si estamos arriba del todo, siempre visible
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  return (
   <div className={`${styles.navWrapper} ${!isVisible ? styles.hidden : ""}`}>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.brand}>
          <span className={styles.mark} /> TRENDS
          <span className={styles.amp}>&</span>INNOVATION{" "}
          <small>/ AI ASSET CATALOG</small>
        </div>
        <div className={styles.links}>
          <Link href="#overview">Overview</Link>
          <Link href="#catalog">Catalog</Link>
          <Link
            href="https://github.com/fredoNez/trendsInnovationIA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </Link>
        </div>
        <div className={styles.status}>
          <span className={styles.dot} /> All systems operational
        </div>
      </nav>
    </div>
  );
};

export default Nav;
