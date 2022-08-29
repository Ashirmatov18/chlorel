import React from "react";
import Footer from "../src/Footer/Footer";
import Navbar from "../src/Navbar/Navbar";
import News from "../src/News/News";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function news() {
  return (
    <div>
      <Head>
        <title>Новинки</title>
      </Head>
      <main style={{ backgroundColor: "white", padding: "2rem" }}>
        <News />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
