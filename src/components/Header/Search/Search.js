import React, { useContext, useEffect, useState } from "react";
import style from "./Search.module.css";
import { Switcher } from "./Switcher/Switcher";
import { SwitcherIcon } from "./SwitcherIcon/SwitcherIcon";
import { LanguageContext } from "../../../context/LanguageContext/LanguageContext";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getFilmsUrlParams } from "../../../variables";

export const Search = () => {
  const { translations } = useContext(LanguageContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSearchparams = new URLSearchParams(getFilmsUrlParams);
  const [searchValues, setSearchValues] = useState({
    title: searchParams.get("title") || initialSearchparams.get("title"),
    sort_by: searchParams.get("sort_by") || initialSearchparams.get("sort_by"),
    sort_type:
      searchParams.get("sort_type") || initialSearchparams.get("sort_type"),
  });

  console.log("searchValues: ", searchValues);

  const handleInputChange = e => {
    setSearchValues(prevState => ({ ...prevState, title: e.target.value }));
  };

  const handleInputSend = e => {
    e.preventDefault();
    const lang = pathname.slice(1, 3);
    const { title, sort_by, sort_type } = searchValues;
    const link = `/${lang}/films/?title=${title}&page=1&sort_type=${sort_type}&sort_by=${sort_by}`;
    navigate(link);
  };

  useEffect(() => {
    console.log(searchValues);
  }, [searchValues]);

  return (
    <form className={style.form} onSubmit={handleInputSend}>
      <div className={style.inputContainer}>
        <input
          className={style.input}
          type="text"
          placeholder={translations.searchInput}
          value={searchValues.title}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={style.inputSubmit}
          data-tip={translations.tooltip.search}
        >
          <i className={`bx bx-search-alt ${style.hovered}`}></i>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <Switcher
        setSearchValues={setSearchValues}
        initialValue={searchValues.sort_by}
      />
      <SwitcherIcon
        setSearchValues={setSearchValues}
        initialValue={searchValues.sort_type}
      />
    </form>
  );
};
