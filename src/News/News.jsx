import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/News.module.css";

export default function News({ news }) {
  return (
    <div className={styles.guides}>
      <div className={styles.main_guides}>
        <div className={styles.about_title} data-aos="fade-down">
          <span>Новинки</span>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }} className={styles.kyrgyzstan}>
        <>
          <div>
            <span>Добро пожаловать в раздел наших последних новинок</span>
            <div>
              <p>
                Тут вы можете просмотреть актуальные новинки на данный момент.
              </p>
            </div>
          </div>
        </>
      </div>
      <div className={styles.adv}>
        <div className={styles.info_detail}>
          <div className={styles.picture_first}></div>
          <div className={styles.pic_info}>
            <h3>
              {" "}
              Туристические шаттлы запустили от аэропорта «Манас» до Бишкека
            </h3>
            <p className={styles.info_description}>
              Также будет предоставляться информация по туризму Кыргызстана в
              течение всего пути. Вместо гида – видеоконтент», – заявила
              президент Фонда поддержки развития туризма в Кыргызской Республике
            </p>
            <div className={styles.read_more}>
              <p>Подробнее</p>
              {/* <div className={styles.arrow}><ReadMore /></div> */}
            </div>
          </div>
        </div>

        <div className={styles.info_detail}>
          <div className={styles.picture_first}></div>
          <div className={styles.pic_info}>
            <h3>
              {" "}
              Туристические шаттлы запустили от аэропорта «Манас» до Бишкека
            </h3>
            <p className={styles.info_description}>
              Также будет предоставляться информация по туризму Кыргызстана в
              течение всего пути. Вместо гида – видеоконтент», – заявила
              президент Фонда поддержки развития туризма в Кыргызской Республике
            </p>
            <div className={styles.read_more}>
              <p>Подробнее</p>
              {/* <div className={styles.arrow}><ReadMore /></div> */}
            </div>
          </div>
        </div>

        <div className={styles.info_detail}>
          <div className={styles.picture_first}></div>
          <div className={styles.pic_info}>
            <h3>
              {" "}
              Туристические шаттлы запустили от аэропорта «Манас» до Бишкека
            </h3>
            <p className={styles.info_description}>
              Также будет предоставляться информация по туризму Кыргызстана в
              течение всего пути. Вместо гида – видеоконтент», – заявила
              президент Фонда поддержки развития туризма в Кыргызской Республике
            </p>
            <div className={styles.read_more}>
              <p>Подробнее</p>
              {/* <div className={styles.arrow}><ReadMore /></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
