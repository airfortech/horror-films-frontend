import React, { useState, useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { LanguageContext } from "../../../../context/LanguageContext/LanguageContext";

import style from "./SwitcherIcon.module.css";

const sortModes = [
  { type: "ascending", class: "" },
  { type: "descending", class: "reverse" },
];

export const SwitcherIcon = ({ setSearchValues }) => {
  const { translations } = useContext(LanguageContext);
  const [sortMode, setSortMode] = useState(sortModes[0]);
  const ref = useRef();
  const box = gsap.utils.selector(ref);

  const switchCategory = () => {
    setSortMode(() =>
      sortMode === sortModes[0] ? sortModes[1] : sortModes[0]
    );
  };

  useEffect(() => {
    console.log(sortMode);
    setSearchValues(prevState => ({
      ...prevState,
      sort_type: sortMode.type,
    }));

    gsap.to(box("div"), {
      scaleY: i => {
        return sortMode.type === "ascending" ? 0.2 + 0.2 * i : 1 - 0.2 * i;
      },
      stagger: 0.05,
    });
  }, [sortMode]);

  return (
    <button
      data-tip={translations.tooltip.sortType}
      // data-offset="{'top': 20}"
      type="button"
      className={style.switcherIcon}
      onClick={switchCategory}
    >
      <div ref={ref}>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
      </div>
    </button>
  );
};
