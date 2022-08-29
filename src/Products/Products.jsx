import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/Products.module.css";
import SecondNav from "../Navbar/SecondNav";
import Footer from "../Footer/Footer";

export default function Products() {
  const [form, setForm] = useState([
    {
      id: 1,
      title: "first",
      category: "Для людей",
      image: "../../public/images/first.jpg",
    },
    {
      id: 2,
      title: "second",
      category: "Для растений",
      image: "../../public/images/main.jpg",
    },
    {
      id: 3,
      title: "third",
      category: "Для окружающей среды",
    },
    {
      id: 4,
      title: "fourh",
      category: "Для окружающей среды",
    },
    {
      id: 5,
      title: "fifth",
      category: "для людей",
    },
    {
      id: 6,
      title: "sixth",
      category: "для людей",
    },
  ]);

  const [filtered, setFiltered] = useState(form);

  function todoFilter(category) {
    if (category === "all") {
      setFiltered(form);
    } else {
      let newForm = [...form].filter((item) => item.category === category);
      setFiltered(newForm);
    }
  }

  return (
    <>
      <div className={styles.guides}>
        <div className={styles.main_guides}>
          <div className={styles.about_title}>
            <span>Продукты</span>
          </div>
        </div>
        <div style={{ paddingTop: "40px" }} className={styles.kyrgyzstan}>
          <>
            <div>
              <span>Добро пожаловать в раздел наших продуктов</span>
              <div>
                <p>
                  Тут вы можете просмотреть актуальные новинки на данный момент.
                </p>
              </div>
            </div>
          </>
        </div>
        <div className={styles.but_group}>
          <button
            // onClick={() => setFilteredHotels(hotel)}
            onClick={() => todoFilter("all")}
            className={styles.but_filter}
          >
            Все
          </button>
          <button
            //   onClick={() => filterResult("Для растений")}
            onClick={() => todoFilter("Для растений")}
            className={styles.but_filter}
          >
            Для растений
          </button>
          <button
            className={styles.but_filter}
            //   onClick={() => filterResult("Для окружающей среды")}
            onClick={() => todoFilter("Для окружающей среды")}
          >
            Для окружающей среды
          </button>
          <button
            className={styles.but_filter}
            //   onClick={() => filterResult("Для людей")}
            onClick={() => todoFilter("Для людей")}
          >
            Для людей
          </button>
          <button
            //   onClick={() => filterResult("Для птиц")}
            className={styles.but_filter}
          >
            Для птиц
          </button>
        </div>
        <div className={styles.person_cards}>
          {!!filtered?.length &&
            filtered.map(({ title, image }) => (
              <div key={Math.random()}>
                <div class="flip-card-container">
                  <div class="flip-card">
                    <div class="card-front">
                      <figure class="figure">
                        <div class="img-bg"></div>
                        <div
                          style={{
                            backgroundImage: `url(${image})`,
                            width: "300px",
                            height: "300px",
                          }}
                        ></div>
                      </figure>

                      <ul class="list-style">
                        <li>{title}</li>
                      </ul>
                    </div>

                    <div class="card-back">
                      <figure>
                        <div class="img-bg"></div>
                        <div
                          style={{
                            backgroundImage: `url(${image})`,
                            width: "300px",
                            height: "300px",
                          }}
                        ></div>
                      </figure>

                      <div class="back-info">
                        <h1>{title}</h1>
                        <span>520 сом</span>
                        <button class="button">Купить</button>
                      </div>

                      <div class="design-container">
                        <span class="design design--1"></span>
                        <span class="design design--2"></span>
                        <span class="design design--3"></span>
                        <span class="design design--4"></span>
                        <span class="design design--5"></span>
                        <span class="design design--6"></span>
                        <span class="design design--7"></span>
                        <span class="design design--8"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
