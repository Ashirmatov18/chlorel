import React from "react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.appbar}>
      <ul className={styles.list_order}>
        <li>Menu</li>
        <li className={styles.list_name}>Живая Хлорелла</li>
        <li>Язык</li>
      </ul>
    </div>
  );
}
