import React, { Suspense } from "react";
import styles from "../../styles/Navbar.module.css";
import Sidebar from "./Sidebar";
// import { slide as Menu } from "react-burger-menu";

export default function Navbar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.appbar}>
        <ul className={styles.list_order}>
          <li className={styles.list_name}>Живая Хлорелла</li>
          <li>Язык</li>
        </ul>
      </div>
    </Suspense>
  );
}
