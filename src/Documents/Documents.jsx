import React from "react";
import styles from "../../styles/Documents.module.css";

const documents = [
  {
    title: "first",
    image: "https://chlorela.com.ua/wp-content/uploads/2020/11/partner-1.png",
  },
  {
    title: "first",
    image: "https://chlorela.com.ua/wp-content/uploads/2020/11/partner-2.jpg",
  },
  {
    title: "first",
    image: "https://chlorela.com.ua/wp-content/uploads/2020/11/partner-3.png",
  },
  {
    title: "first",
    image: "https://chlorela.com.ua/wp-content/uploads/2020/11/partner-4.jpg",
  },
  {
    title: "first",
    image: "https://chlorela.com.ua/wp-content/uploads/2020/11/partner-5.jpg",
  },
  {
    title: "first",
    image: "https://chlorela.com.ua/wp-content/uploads/2020/11/partner-6.png",
  },
];

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

export default function Documents() {
  return (
    <>
      <div className={styles.title_doc}>
        <h1>Сертификаты и Документы</h1>
      </div>

      <div classname={styles.wrappper}>
        <div className={styles.residents} data-aos="fade-up">
          {!!certifacetes?.length &&
            certifacetes.map(({ title, image }) => (
              <div style={{ marginRight: "15px" }}>
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className={styles.first_res}
                ></div>
                {/* <div className={styles.res_name}>
                  <p>{title}</p>
                </div> */}
              </div>
            ))}
        </div>
      </div>

      <div classname={styles.wrappper}>
        <div className={styles.residents} data-aos="fade-up">
          {!!documents?.length &&
            documents.map(({ title, image }) => (
              <div style={{ marginRight: "15px" }}>
                <div
                  style={{ backgroundImage: `url(${image})` }}
                  className={styles.first_res}
                ></div>
                {/* <div className={styles.res_name}>
                  <p>{title}</p>
                </div> */}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
