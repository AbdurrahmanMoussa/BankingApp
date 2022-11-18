import Head from "next/head";
import Homepage from "./components/Home/Homepage";
import styles from "../styles/Home.module.css";
import InformationSection from "./components/Home/InformationSection";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />

      <InformationSection />
    </div>
  );
}
