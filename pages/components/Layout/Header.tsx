import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer} flex`}>
        <h1>Banking App</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/accounts">Accounts</Link>
            </li>
            <li>
              <Link href="/transactions">Transactions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
