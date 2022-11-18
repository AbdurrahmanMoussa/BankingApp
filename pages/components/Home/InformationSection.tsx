import React from "react";
import styles from "./InformationSection.module.css";
import Card from "../UI/Card";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const InformationSection = (props: Props) => {
  return (
    <section className={styles.information}>
      <div className={`${styles.informationContainer} grid`}>
        <Card>
          <div className={styles.card}>
            <h3>Why Choose Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates, quod, quia, voluptate quae voluptatem quibusdam
            </p>
          </div>
        </Card>
        <Card>
          <div className={styles.card}>
            <Image
              src="/rewardsPicture.avif"
              alt=""
              height={200}
              width={320}
              priority
              className={styles.rewardsImg}
            ></Image>
            <h3>Rewards</h3>
            <p>We have got you covered with our rewards program.</p>
            <ul>
              <li>
                <Link href="/">
                  <p>Find out more about your potential rewards!</p>
                </Link>
              </li>
            </ul>
          </div>
        </Card>
        <Card>
          <div className={styles.card}>
            <h3>Accounts</h3>
            <p>
              Find out more about our different types of accounts and how to
              open an account that meets your needs.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InformationSection;
