import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/News.module.css";
import Image from "next/image";

export default function News() {
  const certifacetes = [
    {
      title: "first",
      image: "https://chlorela.com.ua/wp-content/uploads/2020/11/cert1.jpg",
    },
    {
      title: "first",
      image: "https://chlorela.com.ua/wp-content/uploads/2020/11/cert2.jpg",
    },
    {
      title: "first",
      image: "https://chlorela.com.ua/wp-content/uploads/2020/11/cert3.jpg",
    },
    {
      title: "first",
      image: "https://chlorela.com.ua/wp-content/uploads/2020/11/cert4.jpg",
    },
  ];

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
      {/* <div className={styles.adv}>
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
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.conteiner}>
        {!!certifacetes?.length &&
          certifacetes.map(({ image, title }) => (
            <div className={styles.card}>
              <figure className={styles.card__thumb}>
                {/* <div styles={{ backgroundImage: `url(${image})` }}></div> */}
                <div className={styles.img}></div>
                <figcaption className={styles.card__caption}>
                  <h2 className={styles.card__title}>
                    NASA Has Found Hundreds Of Potential New Planets
                  </h2>
                  <p className={styles.card__snippet}>
                    NASA released a list of 219 new “planet candidates”
                    discovered by the Kepler space telescope, 10 of which are
                    similar to Earths size and may be habitable by other life
                    forms.
                  </p>
                </figcaption>
              </figure>
            </div>
          ))}
      </div>
    </div>
  );
}
