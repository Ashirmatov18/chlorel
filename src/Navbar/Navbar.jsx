import Link from "next/link";
import React, { Suspense } from "react";
import styles from "../../styles/Navbar.module.css";
import { slide as Menu } from "react-burger-menu";

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
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        styles={{ display: "none" }}
      >
        <Link href="/">
          <a id="home" className="menu-item" href="/">
            Главная
          </a>
        </Link>
        <Link href="/product">
          <a id="about" className="menu-item" href="/about">
            Продукты
          </a>
        </Link>
        <Link href="/news">
          <a id="contact" className="menu-item" href="/contact">
            Новинки
          </a>
        </Link>
      </Menu>
    </Suspense>
  );
}
