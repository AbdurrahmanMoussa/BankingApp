import React from "react";
import styles from "./Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <ul>
          <li>
            <p>Banking App</p>
          </li>
          <li>
            <address>577 Queens Street, Ottawa ON</address>
          </li>
          <li>
            <p>© Abdurrahman Bank App</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
