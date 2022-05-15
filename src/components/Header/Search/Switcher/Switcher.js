import React, { useContext, useState, useEffect } from "react";
import { categories } from "../../../../variables";
import { LanguageContext } from "../../../../context/LanguageContext/LanguageContext";
// import { useSearchParams } from "react-router-dom";
import style from "./Switcher.module.css";

export const Switcher = ({ setSearchValues, initialValue }) => {
  const initialCategory = categories.indexOf(initialValue);
  const [category, setCategory] = useState(
    initialCategory >= 0 ? initialCategory : 0
  );
  console.log("category: ", categories);
  const { translations } = useContext(LanguageContext);
  // const [searchParams, setSearchParams] = useSearchParams();

  const switchCategory = i => {
    setCategory(prevState =>
      prevState + i === -1
        ? categories.length - 1
        : (prevState + i) % categories.length
    );
  };

  useEffect(() => {
    // const newSearchParams = searchParams;
    // newSearchParams.set("sort_by", categories[category]);
    // setSearchParams(newSearchParams);
    setSearchValues(prevState => ({
      ...prevState,
      sort_by: categories[category],
    }));
  }, [category]);

  return (
    <button
      type="button"
      className={style.switcher}
      data-tip={translations.tooltip.sortCategories}
    >
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
  );
};
