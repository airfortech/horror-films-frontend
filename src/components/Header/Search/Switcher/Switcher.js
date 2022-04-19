import React, { useContext, useState, useEffect } from "react";
import { categories } from "../../../../variables";
import { LanguageContext } from "../../../../context/LanguageContext/LanguageContext";
import { QueryContext } from "../../../../context/QueryContext/QueryContext";
import style from "./Switcher.module.css";

export const Switcher = () => {
  const [category, setCategory] = useState(0);
  const { translations } = useContext(LanguageContext);
  const { updateParams } = useContext(QueryContext);

  const switchCategory = i => {
    setCategory(prevState =>
      prevState + i === -1
        ? categories.length - 1
        : (prevState + i) % categories.length
    );
  };

  useEffect(() => {
    const newParams = updateParams("sort_by", categories[category]).toString();
    console.log(newParams.toString());
  }, [category]);

  // useEffect(() => {
  //   const color = getComputedStyle(document.documentElement).getPropertyValue(
  //     "--color-" + (category + 1)
  //   );

  //   document.documentElement.style.setProperty("--primary-color", color);
  // }, [category]);

  return (
    <button type="button" className={style.switcher}>
      <i className="bx bx-chevron-left" onClick={() => switchCategory(-1)}></i>
      <span onClick={() => switchCategory(1)}>
        {translations.searchCategories[categories[category]]}
      </span>
      <i className="bx bx-chevron-right" onClick={() => switchCategory(1)}></i>
    </button>
  );
};
