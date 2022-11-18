import React from "react";
import styles from "./Homepage.module.css";
import Link from "next/link";
import Card from "../UI/Card";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <section className={styles.showcase}>
      <div className={`${styles.container} grid`}>
        <div className={styles.showcaseText}>
          <h1>Banking App</h1>
          <p>
            Banking App is a banking app that allows you to manage your bank
            account.
          </p>
          <Link href="/" className={`${styles.readBtn} ${styles.button}`}>
            Read More
          </Link>
        </div>

        <div className={styles.showcaseForm}>
          <Card>
            <h2>Sign In</h2>
            <form>
              <div className={styles.formControl}>
                <input type="text" id="card-number" placeholder="Card Number" />
              </div>
              <div className={styles.formControl}>
                <input type="password" id="password" placeholder="Password" />
              </div>
              {/* <div className={styles.formControl}>
                <input type="email" id="email" placeholder="Enter your email" />
              </div> */}
              <div className={styles.formBtns}>
                <button className={styles.button}>Register</button>
                <button className={styles.button}>Sign On</button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
