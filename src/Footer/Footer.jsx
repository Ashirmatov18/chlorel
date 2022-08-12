import React, { useState } from "react";
// import { LogoFooter } from "./FooterSvg";
import { LogoFooter } from "./FooterSvg";
import { Link } from "@material-ui/core/Link";
// import { Facebook, Insta, Whats } from "../OrderCars/OrderCarsSvg";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Modal from "@material-ui/core/Modal";
// import ScrollUpButton from "react-scroll-up-button";
import styles from "../../styles/Footer.module.css";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <ScrollUpButton /> */}

      {/* <div className={styles.footer_img} style={{ color: "#fff" }}>
        <div className={styles.main_wrapper}>
          <div className={styles.horse_section} data-aos="fade-down">
            <h1>Подпишись, чтобы узнать новости</h1>
            <div>
              <p></p>
            </div>
            <div className={styles.form}>
              <input
                className={styles.confirm_inp}
                type="text"
                name=""
                id=""
                placeholder="E-mail"
              />
              <button onClick={handleOpen} className={styles.confirm_but}>
                Отправить
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <footer className={styles.footer_info}>
        <div className={styles.main_wrapper}>
          <div className={styles.footer_main} data-aos="fade-up">
            <ul>
              {/* <Link href="/" style={{ textDecoration: "none", color: "white" }}> */}
              <li>Главная</li>
              {/* </Link> */}
              {/* <Link
              href="/about"
              style={{ textDecoration: "none", color: "white" }}
            > */}
              <li>О нас</li>
              {/* </Link> */}
              {/* <Link
              href="/kyrgyzstan"
              style={{ textDecoration: "none", color: "white" }} */}
              {/* > */}
              {/* </Link> */}

              {/* <Link
              href="/cafe"
              style={{ textDecoration: "none", color: "white" }}
            > */}
              {/* </Link>
            <Link
              href="/entert"
              style={{ textDecoration: "none", color: "white" }}
            > */}
              <li>Новинки</li>
              {/* </Link> */}
              {/* <Link
              href="/partners"
              style={{ textDecoration: "none", color: "white" }}
            > */}
              <li>Продукты</li>
              {/* </Link>
            <Link
              href="/news"
              style={{ textDecoration: "none", color: "white" }}
            > */}
              {/* </Link> */}
            </ul>
          </div>
          <div className={styles.footer_last}>
            <div></div>
            <div>
              <p>ФХ “У Самвела”</p>
            </div>
            <div className={styles.phone_footer} style={{ fontSize: "20px" }}>
              <p>+996 0779-22-55-17</p>
            </div>
            <div className={styles.phone_footer} style={{ fontSize: "20px" }}>
              <p>+996 0779-22-55-17</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "15vw",
              }}
            >
              {/* <Link
              target="_blank"
              href="https://www.facebook.com/Tabiyatkg-105609372166838/"
            > */}
              <div className={styles.f}>{/* <Facebook /> */}</div>
              {/* </Link> */}

              {/* <Link
              target="_blank"
              href="https://instagram.com/tabiyatkg?igshid=YmMyMTA2M2Y="
            > */}
              <div className={styles.i}>{/* <Insta /> */}</div>
              {/* </Link> */}

              {/* <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=996554160589"
            > */}
              <div className={styles.w}>{/* <Whats /> */}</div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

{
  /* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              УСПЕШНО ОТПРАВЛЕНО!
            </Typography>
          </Box>
        </Modal> */
}
