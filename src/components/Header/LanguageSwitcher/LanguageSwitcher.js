import React, { useContext, useEffect } from "react";
import style from "./LanguageSwitcher.module.css";
import Flag from "react-world-flags";
import { LanguageContext } from "../../../context/LanguageContext/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

export const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  console.log("updejtujemy languages");
  useEffect(() => {
    console.log("redirect: language switcher");
    navigate("/" + language.code + pathname.slice(3) + search);
  }, [language]);

  return (
    <button type="button" className={style.switcher}>
      <i className="bx bx-chevron-left" onClick={() => switchLanguage(-1)}></i>
      <Flag
        className={style.flag}
        code={language.flag}
        onClick={() => switchLanguage(1)}
      />
      <i className="bx bx-chevron-right" onClick={() => switchLanguage(1)}></i>
    </button>
  );
};
