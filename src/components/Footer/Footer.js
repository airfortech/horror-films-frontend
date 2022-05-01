import React from "react";
import style from "./Footer.module.css";
import tmdbLogo from "../../assets/images/tmdb-logo.svg";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>© 2022 by airm</p>
      <a href="https://github.com/airfortech">
        <i class="bx bxl-github"></i>
        <p>Source code</p>
      </a>
      <a href="https://github.com/airfortech">
        <img src={tmdbLogo} alt="www.themoviedb.org logo" />
      </a>
    </footer>
  );
};
