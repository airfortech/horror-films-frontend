import React, { useContext } from "react";
import style from "./Header.module.css";
import { Search } from "./Search/Search";
import { MusicPlayer } from "../MusicPlayer/MusicPlayer";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";
import { Fog } from "../../effects/Fog/Fog";
import { useLocation } from "react-router-dom";
import { Tooltip } from "../Tooltip/Tooltip";

export const Header = () => {
  const languageContext = useContext(LanguageContext);
  const { translations } = languageContext;
  const { pathname, search } = useLocation();
  return (
    <header className={style.header}>
      <Tooltip />
      {/* <p style={{ position: "absolute" }}>{pathname + search}</p> */}
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
      <div className={style.toolbar}>
        <MusicPlayer />
        <LanguageSwitcher />
      </div>
      <Search />
      <Fog opacity={1} />
    </header>
  );
};
