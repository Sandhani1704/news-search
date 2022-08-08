import React, { FC } from "react";
import s from "./footer.module.scss";
import logo from "../../images/logo.png";
import { Vk } from "../assets/icons/vk";
import { Telegram } from "../assets/icons/telegram";
import { YandexZen } from "../assets/icons/yandex-zen";
import { Odnoklassniki } from "../assets/icons/odnoklassniki";
const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <div className={s.footer__captionCont}>
          <img src={logo} className={s.footer__logo} alt="логотип"></img>
          <p className={s.footer__caption}>
            © Photo, Inc. 2019. We love our users!
          </p>
        </div>
        <nav className={s.footer__socialIconsCont}>
          <ul className={s.footer__socialIconsLinks}>
            <li className={s.footer__socialIconsItem}>
              <a href="/" className={s.footer__socialIconLink}>
                <Vk />
              </a>
            </li>
            <li className={s.footer__socialIconsItem}>
              <a href="/" className={s.footer__socialIconLink}>
                <Telegram />
              </a>
            </li>
            <li className={s.footer__socialIconsItem}>
              <a href="/" className={s.footer__socialIconLink}>
                <YandexZen />
              </a>
            </li>
            <li className={s.footer__socialIconsItem}>
              <a href="/" className={s.footer__socialIconLink}>
                <Odnoklassniki />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
