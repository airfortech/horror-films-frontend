import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../../../context/LanguageContext/LanguageContext";
import { Tooltip } from "../../../Tooltip/Tooltip";
import { categories } from "../../../../variables";
import style from "./Switcher.module.css";

export const Switcher = ({ setSearchValues, initialValue }) => {
  const initialCategory = categories.indexOf(initialValue);
  const [category, setCategory] = useState(
    initialCategory >= 0 ? initialCategory : 0
  );
  const { translations } = useContext(LanguageContext);

  const switchCategory = i => {
    setCategory(prevState =>
      prevState + i === -1
        ? categories.length - 1
        : (prevState + i) % categories.length
    );
  };

  useEffect(() => {
    setSearchValues(prevState => ({
      ...prevState,
      sort_by: categories[category],
    }));
  }, [category]);

  return (
    <Tooltip title={translations.tooltip.sortCategories}>
      <button type="button" className={style.switcher}>
        <div>
          <i
            className="bx bx-chevron-left"
            onClick={() => switchCategory(-1)}
          ></i>
          <span onClick={() => switchCategory(1)}>
            {translations.searchCategories[categories[category]]}
          </span>
          <i
            className="bx bx-chevron-right"
            onClick={() => switchCategory(1)}
          ></i>
        </div>
      </button>
    </Tooltip>
  );
};
