import React, { useContext, useEffect } from "react";
import style from "./LanguageSwitcher.module.css";
import Flag from "react-world-flags";
import { LanguageContext } from "../../../context/LanguageContext/LanguageContext";
import { QueryContext } from "../../../context/QueryContext/QueryContext";

export const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext);
  const { updateParams, updateFilms } = useContext(QueryContext);

  console.log("updejtujemy languages");
  useEffect(() => {
    const newParams = updateParams("language", language.code).toString();
    updateFilms(newParams);
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
