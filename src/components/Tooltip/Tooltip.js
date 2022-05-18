import React from "react";
import Tippy from "@tippyjs/react";
import style from "./Tooltip.module.css";

export const Tooltip = ({ children, title, placement }) => {
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
