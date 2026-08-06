import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerText}>
          © 2026 Movie <span>Plus</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
