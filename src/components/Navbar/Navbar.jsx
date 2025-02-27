import { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/portfolio/">
        Portfolio
      </a>

      <div className={styles.menu}>
        <div className={styles.menuBtn} onClick={toggleMenu}>
          <div className={styles.hamburger}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#certifications">Certifications</a>
          </li>

          <li>
            <a href="#experience">Experience</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};