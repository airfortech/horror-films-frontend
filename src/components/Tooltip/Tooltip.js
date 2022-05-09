import React, { useEffect, useContext } from "react";
import ReactTooltip from "react-tooltip";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";

import style from "./Tooltip.module.css";

export const Tooltip = () => {
  const { language } = useContext(LanguageContext);
  useEffect(() => {
    setTimeout(() => {
      console.log("rebuild");
      ReactTooltip.rebuild();
    }, 500);
  }, [language]);
  return (
    <ReactTooltip
      className={style.tooltip}
      effect="solid"
      place="top"
      getContent={dataTip => dataTip}
    />
  );
};
