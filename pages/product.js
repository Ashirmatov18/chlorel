import Head from "next/head";
import React from "react";
import Footer from "../src/Footer/Footer";
import SecondNav from "../src/Navbar/SecondNav";
import Products from "../src/Products/Products";
import styles from "../styles/Home.module.css";

export default function product() {
  return (
    <div>
      <Head>
        <title>Продукты</title>
      </Head>
      <SecondNav />
      <main style={{ backgroundColor: "white", padding: "2rem" }}>
        <Products />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
