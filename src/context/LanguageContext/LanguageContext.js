import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { languageOptions } from "../../languages/languages";
import { translations } from "../../languages/languages";

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const { pathname } = useLocation();
  const startedLang = languageOptions.findIndex(
    option => option.code === pathname.slice(1, 3)
  );
  const [language, setLanguage] = useState(startedLang >= 0 ? startedLang : 0);

  const switchLanguage = i => {
    setLanguage(prevState =>
      prevState + i === -1
        ? languageOptions.length - 1
        : (prevState + i) % languageOptions.length
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language: languageOptions[language],
        switchLanguage,
        translations: translations[languageOptions[language].code],
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};
