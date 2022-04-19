import React, { createContext, useState } from "react";
import { languageOptions } from "../../languages/languages";
import { translations } from "../../languages/languages";

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [language, setLanguage] = useState(0);

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
