import React, { useContext, useEffect, useState } from "react";
import style from "./Search.module.css";
import { Switcher } from "./Switcher/Switcher";
import { SwitcherIcon } from "./SwitcherIcon/SwitcherIcon";
import { LanguageContext } from "../../../context/LanguageContext/LanguageContext";
import { useLocation, useNavigate } from "react-router-dom";

export const Search = () => {
  const { translations } = useContext(LanguageContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchValues, setSearchValues] = useState({
    title: "",
    sort_by: "title",
    sort_type: "ascending",
  });

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
          // id="exampleInputEmail1"
          // aria-describedby="emailHelp"
        />
        <button type="submit" className={style.inputSubmit}>
          <i className={`bx bx-search-alt ${style.hovered}`}></i>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <Switcher setSearchValues={setSearchValues} />
      <SwitcherIcon setSearchValues={setSearchValues} />
    </form>
  );
};
