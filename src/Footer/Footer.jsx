import React, { useState } from "react";
// import { LogoFooter } from "./FooterSvg";
import { LogoFooter } from "./FooterSvg";
// import { Link } from "@material-ui/core/Link";
// import { Facebook, Insta, Whats } from "../OrderCars/OrderCarsSvg";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Modal from "@material-ui/core/Modal";
// import ScrollUpButton from "react-scroll-up-button";
import styles from "../../styles/Footer.module.css";
import ScrollUpButton from "react-scroll-up-button";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Link from "next/link";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ScrollUpButton />

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
          <div className={styles.footer_main}>
            <ul className={styles.footer_pages}>
              <Link href="/" style={{ textDecoration: "none", color: "white" }}>
                <li>Главная</li>
              </Link>
              <li>О нас</li>
              <Link
                href="/news"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Новинки</li>
              </Link>

              <Link
                href="/product"
                style={{ textDecoration: "none", color: "white" }}
              >
                <li>Продукты</li>
              </Link>
            </ul>
          </div>
          <div className={styles.footer_last}>
            <div>
              <p className={styles.logo_name}>ФХ “У Самвела”</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "15vw",
              }}
            >
              <Link target="_blank" href="https://t.me/+LYY_eIf_7302OTdi">
                <div className={styles.f}>
                  <TelegramIcon />
                </div>
              </Link>

              <Link
                target="_blank"
                href="https://www.instagram.com/chlorella_biostimulyator/"
              >
                <div className={styles.i}>
                  <InstagramIcon />
                </div>
              </Link>

              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=996779225517"
              >
                <div className={styles.w}>
                  <WhatsAppIcon />
                </div>
              </Link>
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
