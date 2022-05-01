import React, { useState, useContext, useEffect, useRef } from "react";
// import { useSearchParams } from "react-router-dom";
import { gsap } from "gsap";
import style from "./SwitcherIcon.module.css";

const sortModes = [
  { type: "ascending", class: "" },
  { type: "descending", class: "reverse" },
];

export const SwitcherIcon = ({ setSearchValues }) => {
  const [sortMode, setSortMode] = useState(sortModes[0]);
  // const [searchParams, setSearchParams] = useSearchParams();
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
    // const newSearchParams = searchParams;
    // newSearchParams.set("sort_type", sortMode.type);
    // setSearchParams(newSearchParams);

    gsap.to(box("div"), {
      scaleY: i => {
        return sortMode.type === "ascending" ? 0.2 + 0.2 * i : 1 - 0.2 * i;
      },
      stagger: 0.05,
    });
  }, [sortMode]);

  return (
    <button
      type="button"
      ref={ref}
      className={style.switcherIcon}
      onClick={switchCategory}
    >
      <div className={style.box}></div>
      <div className={style.box}></div>
      <div className={style.box}></div>
      <div className={style.box}></div>
      <div className={style.box}></div>
    </button>
  );
};
