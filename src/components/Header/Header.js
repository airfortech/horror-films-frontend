import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { Search } from "./Search/Search";
import { MusicPlayer } from "../MusicPlayer/MusicPlayer";
import { Fog } from "../../effects/Fog/Fog";
import { getFilmsUrlParams } from "../../variables";
import { languageOptions } from "../../languages/languages";
import style from "./Header.module.css";

export const Header = () => {
  const languageContext = useContext(LanguageContext);
  const { translations } = languageContext;
  const { pathname } = useLocation();

  const currentLanguage =
    languageOptions.findIndex(({ code }) => pathname.slice(1, 3) === code) >= 0
      ? pathname.slice(1, 3)
      : languageOptions[0].code;
  const rootPath = "/" + currentLanguage + "/films/?" + getFilmsUrlParams;

  return (
    <header className={style.header}>
      <Link to={rootPath}>
        <h1>
          <span
            className={style.glitch}
            data-text={translations.header.firstLine}
          >
            {translations.header.firstLine}
          </span>
          <span
            className={style.glitch + " " + style.delayed}
            data-text={translations.header.secondLine}
          >
            {translations.header.secondLine}
          </span>
        </h1>
      </Link>
      <div className={style.toolbar}>
        <MusicPlayer />
        <LanguageSwitcher />
      </div>
      <Search />
      <Fog opacity={1} />
    </header>
  );
};
