import React, { useEffect, useContext } from "react";
import ReactTooltip from "react-tooltip";
import { LanguageContext } from "../../context/LanguageContext/LanguageContext";

import Tippy from "@tippyjs/react";
// import "tippy.js/dist/tippy.css";

import style from "./Tooltip.module.css";

// export const Tooltip = () => {
//   const { language } = useContext(LanguageContext);
//   useEffect(() => {
//     setTimeout(() => {
//       console.log("rebuild");
//       ReactTooltip.rebuild();
//     }, 500);
//   }, [language]);
//   return (
//     <ReactTooltip
//       className={style.tooltip}
//       effect="solid"
//       place="top"
//       getContent={dataTip => dataTip}
//     />
//   );
// };

export const Tooltip = ({ children, title, placement }) => {
  const { language } = useContext(LanguageContext);

  return (
    <Tippy
      className={style["tippy-tooltip"]}
      content={title}
      placement={placement}
    >
      {children}
    </Tippy>
  );
};
