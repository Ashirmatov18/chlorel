import React from "react";
import styles from "../../styles/MainPage.module.css";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <div className={styles.back_image}>
        <h1>
          Мы выращиваем хлореллу <br /> для того, чтобы сделать этот <br /> мир
          лучше!
        </h1>
        <button className={styles.button}>
          <span>Больше информации</span>
        </button>
      </div>
    </div>
  );
}
