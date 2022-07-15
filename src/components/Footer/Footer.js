import React from "react";
import tmdbLogo from "../../assets/images/tmdb-logo.svg";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="https://github.com/airfortech">
        <p>© 2022 by airm</p>
      </a>
      <a href="https://github.com/airfortech/horror-films-frontend">
        <i className="bx bxl-github"></i>
        <p>Source code</p>
      </a>
      <a href="https://www.themoviedb.org">
        <img src={tmdbLogo} alt="www.themoviedb.org logo" />
      </a>
    </footer>
  );
};
