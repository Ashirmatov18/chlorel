import Link from "next/link";
import React, { Suspense } from "react";
import styles from "../../styles/Navbar.module.css";
import Sidebar from "./Sidebar";
// import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.appbar}>
        <ul className={styles.list_order}>
          <Link href="/">
            <li className={styles.list_name}>Живая Хлорелла</li>
          </Link>
          <Link href="/product">
            <li
              className={styles.button}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Продукты
            </li>
          </Link>
          <Link href="/news">
            <li
              className={styles.button}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Новинки
            </li>
          </Link>
        </ul>
      </div>
    </Suspense>
  );
}
